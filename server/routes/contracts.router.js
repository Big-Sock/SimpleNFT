const express = require("express")
const router = express.Router()
const ContractTemplate = require("../models/contractTemplate.model")

// Get all contract templates
router.get(
  "/templates",
  async (req, res) => {
    console.log(req.user)
    try {
      const contracts = await ContractTemplate.find()
      res.send(contracts)
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

// Get a specific contract template
router.get(
  "/templates/:id",
  async (req, res) => {
    try {
      const contract = await ContractTemplate.findOne({
        _id: req.params.id,
      })
      res.send(contract)
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

router.post(
  "/templates",
  async (req, res) => {
    //TODO: replace this temporary admin gateway
    if (!req.user.email.includes("@breakthroughlabs.io"))
      return res.status(500).send("Admin only")
    try {
      const { name, description, abi, bytecode } = req.body
      const contract = new ContractTemplate({
        name,
        description,
        abi: JSON.stringify(abi),
        bytecode,
      })
      await contract.save()
      res.send("Added Contract")
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

module.exports = router
