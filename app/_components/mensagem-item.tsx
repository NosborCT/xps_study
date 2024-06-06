import { Mensagem } from "@prisma/client";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Header from "./header";


interface MesagemItemProps{
    mensagem: Mensagem
}

const MensagemItem = ({mensagem}:MesagemItemProps) => {
    return ( 

    <div>
       

        <div>
        <Card className="w-80 h-full cursor-pointer bg-primary text-white ">
          <CardHeader>
            <CardTitle className="text-semibold text-base">
              Mensagem
            </CardTitle>
            <CardDescription className="text-sm mt-2 text-white   ">
              <p className=" text-base mb-3">{mensagem.conteudo_mensagem}</p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
     );
}
 
export default MensagemItem;