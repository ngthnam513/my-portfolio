import { createAxios } from "@/lib/axios";
import { ChampionDataResponse } from "@/types/league-of-legends";

const lolAxiosInstance = createAxios(
  process.env.LEAGUAGE_OF_LEGENDS_API_URL ?? ""
);

const lolApiVersion = process.env.LEAGUAGE_OF_LEGENDS_API_VERSION ?? "15.15.1";

export const getChampionList = async (
  locale: string
): Promise<ChampionDataResponse> => {
  return await lolAxiosInstance.get(
    `/${lolApiVersion}/data/${locale}/champion.json`
  );
};

export const getChampionByName = async (
  locale: string,
  championName: string
): Promise<ChampionDataResponse> => {
  return await lolAxiosInstance.get(
    `/${lolApiVersion}/data/${locale}/champion/${championName}.json`
  );
};
