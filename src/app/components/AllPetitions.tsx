'use client'
import PetitionService from "../lib/api/petitions/PetitionsAPI"
import Petition from "../lib/api/petitions/types/GetPetitionsBody"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import "../styles/petitions.css"

async function getPetitions(prop: string): Promise<Petition[]> {
  const petitions = await PetitionService.getAllPetitions();
  console.log(petitions);
  return petitions;
}


const AllPetitions = (props: any) => {
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
    <div>
    {loading && <p>Loading...</p>}
    {!loading && (
      <ul className="petitionList">
        {petitions.map((petition) => (
            <Link href={`/pages/petition-view?id=${petition.id}`} passHref>
          <li key={petition.id} className="Card">
              <h3 className="title">{petition.title}</h3>
            <div className="line"></div>
            <p className="author">Автор: {petition.author.firstName} {petition.author.lastName} {petition.author.middleName}</p>
            <div className="petitionDetails">
              <p className="petitionDate">Дата: {new Date(petition.createdAt).toLocaleDateString()}</p>
              <span className="signaturesCount">{petition.signatures} підписів</span>
            </div>
          </li>
            </Link>
        ))}
      </ul>
    )}
  </div>
  );
};

export default AllPetitions;
