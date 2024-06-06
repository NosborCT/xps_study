import AtividadeList2 from "../_components/atividade-list2";
import Header from "../_components/header";

const AtividadesPage = async() => {
   
  return (
    <div className="min-h-screen ">
      <Header />
        <div className="flex flex-col justify-center items-center space-y-6">
          <AtividadeList2   />
        </div>
      </div>
  );
};

export default AtividadesPage;
