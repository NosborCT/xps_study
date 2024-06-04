-- DropForeignKey
ALTER TABLE "Turma" DROP CONSTRAINT "Turma_alunoID_fkey";

-- AlterTable
ALTER TABLE "Turma" ALTER COLUMN "alunoID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_alunoID_fkey" FOREIGN KEY ("alunoID") REFERENCES "Aluno"("id") ON DELETE SET NULL ON UPDATE CASCADE;
