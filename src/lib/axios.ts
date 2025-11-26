import axios, { AxiosInstance } from 'axios';

/**
 * Create a customized Axios instance on demand
 * @param baseURL API base URL
 * @param token Optional Auth Token
 * @returns AxiosInstance
 */

interface CustomHeaders {
    [key: string]: string;
}

export function createAxios(baseURL: string, headers?: CustomHeaders): AxiosInstance {
    return axios.create({
        baseURL,
        headers,
        timeout: 10000,
    });
}
