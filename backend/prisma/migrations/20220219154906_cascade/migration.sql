-- DropForeignKey
ALTER TABLE "AccountCsrfToken" DROP CONSTRAINT "AccountCsrfToken_accountId_fkey";

-- DropForeignKey
ALTER TABLE "AccountSessionToken" DROP CONSTRAINT "AccountSessionToken_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Timeblock" DROP CONSTRAINT "Timeblock_ownerAccountId_fkey";

-- DropForeignKey
ALTER TABLE "TimeblockColumn" DROP CONSTRAINT "TimeblockColumn_timeblockId_fkey";

-- DropForeignKey
ALTER TABLE "TimeblockTask" DROP CONSTRAINT "TimeblockTask_timeblockId_fkey";

-- DropForeignKey
ALTER TABLE "TimeblockTaskBlock" DROP CONSTRAINT "TimeblockTaskBlock_timeblockColumnId_fkey";

-- AddForeignKey
ALTER TABLE "AccountSessionToken" ADD CONSTRAINT "AccountSessionToken_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountCsrfToken" ADD CONSTRAINT "AccountCsrfToken_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timeblock" ADD CONSTRAINT "Timeblock_ownerAccountId_fkey" FOREIGN KEY ("ownerAccountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeblockColumn" ADD CONSTRAINT "TimeblockColumn_timeblockId_fkey" FOREIGN KEY ("timeblockId") REFERENCES "Timeblock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeblockTask" ADD CONSTRAINT "TimeblockTask_timeblockId_fkey" FOREIGN KEY ("timeblockId") REFERENCES "Timeblock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeblockTaskBlock" ADD CONSTRAINT "TimeblockTaskBlock_timeblockColumnId_fkey" FOREIGN KEY ("timeblockColumnId") REFERENCES "TimeblockColumn"("id") ON DELETE CASCADE ON UPDATE CASCADE;
