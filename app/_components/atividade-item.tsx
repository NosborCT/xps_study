import { Atividade } from "@prisma/client";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

interface AtividadeItemProps{
    atividade: Atividade
}

const AtividadeItem = ({atividade}:AtividadeItemProps) => {
    return ( 

        <div>
            
            <Card className="w-80 h-20 cursor-pointer bg-primary text-white flex justify-center items-center ">
                <CardTitle className=" text-base font-light	">
                    {atividade.nome}
                </CardTitle>
                

            </Card>
            
        </div>


     );
}
 
export default AtividadeItem;