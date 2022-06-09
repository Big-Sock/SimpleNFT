const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contractTemplateSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tag: String,
  abi: { type: String, required: true },
  bytecode: { type: String, required: true },
})

module.exports = mongoose.model("contractTemplate", contractTemplateSchema)
