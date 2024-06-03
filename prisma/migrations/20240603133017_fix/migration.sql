/*
  Warnings:

  - You are about to drop the column `respostaID` on the `Atividade` table. All the data in the column will be lost.
  - Added the required column `conteudo_mensagem` to the `Mensagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Atividade" DROP COLUMN "respostaID";

-- AlterTable
ALTER TABLE "Mensagem" ADD COLUMN     "conteudo_mensagem" TEXT NOT NULL;
