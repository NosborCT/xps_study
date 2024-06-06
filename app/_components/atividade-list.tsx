import prisma from "../_lib/prisma";
import AtividadeItem from "./atividade-item";

const AtividadeList = async () => {
  const atividades = await prisma.atividade.findMany({ take: 6 });
  return (
    <>
      {atividades.map((atividade) => (
        <option key={atividade.id} value={atividade.id}>
          {atividade.nome}
        </option>
      ))}
    </>
  );
};
export default AtividadeList;
