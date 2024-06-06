/*
  Warnings:

  - You are about to drop the column `alunoId` on the `Mensagem` table. All the data in the column will be lost.
  - You are about to drop the column `professorId` on the `Mensagem` table. All the data in the column will be lost.
  - Added the required column `alunoID` to the `Mensagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professorID` to the `Mensagem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mensagem" DROP CONSTRAINT "Mensagem_alunoId_fkey";

-- DropForeignKey
ALTER TABLE "Mensagem" DROP CONSTRAINT "Mensagem_professorId_fkey";

-- AlterTable
ALTER TABLE "Mensagem" DROP COLUMN "alunoId",
DROP COLUMN "professorId",
ADD COLUMN     "alunoID" TEXT NOT NULL,
ADD COLUMN     "professorID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_alunoID_fkey" FOREIGN KEY ("alunoID") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_professorID_fkey" FOREIGN KEY ("professorID") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
