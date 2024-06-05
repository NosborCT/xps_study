import { Atividade } from "@prisma/client";

interface AtividadeItemProps{
    atividade: Atividade
}

const AtividadeItem = ({atividade}:AtividadeItemProps) => {
    return ( 


        <span>{atividade.nome}</span>


     );
}
 
export default AtividadeItem;