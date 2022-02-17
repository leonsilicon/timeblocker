-- CreateEnum
CREATE TYPE "AuthenticationMethod" AS ENUM ('header', 'cookie');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountSessionToken" (
    "token" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "csrfToken" TEXT,
    "authenticationMethod" "AuthenticationMethod" NOT NULL,

    CONSTRAINT "AccountSessionToken_pkey" PRIMARY KEY ("token")
);

-- CreateTable
CREATE TABLE "AccountCsrfToken" (
    "token" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "AccountCsrfToken_pkey" PRIMARY KEY ("token")
);

-- CreateTable
CREATE TABLE "AccountRegistrationRequest" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "confirmationCode" TEXT NOT NULL,

    CONSTRAINT "AccountRegistrationRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timeblock" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerAccountId" TEXT NOT NULL,

    CONSTRAINT "Timeblock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeblockColumn" (
    "id" TEXT NOT NULL,

    CONSTRAINT "TimeblockColumn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeblockTask" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "timeblockId" TEXT,

    CONSTRAINT "TimeblockTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeblockTaskBlock" (
    "id" TEXT NOT NULL,
    "startTimestamp" INTEGER NOT NULL,
    "endTimestamp" INTEGER NOT NULL,

    CONSTRAINT "TimeblockTaskBlock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AccountRegistrationRequest_email_key" ON "AccountRegistrationRequest"("email");

-- AddForeignKey
ALTER TABLE "AccountSessionToken" ADD CONSTRAINT "AccountSessionToken_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountCsrfToken" ADD CONSTRAINT "AccountCsrfToken_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timeblock" ADD CONSTRAINT "Timeblock_ownerAccountId_fkey" FOREIGN KEY ("ownerAccountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeblockTask" ADD CONSTRAINT "TimeblockTask_timeblockId_fkey" FOREIGN KEY ("timeblockId") REFERENCES "Timeblock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
