const express = require("express")
const router = express.Router()
const User = require("../models/user.model")
const Project = require("../models/project.model")

// Create a new project



router.get(
  "/userdata",
  async (req, res) => {
    console.log(req.cookies)
    try {
      let user = await User.findById(req.user.id)
      res.send(user)
    } catch (error) {
      console.error(error)
      res.sendStatus(500)
    }
  }
)

router.post(
  "/logout",
  async (req, res) => {
    try {
      res.clearCookie("token", { sameSite: "none", secure: true })
      res.sendStatus(200)
    } catch (error) {
      console.error(error)
      res.sendStatus(500)
    }
  }
)

module.exports = router
