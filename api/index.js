const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const user = require("../route/user")
const patrol = require("../route/patrol")

const app = express()

const log = morgan('tiny')
app.use(cors())
app.use(log)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(user)
app.use("/patrol",patrol)
app.get("/", (req, res)=>{
    res.json({
        error: false,
        message: "Server online"
    })
})
app.use("/*", (req, res) => {
    res.status(404).json({
        error: true,
        message: "Not Found"
    })
})

app.listen(80, 'localhost', () => {
    console.log("Server started")
})