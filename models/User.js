const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  registerUser: async (userData) => {
    return prisma.user.create({
      data: userData,
    });
  },
  delectUser: async (userId) => {
    return prisma.user.delete({
      where: { id: userId },
    });
  },

  findUser: async (userId) => {
    return prisma.user.findUnique({
      where: { id: userId },
    });
  },

  updateUser: async (userId, userData) => {
    return prisma.user.update({
      where: { id: userId },
      data: userData,
    });
  },
  findUserByEmail: async (email) => {
    return prisma.user.findFirst({
      where: { email: email },
    });
  },
};
