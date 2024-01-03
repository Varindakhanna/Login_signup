const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//creating a user
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "password must be of 5 characters atleast").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check if the user with same email exists already

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      // .then(user => res.json(user)).catch(err =>{
      //     console.log(err)
      //     res.json({error:'Please enter a unique value for email',message:err.message})
      // })

      res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
