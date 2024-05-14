import { BaseContainer } from "@/features/components/Base/BaseContainer";
import { MainPageBox } from "@/features/components/Box/MainPageBox";
import { MainBanner } from "@/features/partials/MainBanner";


const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <MainBanner />
      <div className="w-full flex flex-row justify-around gap-10 -mt-10 z-10">
        <MainPageBox 
          title="Ensino Qualificado"
          description="Todo ensino da Next é voltado para a profissionalização
          de novos dançarinos, desde o iniciante até o profissional."
        />
        <MainPageBox 
          title="Campeã Mundial"
          description="A Next possui mais de dez prêmios mundiais pela sua excelência no mundo da dança."
        />
      </div>
    </div>
  );
}

export default Home;