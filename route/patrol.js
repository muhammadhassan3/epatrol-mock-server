const express = require("express")
const patrol = require("../controller/patrol")
const app = express.Router()

app.route("/").get(patrol.getAll)
app.route("/:id/verify").put(patrol.verify)
app.route("/:id").get(patrol.detail)
app.route("/:patrolId/:eventId").delete(patrol.delete)
app.route("/:id/").post(patrol.addEvent)
app.route("/:id/finish").post(patrol.finish)

module.exports = app