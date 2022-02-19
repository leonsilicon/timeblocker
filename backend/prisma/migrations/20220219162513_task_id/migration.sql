/*
  Warnings:

  - Added the required column `taskId` to the `TimeblockTaskBlock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TimeblockTaskBlock" ADD COLUMN     "taskId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TimeblockTaskBlock" ADD CONSTRAINT "TimeblockTaskBlock_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "TimeblockTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;
