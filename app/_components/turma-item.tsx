import { Turma } from "@prisma/client";

interface TurmaItemProps{
    turma: Turma
}

const TurmaItem = ({turma}: TurmaItemProps) => {
    return ( 

        <span>{turma.name}</span>

     );
}
 
export default TurmaItem;