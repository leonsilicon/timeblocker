/*
  Warnings:

  - You are about to drop the column `timeblockId` on the `TimeblockTask` table. All the data in the column will be lost.
  - Added the required column `ownerAccountId` to the `TimeblockTask` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TimeblockTask" DROP CONSTRAINT "TimeblockTask_timeblockId_fkey";

-- AlterTable
ALTER TABLE "TimeblockTask" DROP COLUMN "timeblockId",
ADD COLUMN     "ownerAccountId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TimeblockTask" ADD CONSTRAINT "TimeblockTask_ownerAccountId_fkey" FOREIGN KEY ("ownerAccountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
