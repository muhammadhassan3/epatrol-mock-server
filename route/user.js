const express = require("express")
const user = require("../controller/user")
const app = express.Router()

app.route("/login").post(user.login)

module.exports = app