
import prisma from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Separator } from "@/app/_components/ui/separator";
import { Label } from "@/app/_components/ui/label";
import { Textarea } from "@/app/_components/ui/textarea";
import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import AlunoList from "@/app/_components/aluno-list";
import AtividadeList from "@/app/_components/atividade-list";

interface AtividadeConteudoPageProps {
  params: {
    id: string;
  };
}

const AtividadeConteudoPage = async ({
  params: { id },
}: AtividadeConteudoPageProps) => {
  const atividade = await prisma.atividade.findUnique({
    where: {
      id,
    },
  });

  if (!atividade) {
    return notFound();
  }

  async function createResposta(formData: FormData) {
    "use server";
    const resposta = formData.get("resposta")?.toString();
    const alunoId = formData.get("aluno")?.toString();
    if (!resposta || !alunoId ) {
      console.error("Resposta ou aluno inválido");
      return;
    }

    try {
      const newResposta = await prisma.atividade_resposta.create({
        data: {
          resposta: resposta,
          aluno: {
            connect: { id: alunoId },
          },
        },
      });
    } catch (error) {
      console.error("Erro ao criar a resposta:", error);
    }
  }

  return (
    <div>
      <Header />

      <form action={createResposta}>
        <Card className="mx-auto w-80 h-auto my-[150px]">
          <CardHeader>
            <CardTitle>{atividade.nome}</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="py-6 flex flex-col space-y-4">
            {atividade.descricao}
          </CardContent>
          <CardContent className="py-6 flex flex-col space-y-4">
            <div>
              <Label htmlFor="resposta">Resposta da atividade</Label>
              <Textarea
                id="resposta"
                name="resposta"
                placeholder="resposta"
                className="bg-white drop-shadow-md"
              />
            </div>

            <div>
              <select
                id="aluno"
                name="aluno"
                className="bg-primary drop-shadow-md w-full h-[33px] rounded-lg text-white cursor-pointer"
              >
                <option value="" disabled selected className="text-center">
                  Aluno
                </option>
                <AlunoList />
              </select>
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="text-white max-w-28 text-center"
              >
                Salvar
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default AtividadeConteudoPage;
