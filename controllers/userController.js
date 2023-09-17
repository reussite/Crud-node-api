const useModel = require("../models/User");

module.exports = {
  createUser: async (req, res) => {
    const { name, firstname, email, birthday, nationality, contact, phone } =req.body;
  },
};
