import PetitionCard from "../components/PetitionCard"

const PetitionsBox = (props:any) => {
    return(
        <div className="rectangle-2">
            <PetitionCard sortOrder={props.sortOrder}/>
        </div>
    );
}
export default PetitionsBox;