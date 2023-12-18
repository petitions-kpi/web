import AllPetitions from "../../components/AllPetitions"
import Header from "@/app/components/header";

export default function Petition() {
  return (
    <div className="container">
      <Header/>
      <div className="all-petition">Всі петиції</div>
      <AllPetitions/>
    </div>
  );
}