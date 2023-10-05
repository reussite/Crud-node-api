const { PrismaClient } = require("@prismaClient");

const prisma = PrismaClient();

module.exports = {
  createStudy: async (studyData) => {
    return prisma.study.create(studyData);
  },

  updateStudy: async (studyId) => {
    return prisma.studyData.update({
      where: { id: studyId },
    });
  },

  deleteStudy: async (studyId) => {
    return prisma.study.delete({
      where: { id: studyId },
    });
  },
  findUniqueStudy: async (studyId, studyData) => {
    return prisma.study.findUnique({
      where: { id: studyId },
      data: studyData
    });
  },
  getAllStudy: async () => {
    return prisma.study.findMany();
  },
};
