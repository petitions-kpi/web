import Label from "@/app/components/label";
import AllPetitions from "../../components/AllPetitions"
import Header from "@/app/components/header";
import "../../styles/petitions.css"

export default function Petition() {
  return (
    <div className="container">
      <Header/>
      <Label title="Всі петиції"/>
      <AllPetitions/>
    </div>
  );
}