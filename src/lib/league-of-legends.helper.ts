const lolApiVersion = process.env.LEAGUAGE_OF_LEGENDS_API_VERSION ?? "15.15.1";

export const getChampionSplashImageURL = (championName: string) => {
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`;
};

export const getChampionLoadingScreenImageURL = (championName: string) => {
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`;
};

export const getChampionSquareImageURL = (championName: string) => {
  return `https://ddragon.leagueoflegends.com/cdn/${lolApiVersion}/img/champion/${championName}_0.png`;
};

export const getChampionPassiveImageURL = (championName: string) => {
  return `https://ddragon.leagueoflegends.com/cdn/${lolApiVersion}/img/passive/${championName}_0.png`;
};

export const getChampionAbilityImageURL = (abilityId: string) => {
  return `https://ddragon.leagueoflegends.com/cdn/${lolApiVersion}/img/spell/${abilityId}.png`;
};
