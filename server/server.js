const express = require("express")

const dotenv = require("dotenv")
dotenv.config()

const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const server = require("http").createServer(app)
const passport = require("passport")
const cookieParser = require("cookie-parser")
const connectDB = require("./modules/db")
const userRouter = require("./routes/user.router")
const projectsRouter = require("./routes/projects.router.js")
const contractsRouter = require("./routes/contracts.router.js")
const adminRouter = require("./routes/admin.router.js")


connectDB()

const PORT = process.env.PORT || 5000

const corsOptions = {
  origin: [
    "https://simple-web3-cms.herokuapp.com",
    "https://simple-web3-cms-staging.herokuapp.com",
    "http://localhost:3000",
  ],
  methods: "GET,PUT,POST,DELETE,OPTIONS",
  credentials: true,
}

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://simple-web3-cms.herokuapp.com")
//   res.header("Access-Control-Allow-Credentials", true)
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, content-type, application/json, X-PINGOTHER")
//   next()
// })
app.use(cors(corsOptions))

app.use(cookieParser())
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))

app.use("/user", userRouter)
app.use("/projects", projectsRouter)
app.use("/contracts", contractsRouter)
app.use("/admin", adminRouter)

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})
