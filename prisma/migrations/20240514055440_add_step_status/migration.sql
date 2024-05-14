/*
  Warnings:

  - Added the required column `status` to the `steps` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StepStatus" AS ENUM ('APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "steps" ADD COLUMN     "status" "StepStatus" NOT NULL;
