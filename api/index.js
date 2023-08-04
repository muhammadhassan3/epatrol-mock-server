const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const index = express()

const log = morgan('tiny')
index.use(cors())
index.use(log)
index.use(bodyParser.urlencoded({extended: true}))
index.use(bodyParser.json())
index.get("/", (req, res)=>{
    res.json({
        error: false,
        message: "Server online"
    })
})
index.use("/*", (req, res) => {
    res.status(404).json({
        error: true,
        message: "Not Found"
    })
})

index.listen(80, 'localhost', () => {
    console.log("Server started")
})