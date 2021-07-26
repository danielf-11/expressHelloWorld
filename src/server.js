const express = require('express')
const app = express()
const {helloWord} = require("./controllers")


app.use(express.json())

app.post('/hello', helloWord)

//http://localhost:5000/hello

app.listen(5000, ()=>{
    console.log("Listening on port 5000")

})

