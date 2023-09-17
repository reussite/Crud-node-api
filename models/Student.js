const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  studentRegister: async (studentData) => {
    return prisma.student.create({
      data: studentData,
    });
  },

  studentUpdate: async (studentId, updateData) => {
    return prisma.student.update({
      where: { id: studentId },
      data: updateData,
    });
  },

  studentDelete: async (studentId) => {
    return prisma.student.delete({
      where: { id: studentId },
    });
  },

  studentList: async () => {
    return prisma.student.findMany();
  },

  findUniquestudent: async (studentId) => {
    return prisma.student.findUnique({
      where: { studentId: studentId },
    });
  },
};
