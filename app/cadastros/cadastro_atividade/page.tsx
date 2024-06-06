import { Button } from "@/app/_components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Separator } from "@/app/_components/ui/separator";
import prisma from "@/app/_lib/prisma";
import { Textarea } from "@/app/_components/ui/textarea";
import Header from "@/app/_components/header";
import ProfessorList from "@/app/_components/professor-list";
import AlunoList from "@/app/_components/aluno-list";
import TurmaList from "@/app/_components/turma-list";
import { redirect } from "next/navigation";

const CadastroAtividade = () => {
  async function createTask(formData: FormData) {
    "use server";
    const nome = formData.get("nome")?.toString();
    const descricao = formData.get("descricao")?.toString();
    const pontosStr = formData.get("pontos")?.toString();
    const professorId = formData.get("professor")?.toString();
    const alunoId = formData.get("aluno")?.toString();
    const TurmaId = formData.get("turma")?.toString();


    // Convert pontos to number
    const pontos = pontosStr ? parseInt(pontosStr, 10) : 0;

    if (!nome || !descricao || !pontos || !professorId || !alunoId) {
      console.error("Dados inválidos para criação de atividade.");
      return;
    }

    try {
      const newAtividade = await prisma.atividade.create({
        data: {
          nome: nome,
          descricao: descricao,
          pontos: pontos,
          professor: {
            connect: { id: professorId },
          },
          aluno: {
            connect: {id : alunoId},
          },
          turma: {
            connect: {id : TurmaId},
          }
        },
      });
      console.log('Atividade cadastrada com sucesso:', newAtividade);
      redirect('/')
    } catch (error) {
      console.error('Erro ao cadastrar atividade:', error);
    
    }
  }

  return (
    <div>
      <Header />
      <form action={createTask}>
        <Card className="mx-auto w-80 h-auto my-[150px]">
          <CardHeader className="flex items-center">
            <CardTitle>Cadastro de Atividade</CardTitle>
          </CardHeader>

          <Separator />

          <CardContent className="py-6 flex flex-col space-y-4">
            <div>
              <Label htmlFor="nome">Titulo Atividade</Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                placeholder="Titulo Atividade"
                className="bg-white drop-shadow-md"
              />
            </div>

            
            <div>
              <Label htmlFor="descricao">Descrição da atividade</Label>
              <Textarea
                id="descricao"
                name="descricao"
                placeholder="descrição"
                className="bg-white drop-shadow-md"
              />
            </div>
            <div>
              <Label htmlFor="professor">Selecione o professor</Label>
              <select id="professor" name="professor" className="bg-white drop-shadow-md">
                <ProfessorList />
              </select>
            </div>

            <div>
              <Label htmlFor="aluno">Selecione o aluno</Label>
              <select id="aluno" name="aluno" className="bg-white drop-shadow-md">
                <AlunoList/>
              </select>
            </div>

            <div>
              <Label htmlFor="turma">Selecione a Turma</Label>
              <select id="turma" name="turma" className="bg-white drop-shadow-md">
                <TurmaList/>
              </select>
            </div>

            <div>
              <Label htmlFor="pontos">Qtd.Pontos</Label>
              <select id="pontos" name="pontos" className="bg-white drop-shadow-md">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
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

export default CadastroAtividade;
