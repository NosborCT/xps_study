import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Separator } from "@/app/_components/ui/separator";
import { Textarea } from "@/app/_components/ui/textarea";


const CadastroMensagem = () => {
  return (
    <div>
      <Header />
      <form >
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

export default CadastroMensagem;
