/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_filesId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_studyId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_yearId_fkey`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPERVISOR', 'ADMIN', 'STUDENT') NOT NULL DEFAULT 'SUPERVISOR',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `nationnality` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `filesId` INTEGER NULL,
    `studyId` INTEGER NULL,
    `yearId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_filesId_fkey` FOREIGN KEY (`filesId`) REFERENCES `Files`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_studyId_fkey` FOREIGN KEY (`studyId`) REFERENCES `Study`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_yearId_fkey` FOREIGN KEY (`yearId`) REFERENCES `Year`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
