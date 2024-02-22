const express = require("express")
const animes = express.Router();
const animesArr = require("../data/animes")
const { getAllAnimes } = require("../queries/animes.js")

// GET all resources INDEX
animes.get("/", async (req, res) => {
    try{
        const allAnimes = await getAllAnimes();
        res.status(200).json({payload: allAnimes})
    }catch(error){
        res.status(404).json({payload: error})
    }
    
})

// GET one resource SHOW
animes.get("/:animeId", (req, res) => {
    const {animeId} = req.params;
    const foundAnime = animesArr.filter(anime => anime.id == animeId)
    if(foundAnime.length){
        res.status(200).json({payload: foundAnime[0]})
    }else {
        res.status(404).json({payload: "anime not found"})
    }
})

// CREATE/POST a resource 
animes.post("/", (req, res)=>{
    const newAnime = req.body;
    animesArr.push(newAnime)
    res.status(201).json({payload: animesArr[animesArr.length-1]})
})

// UPDATE/PUT a resource
animes.put("/:animeId", (req, res)=>{
    const {animeId} = req.params;
    const updatedAnime = req.body;
    animesArr.splice(animeId-1,1,updatedAnime);
    res.status(201).json({payload: animesArr[animeId-1]})
})


// DESTROY a resource 
animes.delete("/:animeId", (req, res)=> {
    const {animeId} = req.params;
    const [removedAnime] = animesArr.splice(animeId-1,1);
    res.status(200).json({payload: removedAnime})
})


module.exports = animes;