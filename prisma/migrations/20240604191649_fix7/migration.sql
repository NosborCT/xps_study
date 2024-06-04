-- DropForeignKey
ALTER TABLE "Atividade" DROP CONSTRAINT "Atividade_alunoID_fkey";

-- DropForeignKey
ALTER TABLE "Atividade" DROP CONSTRAINT "Atividade_turmaID_fkey";

-- DropForeignKey
ALTER TABLE "Missao" DROP CONSTRAINT "Missao_alunoID_fkey";

-- AlterTable
ALTER TABLE "Atividade" ALTER COLUMN "alunoID" DROP NOT NULL,
ALTER COLUMN "turmaID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Missao" ALTER COLUMN "alunoID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Atividade" ADD CONSTRAINT "Atividade_alunoID_fkey" FOREIGN KEY ("alunoID") REFERENCES "Aluno"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atividade" ADD CONSTRAINT "Atividade_turmaID_fkey" FOREIGN KEY ("turmaID") REFERENCES "Turma"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Missao" ADD CONSTRAINT "Missao_alunoID_fkey" FOREIGN KEY ("alunoID") REFERENCES "Aluno"("id") ON DELETE SET NULL ON UPDATE CASCADE;
