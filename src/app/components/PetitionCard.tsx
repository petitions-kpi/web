import getAllPetitions from "../lib/api/petitions/PetitionsAPI";
import "../styles/petitionsCard.css";
import Petition from "../lib/api/petitions/types/GetPetitionsBody";
import React, { useEffect, useState } from 'react';
import Link from "next/link";

async function getPetitions(prop: string): Promise<Petition[]> {
  const petitions = await getAllPetitions();

  if (prop === "active") {
    return getSignInPetitions(petitions);
  } 
  else {
    return getTopSignaturesPetitions(petitions);
  }
}

function getSignInPetitions(petitions: Petition[]): Petition[] {
  return petitions
    .filter(petition => petition.status === "SIGNING")
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4);
}

function getTopSignaturesPetitions(petitions: Petition[]): Petition[] {
  return petitions
    .sort((a, b) => b.signatures - a.signatures)
    .slice(0, 4);
}

const PetitionsCard = (props: any) => {
  const [petitions, setPetitions] = useState<Petition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPetitions = await getPetitions(props.sortOrder);
      setPetitions(fetchedPetitions);
      setLoading(false);
    };

    fetchData();
  }, [props.sortOrder]);

  return (
        <ul>
          {petitions.map((petition) => (
            <li key={petition.id} className="petitionCard">
              <Link href={`/pages/petition-view?id=${petition.id}`} passHref>
                <h3>{petition.title}</h3>
                <div className="line"></div>
                <p>Автор: {petition.author.firstName} {petition.author.lastName} {petition.author.middleName}</p>
                <div className="petitionDetails">
                  <p className="petitionDate">Дата: {new Date(petition.createdAt).toLocaleDateString()}</p>
                  <span className="signaturesCount">{petition.signatures} підписів</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
  );
};

export default PetitionsCard;
