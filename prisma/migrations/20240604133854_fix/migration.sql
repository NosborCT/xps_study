/*
  Warnings:

  - You are about to drop the column `senha` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `Aluno` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `Professor` table. All the data in the column will be lost.
  - Added the required column `password` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "senha",
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Aluno" DROP COLUMN "senha",
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "senha",
ADD COLUMN     "password" TEXT NOT NULL;
