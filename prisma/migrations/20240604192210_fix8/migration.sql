/*
  Warnings:

  - You are about to drop the column `alunoID` on the `Atividade` table. All the data in the column will be lost.
  - You are about to drop the column `idCriador` on the `Atividade` table. All the data in the column will be lost.
  - You are about to drop the column `turmaID` on the `Atividade` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Atividade" DROP CONSTRAINT "Atividade_alunoID_fkey";

-- DropForeignKey
ALTER TABLE "Atividade" DROP CONSTRAINT "Atividade_idCriador_fkey";

-- DropForeignKey
ALTER TABLE "Atividade" DROP CONSTRAINT "Atividade_turmaID_fkey";

-- DropForeignKey
ALTER TABLE "Missao" DROP CONSTRAINT "Missao_recompensaItemID_fkey";

-- DropForeignKey
ALTER TABLE "Missao" DROP CONSTRAINT "Missao_turmaID_fkey";

-- AlterTable
ALTER TABLE "Atividade" DROP COLUMN "alunoID",
DROP COLUMN "idCriador",
DROP COLUMN "turmaID";

-- AlterTable
ALTER TABLE "Missao" ALTER COLUMN "recompensaItemID" DROP NOT NULL,
ALTER COLUMN "turmaID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Missao" ADD CONSTRAINT "Missao_recompensaItemID_fkey" FOREIGN KEY ("recompensaItemID") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Missao" ADD CONSTRAINT "Missao_turmaID_fkey" FOREIGN KEY ("turmaID") REFERENCES "Turma"("id") ON DELETE SET NULL ON UPDATE CASCADE;
