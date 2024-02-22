const db = require("../db/dbConfig.js")


const getAllAnimes = async() =>{
    try {
        const animes = await db.any("SELECT * FROM animes");
        return animes;
    }catch(error){
        console.log("error", error)
        return error
    }
}


module.exports = {
    getAllAnimes
}