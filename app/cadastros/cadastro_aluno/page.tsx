import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Separator } from "@/app/_components/ui/separator";


const CadastroAluno = () => {
    return ( 

        <div>
      <Header/>

      <Card className=" mx-auto w-80 h-auto my-[230px]">

        <CardHeader className="flex items-center">
          <CardTitle>Cadastro de Aluno</CardTitle>         
        </CardHeader>

        <Separator/>

        <CardContent className="py-6 flex flex-col space-y-6  ">
        <Input type="text" placeholder="Nome Completo" className="bg-white drop-shadow-md"/>  
        <Input type="email" placeholder="Email" className="bg-white drop-shadow-md"/>
        <Input type="password" placeholder="Senha" className="bg-white drop-shadow-md"/>
        <Input type= "text"placeholder="Turma" className="bg-white drop-shadow-md"/>
        <Button variant="default" className="max-w-28 text-center ">Salvar</Button>
        </CardContent>
        
      </Card>
      
      


    </div>


     );
}
 
export default CadastroAluno;