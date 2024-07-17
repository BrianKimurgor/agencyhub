/*
  Warnings:

  - You are about to drop the column `agencyId` on the `Branding` table. All the data in the column will be lost.
  - You are about to drop the column `agencyId` on the `Integration` table. All the data in the column will be lost.
  - You are about to drop the column `agencyId` on the `Performance` table. All the data in the column will be lost.
  - You are about to drop the column `parentAgencyId` on the `SubAgency` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Branding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Integration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Performance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentCompanyId` to the `SubAgency` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Branding` DROP FOREIGN KEY `Branding_agencyId_fkey`;

-- DropForeignKey
ALTER TABLE `Integration` DROP FOREIGN KEY `Integration_agencyId_fkey`;

-- DropForeignKey
ALTER TABLE `Performance` DROP FOREIGN KEY `Performance_agencyId_fkey`;

-- DropForeignKey
ALTER TABLE `SubAgency` DROP FOREIGN KEY `SubAgency_parentAgencyId_fkey`;

-- AlterTable
ALTER TABLE `Branding` DROP COLUMN `agencyId`,
    ADD COLUMN `companyId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Integration` DROP COLUMN `agencyId`,
    ADD COLUMN `companyId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Performance` DROP COLUMN `agencyId`,
    ADD COLUMN `companyId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `SubAgency` DROP COLUMN `parentAgencyId`,
    ADD COLUMN `parentCompanyId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `SubAgency` ADD CONSTRAINT `SubAgency_parentCompanyId_fkey` FOREIGN KEY (`parentCompanyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Performance` ADD CONSTRAINT `Performance_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Branding` ADD CONSTRAINT `Branding_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Integration` ADD CONSTRAINT `Integration_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
