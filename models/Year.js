const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

  createYear : async(yearData)=>{

    return prisma.year.create({
      data: yearData,
    });
  },
  
}