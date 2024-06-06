/*
  Warnings:

  - You are about to drop the column `atividadeId` on the `Atividade_resposta` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Atividade_resposta" DROP CONSTRAINT "Atividade_resposta_atividadeId_fkey";

-- AlterTable
ALTER TABLE "Atividade_resposta" DROP COLUMN "atividadeId";
