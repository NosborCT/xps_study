import Image from "next/image";
import { Button } from "./_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./_components/ui/card";
import { Input } from "./_components/ui/input";
import { Label } from "./_components/ui/label";
import { Separator } from "./_components/ui/separator";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Card className="mx-auto w-80 h-auto my-[280px]">
        <CardHeader className="flex items-center">
          <Image
            src="/XPS Study-02.png"
            alt="XPS Logo"
            height={72}
            width={72}
            className="px-1"
          />
        </CardHeader>

        <Separator />

        <CardContent className="py-6 flex flex-col space-y-4">
          <div>
            <Label htmlFor="Email">Email</Label>
            <Input
              id="Email"
              name="Email"
              type="text"
              placeholder="Email"
              className="bg-white drop-shadow-md"
            />
          </div>

          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="senha"
              className="bg-white drop-shadow-md"
            />
          </div>

          <Link href={`/home/`}>
            <div className="flex justify-end">
              <Button type="submit" className="max-w-28 text-center text-white">
                Salvar
              </Button>
            </div>
          </Link>
        </CardContent>
      </Card>
    </>
  );
}
