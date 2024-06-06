-- AlterTable
ALTER TABLE "Atividade_resposta" ADD COLUMN     "alunoID" TEXT;

-- AddForeignKey
ALTER TABLE "Atividade_resposta" ADD CONSTRAINT "Atividade_resposta_alunoID_fkey" FOREIGN KEY ("alunoID") REFERENCES "Aluno"("id") ON DELETE SET NULL ON UPDATE CASCADE;
