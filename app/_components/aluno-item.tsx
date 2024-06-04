import { Aluno } from "@prisma/client";

interface AlunoItemProps{
    aluno : Aluno
}

const AlunoItem = ({aluno}:AlunoItemProps) => {
    return (  

        <span>{aluno.name}</span>

    );
}
 
export default AlunoItem;