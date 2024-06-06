import {
  BadgePlusIcon,
  BarChart4,
  ClipboardListIcon,
  HomeIcon,
  Icon,
  MessageSquareIcon,
  Send,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <Card className=" w-full h-26 bg-[#2C204D] border-none  rounded-t-lg">
      <div className="flex justify-between">
        <div className="flex space-x-11 ml-10 mt-5">
          <Link href={`/home/`}>
            <HomeIcon color="white" />
          </Link>
          <Link href={`/mensagens/`}>
            <MessageSquareIcon color="white" />
          </Link>
        </div>
        <Button className="w-[68px] h-[68px] rounded-full">
          <BadgePlusIcon size="68px" />
        </Button>
        <div className="flex space-x-11  mr-10 mt-5">
          <BarChart4 color="white" />
          <Link href={`/atividades/`}>
            <ClipboardListIcon color="white" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Footer;
