import prisma from "../_lib/prisma";



const TurmaList = async() => {
    const turmas = await prisma.turma.findMany({})
    return ( 

        <>
            {turmas.map((turma)=>(
                <option key={turma.id} value={turma.id}>
                    {turma.name}
                </option>
            ))}
        
        </>

     );
}
 
export default TurmaList;