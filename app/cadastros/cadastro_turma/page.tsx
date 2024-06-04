import AlunoList from "@/app/_components/aluno-list";
import Header from "@/app/_components/header";
import ProfessorList from "@/app/_components/professor-list";
import { Button } from "@/app/_components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Separator } from "@/app/_components/ui/separator";
import { Textarea } from "@/app/_components/ui/textarea";
import prisma from "@/app/_lib/prisma";

const CadastroTurma = () => {
  async function CreateTurma(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString();
    const descricao = formData.get("descricao")?.toString();
    const ano = formData.get("ano")?.toString();
    const professorId = formData.get("professor")?.toString();
    const alunoId = formData.get("aluno")?.toString(); 
    
    if (!name || !descricao || !ano || !professorId || !alunoId) {
      console.error("Dados inválidos");
      return;
    }

    try {
      const newTurma = await prisma.turma.create({
        data: {
          name: name,
          descricao: descricao,
          ano: ano,
          professor: {
            connect: { id: professorId },
          },
          aluno: {
            connect: { id: alunoId },
          }
        }
      });
      console.log("Turma cadastrada com sucesso:", newTurma);
    } catch (error) {
      console.error("Erro ao cadastrar turma:", error);
    }
  }

  return (
    <div>
      <Header />
      <form action={CreateTurma}>
        <Card className="mx-auto w-80 h-auto my-[230px]">
          <CardHeader className="flex items-center">
            <CardTitle>Cadastro de Turma</CardTitle>
          </CardHeader>

          <Separator />

          <CardContent className="py-6 flex flex-col space-y-4">
            <div>
              <Label htmlFor="name">Turma</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Nome da turma"
                className="bg-white drop-shadow-md"
              />
            </div>
            <div>
              <Label htmlFor="descricao">Descrição da turma</Label>
              <Textarea
                id="descricao"
                name="descricao"
                placeholder="Descrição da turma"
                className="bg-white drop-shadow-md"
              />
            </div>
            <div>
              <Label htmlFor="ano">Ano</Label>
              <Input
                id="ano"
                name="ano"
                type="text"
                placeholder="Ano"
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
                <AlunoList />
              </select>
            </div>
            <Button type="submit" className="max-w-28 text-center">
              Salvar
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default CadastroTurma;
