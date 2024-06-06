import prisma from "../_lib/prisma";
import AtividadeItem2 from "./atividade-item2";

const AtividadeList2 = async () => {
  const atividades = await prisma.atividade.findMany({});
  return (
    <>
      {atividades.map((atividade) => (
        <AtividadeItem2 key={atividade.id} atividade={atividade} />
      ))}
    </>
  );
};
export default AtividadeList2;
