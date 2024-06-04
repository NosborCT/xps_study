import prisma from "../_lib/prisma";

const AlunoList = async ()  => {
    const alunos = await prisma.aluno.findMany({})

    return ( 

        <>
            {alunos.map((aluno)=>(
                <option key={aluno.id} value={aluno.id}>
                    {aluno.name}
                </option>
            ))}
        
        </>

     );
}
 
export default AlunoList;