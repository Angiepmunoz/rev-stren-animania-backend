const express = require("express"); // Dependency
const app = express(); // configuration 
const animesController = require("./controllers/animes.js")

app.use(express.json()) // Parse incoming JSON 

app.use("/animes", animesController);

app.get("/", (_, response)=>{
    response.send("Welcome to Animania")
});


// EXPORT
module.exports = app;