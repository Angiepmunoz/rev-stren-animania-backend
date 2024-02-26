const express = require("express");
const animes = express.Router();
const animesArr = require("../data/animes");
const {
  getAllAnimes,
  getOneAnime,
  createAnime,
  updateOneAnime,
  deleteOneAnime
} = require("../queries/animes.js");

// validation
function validateAnime(req, res, next) {
  const body = req.body;
  if (!body.name || !body.description) {
    res.status(400).json({payload: "Please make sure to include a Name and a Description"});
  } else {
    next();
  }
}

// GET all resources INDEX
animes.get("/", async (req, res) => {
  try {
    const allAnimes = await getAllAnimes();
    res.status(200).json({ payload: allAnimes });
  } catch (error) {
    res.status(404).json({ payload: error });
  }
});

// GET one resource SHOW
animes.get("/:animeId", async (req, res) => {
  const { animeId } = req.params;
  try {
    const anime = await getOneAnime(animeId);
    res.status(200).json({ payload: anime });
  } catch (error) {
    res.status(404).json({ payload: error });
  }
  // const foundAnime = animesArr.filter(anime => anime.id == animeId)
  // if(foundAnime.length){
  //     res.status(200).json({payload: foundAnime[0]})
  // }else {
  //     res.status(404).json({payload: "anime not found"})
  // }
});

// CREATE/POST a resource
animes.post("/", validateAnime, async (req, res) => {
  const body = req.body;
  try {
    const newAnime = await createAnime(body);
    res.status(201).json({ payload: newAnime });
  } catch (error) {
    res.status(404).json({ payload: error });
  }
  // animesArr.push(newAnime)
  // res.status(201).json({payload: animesArr[animesArr.length-1]})
});

// UPDATE/PUT a resource
animes.put("/:animeId", validateAnime, async (req, res) => {
  const { animeId } = req.params;
  const body = req.body;
  try {
    const updatedAnime = await updateOneAnime(animeId, body);
    res.status(201).json({ payload: updatedAnime });
  } catch (error) {
    res.status(404).json({ payload: error });
  }

  // animesArr.splice(animeId-1,1,updatedAnime);
  // res.status(201).json({payload: animesArr[animeId-1]})
});

// DESTROY a resource
animes.delete("/:animeId", async (req, res) => {
  const { animeId } = req.params;
  try {
    const deletedAnime = await deleteOneAnime(animeId)
    res.status(200).json({payload: deletedAnime});
  } catch (error) {
    res.status(404).json({payload: error})
  }
//   const [removedAnime] = animesArr.splice(animeId - 1, 1);
//   res.status(200).json({ payload: removedAnime });
});

module.exports = animes;
