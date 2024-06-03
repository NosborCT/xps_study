import Header from "../_components/header";
import { Card } from "../_components/ui/card";
import { Separator } from "../_components/ui/separator";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center py-6">
        <Separator className="w-[360px]"></Separator>
      </div>
      <h3 className="text-white flex items-center justify-center py-6">
        Atividades do dia
      </h3>
      <div className="flex-col space-y-6 flex items-center min-h-screen py-6">
        <Card className="w-80 h-20 cursor-pointer bg-primary"></Card>
        <Card className="w-80 h-20 cursor-pointer bg-primary"></Card>
        <Card className="w-80 h-20 cursor-pointer bg-primary"></Card>
        <Card className="w-80 h-20 cursor-pointer bg-primary"></Card>
        <Card className="w-80 h-20 cursor-pointer bg-primary"></Card>
        <Card className="w-80 h-20 cursor-pointer bg-primary"></Card>
      </div>
    </div>
  );
};

export default Home;
