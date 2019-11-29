const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: String,
  password: String,
  attributes: String
});
module.exports = User = mongoose.model("users", UserSchema);