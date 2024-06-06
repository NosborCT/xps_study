import prisma from "../_lib/prisma";
import AtividadeItem from "./atividade-item";

const AtividadeList = async () => {
  const atividades = await prisma.atividade.findMany({take:6});
  return (
    <>
      {atividades.map((atividade) => (
        <AtividadeItem key={atividade.id} atividade={atividade} />
      ))}
    </>
  );
};
export default AtividadeList;
