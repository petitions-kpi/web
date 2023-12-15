import axios, { AxiosResponse } from 'axios';
import Petition from "./types/GetPetitionsBody";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getAllPetitions = async (): Promise<Petition[]> => {
    const response: AxiosResponse<{ petitions: Petition[] }> = await axios.get(`${apiUrl}/petitions`);
    return response.data.petitions;
};

export default getAllPetitions;