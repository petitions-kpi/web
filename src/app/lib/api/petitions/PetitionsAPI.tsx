import axios, { AxiosResponse } from 'axios';
import Petition from "../petitions/types/GetPetitionsBody"

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

class PetitionService {
    public static async getAllPetitions(): Promise<Petition[]> {
        const response: AxiosResponse<{ petitions: Petition[] }> = await axios.get(`${apiUrl}/petitions`);
        return response.data.petitions;
    }

    public static async getPetitionsById(id: string | null): Promise<any> {
      const response: AxiosResponse = await axios.get(`${apiUrl}/petitions/${id}`);
      return response.data;
    }
}

export default PetitionService;