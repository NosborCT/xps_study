import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Separator } from "@/app/_components/ui/separator";
import prisma from "@/app/_lib/prisma";

const CadastroProfessor = () => {

  async function createProf(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();  
    
    // Validação dos campos
    if (!name || !email || !password) {
      console.error("Todos os campos são obrigatórios.");
      return;
    }

    console.log({name, email, password});

    try {
      const newProfessor = await prisma.professor.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });
      console.log("Professor cadastrado com sucesso:", newProfessor);
    } catch (error) {
      console.error("Erro ao cadastrar professor:", error);
    }
  }

  return (
    <div>
      <Header />
      <form action={createProf}>
        <Card className="mx-auto w-80 h-auto my-[230px]">
          <CardHeader className="flex items-center">
            <CardTitle>Cadastro de Professor</CardTitle>
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
                placeholder="Email"
                className="bg-white drop-shadow-md"
              />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
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

export default CadastroProfessor;
