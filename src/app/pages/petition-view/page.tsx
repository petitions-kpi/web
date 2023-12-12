import PetitionView from "./PetitonView";
import Header from "@/app/components/header";
import "../../styles/petitionView.css"
import Label from "@/app/components/label";

export default function Petition() {
  return (
    <div className="container">
      <Header />
      <Label title='Петиція №'/>
      <PetitionView />
    </div>
  );
}