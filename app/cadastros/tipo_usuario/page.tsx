import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Separator } from "@/app/_components/ui/separator";
import Link from "next/link";

const TipoUsuario = () => {
    return ( 

        <div>
            <Header/>
            <Card className=" mx-auto w-[360px] h-60 my-60" >
                <CardHeader className="flex items-center " >
                    <CardTitle >Cadastro de usuario</CardTitle>
                </CardHeader>
                <Separator className="w-[180px] ml-[80px]"/>
                <p className="text-center font-light py-5">Selecione o tipo de usuário</p>
                <CardContent className="flex place-content-evenly gap-4 pt-3">
                    <Link href={`/cadastros/cadastro_aluno/`}><Button variant="default" className="text-white w-36 bg-secondary" >Aluno</Button> </Link>
                    <Link href={`/cadastros/cadastro_professor/`}> <Button variant="default" className="text-white w-36 bg-secondary">Professor</Button> </Link>
                </CardContent>
            </Card>

        </div>
     );
}
 
export default TipoUsuario;