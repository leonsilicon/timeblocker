/*
  Warnings:

  - You are about to drop the column `endTimestamp` on the `TimeblockTaskBlock` table. All the data in the column will be lost.
  - You are about to drop the column `startTimestamp` on the `TimeblockTaskBlock` table. All the data in the column will be lost.
  - Added the required column `timeblockId` to the `TimeblockColumn` table without a default value. This is not possible if the table is not empty.
  - Made the column `timeblockId` on table `TimeblockTask` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `endMinute` to the `TimeblockTaskBlock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startMinute` to the `TimeblockTaskBlock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeblockColumnId` to the `TimeblockTaskBlock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TimeblockTask" DROP CONSTRAINT "TimeblockTask_timeblockId_fkey";

-- AlterTable
ALTER TABLE "TimeblockColumn" ADD COLUMN     "timeblockId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TimeblockTask" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "timeblockId" SET NOT NULL;

-- AlterTable
ALTER TABLE "TimeblockTaskBlock" DROP COLUMN "endTimestamp",
DROP COLUMN "startTimestamp",
ADD COLUMN     "endMinute" INTEGER NOT NULL,
ADD COLUMN     "startMinute" INTEGER NOT NULL,
ADD COLUMN     "timeblockColumnId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TimeblockColumn" ADD CONSTRAINT "TimeblockColumn_timeblockId_fkey" FOREIGN KEY ("timeblockId") REFERENCES "Timeblock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeblockTask" ADD CONSTRAINT "TimeblockTask_timeblockId_fkey" FOREIGN KEY ("timeblockId") REFERENCES "Timeblock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeblockTaskBlock" ADD CONSTRAINT "TimeblockTaskBlock_timeblockColumnId_fkey" FOREIGN KEY ("timeblockColumnId") REFERENCES "TimeblockColumn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
