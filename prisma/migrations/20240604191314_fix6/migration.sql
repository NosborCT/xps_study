/*
  Warnings:

  - Changed the type of `pontos` on the `Atividade` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Atividade" DROP CONSTRAINT "Atividade_idCriador_fkey";

-- DropForeignKey
ALTER TABLE "Missao" DROP CONSTRAINT "Missao_professorID_fkey";

-- AlterTable
ALTER TABLE "Atividade" DROP COLUMN "pontos",
ADD COLUMN     "pontos" INTEGER NOT NULL,
ALTER COLUMN "idCriador" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Missao" ALTER COLUMN "professorID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Atividade" ADD CONSTRAINT "Atividade_idCriador_fkey" FOREIGN KEY ("idCriador") REFERENCES "Professor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Missao" ADD CONSTRAINT "Missao_professorID_fkey" FOREIGN KEY ("professorID") REFERENCES "Professor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
