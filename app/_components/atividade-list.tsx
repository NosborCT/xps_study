import prisma from "../_lib/prisma";

const AtividadeList = async () => {
    const atividades = await prisma.atividade.findMany({})
    return (  

        <>
            {atividades.map((atividade)=>(
                <AtividadeList key={atividade.id} />
            ))}

         
        </>


    );
}
 
export default AtividadeList;