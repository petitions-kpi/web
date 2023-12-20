import axios, {AxiosResponse} from 'axios';
import Tokens from "@/app/lib/api/auth/types/Tokens";
import {setToken} from "@/app/lib/api/auth/LocalStorageService";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const Login = async (email: string, password: string) => {
    const requestBody = {
        email: email,
        password: password,
    };

    return axios.post(`${apiUrl}/auth/login`, requestBody)
        .then((response: AxiosResponse<Tokens>) => {
            if (response.status === 201) {
                setToken('accessToken', response.data.accessToken);
                setToken('refreshToken', response.data.refreshToken);
                return response.data;
            }
        })
        .catch((error) => {
            return error;
        });
}

export const Register = async (email: string, password: string, firstName: string, lastName: string) => {
    const requestBody = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    }

    return axios.post(`${apiUrl}/auth/register`, requestBody)
        .then((response: AxiosResponse) => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch((error) => {
            return error;
        });
}

const parseTokenFromURL = (): string | null => {
    const url = window.location.href;
    const tokenIndex = url.lastIndexOf('/') + 1;
    return url.substring(tokenIndex);
};

export const handleVerification = async () => {
    const token = parseTokenFromURL();
    if (token) {
        return axios.post(`${apiUrl}/auth/verify/${token}`)
            .then((response: AxiosResponse<Tokens>) => {
                if (response.status === 201) {
                    setToken('accessToken', response.data.accessToken);
                    setToken('refreshToken', response.data.refreshToken);
                    window.location.href = '/pages';
                    return response.data;
                }
            })
            .catch((error) => {
                return error;
            });
    }
};



