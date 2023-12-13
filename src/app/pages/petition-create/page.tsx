import PetitionCreate from "./PetitionCreate";
import Header from "@/app/components/header";
import Label from "@/app/components/label";
import "../../styles/petitiomCreate.css"

export default function CreatePetition() {
  return (
    <div className="container">
      <Header />
      <Label title='Нова петиція'/>
      <PetitionCreate />
    </div>
  );
}