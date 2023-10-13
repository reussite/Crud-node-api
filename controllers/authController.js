const { PrismaClient } = require("@prisma/client");
const userModel = require("../models/User");

module.exports = {
  signIn: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existingEmail = await userModel.findUserByEmail(email);
      if (!existingEmail) {
        const newUser = await userModel.registerUser({
          name: name,
          email: email,
          password: password,
        });

        res.status(200).json({
          status: "success",
          message: "User registered successfully",
          newUser: newUser,
        });
      }
      res.status(201).json({
        status: "success",
        message: "Email already exists !",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
