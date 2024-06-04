
import  {Professor} from  "@prisma/client"

interface ProfessorItemProps{
    professor: Professor
}

const ProfessorItem = ({professor}: ProfessorItemProps) => {
    return ( 

        <span>{professor.name}</span>

     );
}
 
export default ProfessorItem;