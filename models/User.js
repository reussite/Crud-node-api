const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient

module.exports = {

  userRegister : async(userData)=>{
    return prisma.user.create({
      data: userData
    });
  },

  userUpdate: async(userId, updateData)=>{
    return prisma.user.update({
      where: {id:userId},
      data: updateData
    });
  },

  userDelete: async(userId)=>{
    return prisma.user.delete({
      where: {id:userId},
    });
  },

  userList: async()=>{
    return prisma.user.findMany();
  },

  findUniqueUser: async(userId)=>{
    return prisma.user.findUnique({
      where: {userId:userId},
    });
  },
}