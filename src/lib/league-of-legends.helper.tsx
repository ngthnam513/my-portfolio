import AssassinIcon from '@/components/icons/league-of-legends/assassin';
import BorderIcon from '@/components/icons/league-of-legends/border';
import DifficultyEasyIcon from '@/components/icons/league-of-legends/difficulty-easy';
import DifficultyHightIcon from '@/components/icons/league-of-legends/difficulty-high';
import DifficultyMediumIcon from '@/components/icons/league-of-legends/difficulty-medium';
import FighterIcon from '@/components/icons/league-of-legends/fighter';
import MageIcon from '@/components/icons/league-of-legends/mage';
import MarksmanIcon from '@/components/icons/league-of-legends/marksman';
import SupportIcon from '@/components/icons/league-of-legends/support';
import TankIcon from '@/components/icons/league-of-legends/tank';

const lolApiURL = process.env.NEXT_PUBLIC_LEAGUE_OF_LEGENDS_API_URL ?? '';
const lolApiVersion = process.env.NEXT_PUBLIC_LEAGUE_OF_LEGENDS_API_VERSION ?? '15.15.1';

export const getLeagueOfLegendsLocale = (myLocale: string) => {
    switch (myLocale) {
        case 'vi':
            return 'vi_VN';
        case 'en':
            return 'en_US';
        default:
            return 'en_US';
    }
};

export const getChampionSplashImageURL = (championId: string, skinId: number) => {
    return `${lolApiURL}/img/champion/splash/${championId}_${skinId}.jpg`;
};

export const getChampionLoadingScreenImageURL = (championId: string) => {
    return `${lolApiURL}/img/champion/loading/${championId}_0.jpg`;
};

export const getChampionSquareImageURL = (championId: string) => {
    return `${lolApiURL}/${lolApiVersion}/img/champion/${championId}_0.png`;
};

export const getChampionPassiveImageURL = (passiveId: string) => {
    return `${lolApiURL}/${lolApiVersion}/img/passive/${passiveId}`;
};

export const getChampionAbilityImageURL = (abilityId: string) => {
    return `${lolApiURL}/${lolApiVersion}/img/spell/${abilityId}.png`;
};

export const getChampionAbilityVideoURL = (championKey: string, abilityKey: 'P' | 'Q' | 'W' | 'E' | 'R') => {
    return `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${championKey}/ability_0${championKey}_${abilityKey}1.webm`;
};

export const getChampionAbilityKey = (index: number) => {
    switch (index) {
        case 0:
            return 'Q';
        case 1:
            return 'W';
        case 2:
            return 'E';
        case 3:
            return 'R';
        default:
            return 'P';
    }
};

export const getChampionRoleIcon = (role: string, props?: { [key: string]: string }) => {
    switch (role) {
        case 'Assassin':
            return <AssassinIcon {...props} />;
        case 'Fighter':
            return <FighterIcon {...props} />;
        case 'Mage':
            return <MageIcon {...props} />;
        case 'Marksman':
            return <MarksmanIcon {...props} />;
        case 'Support':
            return <SupportIcon {...props} />;
        case 'Tank':
            return <TankIcon {...props} />;
        default:
            return <BorderIcon {...props} />;
    }
};

export const getChampionDifficultyIcon = (difficulty: number, props?: { [key: string]: string }) => {
    if (difficulty < 5) return <DifficultyEasyIcon {...props} />;
    else if (difficulty < 7) return <DifficultyMediumIcon {...props} />;
    return <DifficultyHightIcon {...props} />;
};

export const getChampionDifficultyTranslationKey = (difficulty: number) => {
    if (difficulty < 5) return 'EASY';
    else if (difficulty < 7) return 'MEDIUM';
    return 'HARD';
};
