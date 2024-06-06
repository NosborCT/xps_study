import prisma from "../_lib/prisma";
import MensagemItem from "./mensagem-item";

const Mensagemlist = async () => {
  const mensagens = await prisma.mensagem.findMany({});
  
  return (
    <>
      {mensagens.map((mensagem) => (
        <MensagemItem key={mensagem.id} mensagem={mensagem} />
      ))}
    </>
  );
};

export default Mensagemlist;
