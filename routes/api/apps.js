const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const App = require("../../models/App");

router.post("/links", (req, res) => {

    const role_attributes = req.body.role_attributes;
    App.find({ role_attributes: req.body.attributes }, function(err, items){
        console.log(items)
        res.send(items);
    })
  });
  module.exports = router;