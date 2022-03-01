/*
  Warnings:

  - You are about to drop the column `type` on the `TimeblockTaskBlock` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TimeblockTask" ADD COLUMN     "dayOfWeek" INTEGER,
ADD COLUMN     "endMinute" INTEGER,
ADD COLUMN     "startMinute" INTEGER,
ADD COLUMN     "type" TEXT NOT NULL DEFAULT E'normal';

-- AlterTable
ALTER TABLE "TimeblockTaskBlock" DROP COLUMN "type";
