const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  
  login: async(req, res)=>{
    try {
      const {email, password} = req.body;
     // const validEmail 
    } catch (error) {
      
    }
  }
};
