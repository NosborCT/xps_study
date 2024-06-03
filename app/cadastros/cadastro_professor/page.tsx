import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Separator } from "@/app/_components/ui/separator";


const CadastroProfessor = () => {
  return (
    <div>
      <Header />

      <Card className=" mx-auto w-80 h-auto my-60">
        <CardHeader className="flex items-center">
          <CardTitle>Cadastro de Professor</CardTitle>
        </CardHeader>

        <Separator />

        <CardContent className="py-6 flex flex-col space-y-6  ">
          <Input
            type="text"
            placeholder="Nome Completo"
            className="bg-white drop-shadow-md"
          />
          
          <Input
            type="email"
            placeholder="Email"
            className="bg-white drop-shadow-md"
          />
          <Input
            type="password"
            placeholder="Senha"
            className="bg-white drop-shadow-md"
          />
          <Button variant="default" className="max-w-28 text-center ">
            Salvar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CadastroProfessor;
