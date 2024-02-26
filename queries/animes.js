const db = require("../db/dbConfig.js");

const getAllAnimes = async () => {
  try {
    const animes = await db.any("SELECT * FROM animes");
    return animes;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

const getOneAnime = async (id) => {
  try {
    const anime = await db.one("SELECT * FROM animes WHERE id=$1", id);
    return anime;
  } catch (error) {
    return error;
  }
};

const createAnime = async ({ name, description }) => {
  try {
    const newAnime = await db.one(
      "INSERT INTO animes (name, description) VALUES ($1, $2) RETURNING *",
      [name, description]
    );
    return newAnime;
  } catch (error) {
    return error;
  }
};

const updateOneAnime = async (id, body) => {
  const { name, description } = body;
  try {
    const updatedAnime = await db.one(
      "UPDATE animes SET name=$1, description=$2 WHERE id=$3 RETURNING *",
      [name, description, id]
    );
    return updatedAnime;
  } catch (error) {
    return error;
  }
};

const deleteOneAnime = async (id) => {
  try {
    const deletedAnime = await db.one(
      "DELETE FROM animes WHERE id=$1 RETURNING *",
      id
    );
    return deletedAnime;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAnimes,
  getOneAnime,
  createAnime,
  updateOneAnime,
  deleteOneAnime,
};
