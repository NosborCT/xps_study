import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import prisma from "@/app/_lib/prisma";
import { Separator } from "@/app/_components/ui/separator";



const CadastroAtividade = () => {
  async function createTask(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString();
    const descricao = formData.get("descricao")?.toString();
    const prioridade = formData.get("prioridade")?.toString();

    console.log({ name, descricao, prioridade });
  }

  return (
    <div className="flex  items-center">
      <form action={createTask}>
        <Card className=" mx-auto w-80 h-auto my-[230px]">
          <CardHeader className="flex items-center">
            <CardTitle>Cadastro de Aluno</CardTitle>
          </CardHeader>

          <Separator />

          <CardContent className="py-6 flex flex-col space-y-4  ">
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

            <div>
              <Label htmlFor="turma">Turma</Label>
              <Input
                id="turma"
                name="turma"
                type="text"
                placeholder="turma"
                className="bg-white drop-shadow-md"
              />
            </div>
            <Button type="submit" className="max-w-28 text-center ">
              Salvar
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default CadastroAtividade;
