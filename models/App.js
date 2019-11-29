const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const AppSchema = new Schema({
  name: String,
  category: String,
  role_attributes: String
});
module.exports = App = mongoose.model("applications", AppSchema);