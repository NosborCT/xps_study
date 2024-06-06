/*
  Warnings:

  - You are about to drop the column `titulo` on the `Mensagem` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Mensagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mensagem" DROP COLUMN "titulo",
ADD COLUMN     "nome" TEXT NOT NULL;
