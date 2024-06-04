-- AlterTable
ALTER TABLE "Atividade" ADD COLUMN     "alunoID" TEXT,
ADD COLUMN     "idCriador" TEXT,
ADD COLUMN     "turmaID" TEXT;

-- AddForeignKey
ALTER TABLE "Atividade" ADD CONSTRAINT "Atividade_idCriador_fkey" FOREIGN KEY ("idCriador") REFERENCES "Professor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atividade" ADD CONSTRAINT "Atividade_alunoID_fkey" FOREIGN KEY ("alunoID") REFERENCES "Aluno"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atividade" ADD CONSTRAINT "Atividade_turmaID_fkey" FOREIGN KEY ("turmaID") REFERENCES "Turma"("id") ON DELETE SET NULL ON UPDATE CASCADE;
