import { createAxios } from '@/lib/axios';
import { ChampionDataResponse } from '@/types/league-of-legends';

const lolAxiosInstance = createAxios(process.env.NEXT_PUBLIC_LEAGUE_OF_LEGENDS_API_URL ?? '');

const lolApiVersion = process.env.NEXT_PUBLIC_LEAGUE_OF_LEGENDS_API_VERSION ?? '15.15.1';

export const getChampionList = async (locale: string): Promise<ChampionDataResponse> => {
    const response = await lolAxiosInstance.get(`/${lolApiVersion}/data/${locale}/champion.json`);
    return response?.data;
};

export const getChampionByName = async (locale: string, championName: string): Promise<ChampionDataResponse> => {
    const response = await lolAxiosInstance.get(`/${lolApiVersion}/data/${locale}/champion/${championName}.json`);
    return response?.data;
};
