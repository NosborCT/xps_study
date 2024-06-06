import Footer from "../_components/footer";
import Header from "../_components/header";
import Mensagemlist from "../_components/mensagem-list";

const MensagemPage = () => {
  return (
    <div>
      <Header />

      <div className=" flex flex-col items-center  space-y-6 mt-12">
        <Mensagemlist />
      </div>
      <div className = "  pt-[450px]">
      <Footer/>

      </div>
    </div>
  );
};

export default MensagemPage;
