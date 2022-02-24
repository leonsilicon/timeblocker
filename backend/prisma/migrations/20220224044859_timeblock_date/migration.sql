/*
  Warnings:

  - Added the required column `date` to the `Timeblock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Timeblock" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "TimeblockTask" ALTER COLUMN "isHidden" DROP DEFAULT;
