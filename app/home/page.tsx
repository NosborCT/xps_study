import AtividadeList from "../_components/atividade-list";
import Footer from "../_components/footer";
import Header from "../_components/header";
import { Separator } from "../_components/ui/separator";

const Home = () => {
  return (
    <div className=" overflow-auto">
      <Header />
      <div className="flex justify-center py-6">
        <Separator className="w-[360px]"></Separator>
      </div>
      <h3 className="text-white flex items-center justify-center py-6">
        Atividades do dia
      </h3>

      <div className="flex-col space-y-6 flex items-center ">
        <div className="flex-col space-y-6">
          <AtividadeList/>
        
        </div>
        
      </div>
      <div className="  pt-48">
            <Footer />
        </div>
    </div>
  );
};

export default Home;
