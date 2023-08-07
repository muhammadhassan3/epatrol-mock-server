const express = require("express")
const patrol = require("../controller/patrol")
const app = express.Router()

app.route("/").get(patrol.getAll)
app.route("/:id/verify").put(patrol.verify)

module.exports = app