export interface ChampionDataResponse {
    type: string;
    format: string;
    version: string;
    data: Record<string, ChampionDetails>;
}

export interface ChampionDetails {
    id: string;
    key: string;
    name: string;
    title: string;
    image: ChampionImage;
    skins: ChampionSkin[];
    lore: string;
    blurb: string;
    allytips: string[];
    enemytips: string[];
    tags: string[];
    partype: string;
    info: ChampionInfo;
    stats: ChampionStats;
    spells: ChampionSpell[];
    passive: ChampionPassive;
    recommended: unknown[];
}

export interface ChampionImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface ChampionSkin {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
}

export interface ChampionInfo {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}

export interface ChampionStats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

export interface ChampionSpell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: LevelTip;
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: Record<string, unknown>;
    effect: Array<number[] | null>;
    effectBurn: Array<string | null>;
    vars: unknown[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: ChampionImage;
    resource: string;
}

export interface LevelTip {
    label: string[];
    effect: string[];
}

export interface ChampionPassive {
    name: string;
    description: string;
    image: ChampionImage;
}
