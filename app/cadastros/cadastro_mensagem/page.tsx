import AlunoList from "@/app/_components/aluno-list";
import Header from "@/app/_components/header";
import ProfessorList from "@/app/_components/professor-list";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/_components/ui/card";
import { Label } from "@/app/_components/ui/label";
import { Separator } from "@/app/_components/ui/separator";
import { Textarea } from "@/app/_components/ui/textarea";
import prisma from "@/app/_lib/prisma";
import { Professor } from "@prisma/client";

const CadastroMensagem = () => {
  async function createMensagem(formData: FormData) {
    "use server";
    const conteudo_mensagem = formData.get("conteudo_mensagem")?.toString();
    const alunoId = formData.get("aluno")?.toString();
    const professorId = formData.get("professor")?.toString();

    if (!conteudo_mensagem || !alunoId || !professorId) {
      console.error("Dados inválidos para criação de mensagem.");
      return;
    }

    try {
      const newMensagem = await prisma.mensagem.create({
        data: {
          conteudo_mensagem: conteudo_mensagem,
          professor: {
            connect: { id: professorId },
          },
          aluno: {
            connect: { id: alunoId },
          },
        },
      });
      console.log("Mensagem cadastrada com sucesso:", newMensagem);
    } catch (error) {
      console.error("Erro ao cadastrar mensagem:", error);
    }
  }

  return (
    <div>
      <Header />
      <form action={createMensagem}>
        <Card className="mx-auto w-80 h-auto my-[230px]">
          <CardHeader className="flex items-center">
            <CardTitle>Cadastro de Mensagem</CardTitle>
          </CardHeader>

          <Separator />

          <CardContent className="py-6 flex flex-col space-y-4">
            <div>
              <Label htmlFor="conteudo_mensagem">Conteúdo da Mensagem</Label>
              <Textarea
                id="conteudo_mensagem"
                name="conteudo_mensagem"
                placeholder="Conteúdo da mensagem"
                className="bg-white drop-shadow-md"
              ></Textarea>
            </div>
            <Separator />

            <div className="text-sm flex justify-center">
              <p className="">Selecione o Aluno e o Professor</p>
            </div>

            <div className="flex justify-between w-full space-x-4">
              <div>
                <select
                  id="aluno"
                  name="aluno"
                  className="bg-primary drop-shadow-md w-full h-[33px] rounded-lg text-white cursor-pointer"
                >
                  <option value="" disabled selected className=" text-center">
                    Aluno
                  </option>
                  <AlunoList />
                </select>
              </div>
              <div>
                <select
                  id="professor"
                  name="professor"
                  className="bg-primary drop-shadow-md w-full h-[33px] rounded-lg text-white flex items-center cursor-pointer"
                >
                  <option value="" disabled selected className=" text-center">
                    Professor
                  </option>
                  <ProfessorList />
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit" className=" text-white max-w-28 text-center">
                Salvar
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default CadastroMensagem;
