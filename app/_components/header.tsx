import {
  BarChart4,
  ClipboardListIcon,
  HomeIcon,
  MenuIcon,
  Send,
  UserPlus,
  UsersRound,
} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between pt-6 px-5">
      <Sheet>
        <SheetTrigger>
          <Button
            size="icon"
            variant="outline"
            className=" border-none bg-transparent"
          >
            <MenuIcon color="white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#FFFFFF]" side="left">
          <SheetHeader className="text-center text-lg font-semibold">
            Menu
          </SheetHeader>
          <div className="mt-2 flex flex-col gap-3">
            
            <div>
              <Link href={`/cadastros/tipo_usuario/`}>
                <Button
                  variant={"default"}
                  className="w-full justify-start gap-2 text-white"
                >
                  <UserPlus size={16} />
                  Cadastrar Aluno / Professor
                </Button>
              </Link>
            </div>
            <div>
              <Link href={`/cadastros/cadastro_atividade/`}>
                <Button
                  variant={"default"}
                  className="w-full justify-start gap-2 text-white"
                >
                  <ClipboardListIcon size={16} />
                  Cadastrar Atividade
                </Button>
              </Link>
            </div>
            <div>
              <Link href={`/cadastros/cadastro_mensagem/`}>
                <Button
                  variant={"default"}
                  className="w-full justify-start gap-2 text-white"
                >
                  <Send size={16} />
                  Cadastrar Mensagem
                </Button>
              </Link>
            </div>
            <div>
              <Link href={`/cadastros/cadastro_turma/`}>
                <Button
                  variant={"default"}
                  className="w-full justify-start gap-2 text-white"
                >
                  <UsersRound size={16} />
                  Cadastrar Turma
                </Button>
              </Link>
            </div>

            <Link href={`/atividades/`}>
              <div>
                <Button
                  variant={"default"}
                  className="w-full justify-start gap-2 text-white"
                >
                  <ClipboardListIcon size={16} />
                  Atividades
                </Button>
              </div>
            </Link>

            <div>
              <Button
                variant={"default"}
                className="w-full justify-start gap-2 text-white"
              >
                <BarChart4 size={16} />
                Ranking
              </Button>
            </div>

            <div>
              <Link href={`/home/`}>
                <Button
                  variant={"default"}
                  className="w-full justify-start gap-2 text-white"
                >
                  <HomeIcon size={16} />
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>

        <Image
          src="/logo.png"
          alt="XPS Logo"
          height={53}
          width={53}
          className="px-1"
        />
      </Sheet>
    </div>
  );
};

export default Header;
