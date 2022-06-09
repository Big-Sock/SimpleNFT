const express = require("express")
const router = express.Router()
const Project = require("../models/project.model")
const crypto = require("crypto")
const ContractTemplate = require("../models/contractTemplate.model")

const validateProject = (data) => {
  const { name, description, chain, testChain, owner } = data
  if (!(name && description && chain && testChain && owner))
    throw Error("Missing data")
}

const validateContract = (data) => {
  const { name, mainnetAddress, testnetAddress, abi } = data
  if (!(name && mainnetAddress && testnetAddress && abi))
    throw Error("Missing data")
}

// Create a new project
router.post(
  "/",
  async (req, res) => {
    try {
      validateProject(req.body)
      const {
        name,
        image,
        description,
        chain,
        testChain,
        mainnetProvider,
        testnetProvider,
        owner,
      } = req.body
      const apiKey = crypto.randomBytes(16).toString("hex")

      let newProject = new Project({
        ownerId: req.user.id,
        apiKey,
        name,
        image,
        description,
        chain,
        testChain,
        mainnetProvider,
        testnetProvider,
        owner,
      })
      newProject = await newProject.save()
      res.send(`Created Project ${newProject._id.toString()}`)
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

// Get a specific project
router.get(
  "/:id",
  async (req, res) => {
    try {
      const project = await Project.findOne({
        ownerId: req.user.id,
        _id: req.params.id,
      })
      res.send(project)
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

// Get a project contract
router.get(
  "/:id/contracts/:contractId",
  async (req, res) => {
    try {
      const project = await Project.findOne({
        ownerId: req.user.id,
        _id: req.params.id,
      }).populate({ path: "contracts.template" })
      const contract = project.contracts.id(req.params.contractId)
      res.send(contract)
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

// Add contracts to a project
router.post(
  "/:id/contracts/:contractId",
  async (req, res) => {
    try {
      const template = await ContractTemplate.findOne({
        _id: req.params.contractId,
      })

      const project = await Project.findOne({
        ownerId: req.user.id,
        _id: req.params.id,
      })
      project.contracts.push({
        template: template._id,
        name: template.name,
        description: template.description,
        tag: template.tag,
      })
      await project.save()
      res.send(project)
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

// Update a project contract
router.put(
  "/:id/contracts/:contractId",
  async (req, res) => {
    console.log(req.body)
    try {
      const project = await Project.findOne({
        ownerId: req.user.id,
        _id: req.params.id,
      })
      const contract = project.contracts.id(req.params.contractId)
      contract.set(req.body)

      await project.save()
      res.send(project)
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

// Remove contracts from a project
router.delete(
  "/:id/contracts/:contractId",
  async (req, res) => {
    try {
      const project = await Project.findOne({
        ownerId: req.user.id,
        _id: req.params.id,
      })
      project.contracts.pull(req.params.contractId)
      await project.save()
      res.sendStatus(200)
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

// Get all projects owned by that user
router.get(
  "/",
  async (req, res) => {
    try {
      const projects = await Project.find({ ownerId: req.user.id })
      res.send(projects)
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

// Update a specific project
router.put(
  "/:id",
  async (req, res) => {
    try {
      validateProject(req.body)
      const {
        name,
        image,
        description,
        chain,
        testChain,
        mainnetProvider,
        testnetProvider,
        owner,
      } = req.body
      await Project.updateOne(
        {
          ownerId: req.user.id,
          _id: req.params.id,
        },
        {
          name,
          image,
          description,
          chain,
          testChain,
          mainnetProvider,
          testnetProvider,
          owner,
        }
      )
      res.send("Updated project")
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

module.exports = router
