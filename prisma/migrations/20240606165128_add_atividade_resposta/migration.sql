-- CreateTable
CREATE TABLE "Atividade_resposta" (
    "id" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atividadeId" TEXT NOT NULL,

    CONSTRAINT "Atividade_resposta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Atividade_resposta" ADD CONSTRAINT "Atividade_resposta_atividadeId_fkey" FOREIGN KEY ("atividadeId") REFERENCES "Atividade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
