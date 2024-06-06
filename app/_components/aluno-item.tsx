import { Aluno } from "@prisma/client";

interface AlunoItemProps{
    aluno : Aluno
}

const AlunoItem = ({aluno}:AlunoItemProps) => {
    return (  

        
        <div>
            {aluno.name}
        </div>

    );
}
 
export default AlunoItem;