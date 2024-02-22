const app = require("./app")

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT

app.listen(PORT, ()=>{ // listens for request at a specific PORT 
    console.log(`Listening on PORT: ${PORT}`)
})