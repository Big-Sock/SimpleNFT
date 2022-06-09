const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contractSchema = new Schema({
  name: String,
  description: String,
  tag: { type: String, required: false },
  mainnetAddress: String,
  testnetAddress: String,
  abi: String,
  isDeployed: { type: Boolean, default: false, required: true },
  template: {
    type: mongoose.ObjectId,
    required: true,
    ref: "contractTemplate",
  },
})

const projectSchema = new Schema({
  ownerId: {
    type: mongoose.ObjectId,
    ref: "user",
    required: true,
  },
  apiKey: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  chain: {
    type: Number,
    required: true,
  },
  testChain: {
    type: Number,
    required: true,
  },
  mainnetProvider: {
    type: String,
    required: true,
  },
  testnetProvider: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  contracts: {
    type: [contractSchema],
  },
})

module.exports = mongoose.model("project", projectSchema)
