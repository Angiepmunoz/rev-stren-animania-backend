const express = require("express"); // Dependency // requiring express from our node modules
const app = express(); // configuration // storing an instance of express in our app variable 
const animesController = require("./controllers/animes.js")

app.use(express.json()) // Parse incoming JSON - when we make an http request we receive a json string and we parse it into a json object. We need to place our json parser before our routes 

app.use("/animes", animesController); // binding our path to the routes found in our controller file 

app.get("/", (_, res)=>{ // route for our "homepage"
    res.send("Welcome to Animania")
});

app.get("*", (_,res)=>{
    res.status(404). send("The request you are looking for doesn't exist")
})


// EXPORT
module.exports = app;