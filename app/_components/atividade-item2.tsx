"use client";
import { Atividade } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

interface AtividadeItemProps2 {
  atividade: Atividade;
}

const AtividadeItem2 = ({ atividade }: AtividadeItemProps2) => {
  return (
    <Link href={`/atividades/${atividade.id}`} >
      <div>
        <Card className="w-80 h-full cursor-pointer bg-primary text-white ">
          <CardHeader>
            <CardTitle className="text-semibold text-base">
              {atividade.nome}
            </CardTitle>
            <CardDescription className="text-sm mt-2 text-white   ">
              <p className=" text-base mb-3">{atividade.descricao}</p>
              <p className=" text-sm">Qtd. Pontos: {atividade.pontos}</p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </Link>
  );
};

export default AtividadeItem2;
