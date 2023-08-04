const express = require("express")
const patrol = require("../controller/patrol")
const app = express.Router()

app.route("/").get(patrol.getAll)

module.exports = app