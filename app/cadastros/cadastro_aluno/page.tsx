import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Separator } from "@/app/_components/ui/separator";
import prisma from "@/app/_lib/prisma";

const CadastroAluno = () => {
  async function createTask(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    console.log({ name, email, password });

    if (!name || !email || !password) {
      return;
    }

    try {
      // Verificar se o ID da turma existe
      {
        /* 
    
      const turma = await prisma.turma.findUnique({
        where: { id: name },
      });
      if (!turma) {
        console.error('Turma não encontrada');
        return;
      }
    
    
    */
      }

      const newTask = await prisma.aluno.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });
      console.log("Aluno cadastrado com sucesso:", newTask);
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
    }
  }

  return (
    <div>
      <Header />
      <form action={createTask}>
        <Card className="mx-auto w-80 h-auto my-[230px]">
          <CardHeader className="flex items-center">
            <CardTitle>Cadastro de Aluno</CardTitle>
          </CardHeader>

          <Separator />

          <CardContent className="py-6 flex flex-col space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Nome Completo"
                className="bg-white drop-shadow-md"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="email"
                className="bg-white drop-shadow-md"
              />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="senha"
                className="bg-white drop-shadow-md"
              />
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

export default CadastroAluno;
