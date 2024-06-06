/*
  Warnings:

  - You are about to drop the column `alunoID` on the `Mensagem` table. All the data in the column will be lost.
  - You are about to drop the column `professorID` on the `Mensagem` table. All the data in the column will be lost.
  - Added the required column `alunoId` to the `Mensagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professorId` to the `Mensagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Mensagem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mensagem" DROP CONSTRAINT "Mensagem_alunoID_fkey";

-- DropForeignKey
ALTER TABLE "Mensagem" DROP CONSTRAINT "Mensagem_professorID_fkey";

-- AlterTable
ALTER TABLE "Mensagem" DROP COLUMN "alunoID",
DROP COLUMN "professorID",
ADD COLUMN     "alunoId" TEXT NOT NULL,
ADD COLUMN     "professorId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
