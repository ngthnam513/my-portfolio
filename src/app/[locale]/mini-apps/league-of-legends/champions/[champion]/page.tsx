import { getChampionByName } from '@/apis/league-of-legends';
import {
    getChampionDifficultyIcon,
    getChampionDifficultyTranslationKey,
    getChampionRoleIcon,
    getChampionSplashImageURL,
    getLeagueOfLegendsLocale,
} from '@/lib/league-of-legends.helper';
import { Metadata } from 'next';
import {} from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Fragment } from 'react';
import AbilitiesSection from './abilities';
import SkinsSection from './skins';

interface ChampionPageProps {
    params: Promise<{ champion: string; locale: string }>;
}

export async function generateMetadata({ params }: ChampionPageProps): Promise<Metadata> {
    const { champion, locale } = await params;
    return {
        icons: {
            icon: `/league-of-legends.svg`,
        },
        title: `${champion}`,
        description: locale === 'en' ? `League Of Legends Champion: ${champion}` : `Vị tướng Liên Minh Huyền Thoại: ${champion}`,
    };
}

export default async function ChampionPage({ params }: ChampionPageProps) {
    const { champion, locale } = await params;
    const response = await getChampionByName(getLeagueOfLegendsLocale(locale), champion);
    const championData = response?.data?.[champion];

    const t = await getTranslations('LEAGUE_OF_LEGENDS_CHAMPIONS_PAGE');

    return (
        <>
            <section className="relative w-full bg-(--color-secondary-background)">
                <Image
                    src={getChampionSplashImageURL(championData?.id, 0)}
                    alt={championData?.id}
                    width={1215}
                    height={717}
                    unoptimized
                    priority
                    className="h-auto w-full object-cover"
                />
                <div className="flex flex-col justify-center px-4 py-4 md:absolute md:inset-0 md:bg-linear-to-r md:from-black/70 md:to-white/10 md:px-12 lg:px-28">
                    <h2 className="text-base font-bold text-(--color-lol-foreground) uppercase italic md:text-xl lg:mt-16 lg:text-3xl">
                        {championData?.title}
                    </h2>
                    <h1 className="my-4 text-3xl font-bold uppercase italic md:text-5xl md:text-white lg:my-6 lg:text-7xl">{championData?.name}</h1>
                    <p className="w-full text-justify md:text-white lg:w-1/2">{championData?.lore}</p>
                    <div className="mt-4 flex items-center justify-center gap-8 md:justify-start">
                        <div className="h-32 w-32 border border-(--color-lol-foreground) p-4 text-center">
                            <div className="flex items-center justify-center gap-4">
                                {championData?.tags.map(tag => (
                                    <Fragment key={tag}>{getChampionRoleIcon(tag, { className: 'w-8 h-8' })}</Fragment>
                                ))}
                            </div>
                            <h4 className="mt-6 text-xs uppercase md:text-white">{t('ROLE')}</h4>
                            <p className="text-xs text-(--color-lol-foreground) uppercase">{championData?.tags.join(' / ')}</p>
                        </div>
                        <div className="h-32 w-32 border border-(--color-lol-foreground) p-4 text-center">
                            <div className="flex items-center justify-center text-(--color-lol-foreground)">
                                {getChampionDifficultyIcon(championData?.info?.difficulty)}
                            </div>
                            <h4 className="mt-6 text-xs uppercase md:text-white">{t('DIFFICULTY')}</h4>
                            <p className="text-xs text-(--color-lol-foreground) uppercase">
                                {t(getChampionDifficultyTranslationKey(championData?.info?.difficulty))}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 flex w-full items-center justify-start space-x-2 border-t border-t-(--color-lol-foreground) pt-1 md:space-x-6 lg:mt-auto lg:w-1/2">
                        <p className="text-secondary-foreground text-xs uppercase">{t('CHAMPION_MASTERY')}</p>
                        <a
                            href={`https://op.gg/lol/champions/${championData?.id}/build`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs hover:underline lg:text-white"
                        >
                            OP.GG
                        </a>
                        <a
                            href={`https://u.gg/lol/champions/${championData?.id}/build`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs hover:underline lg:text-white"
                        >
                            U.GG
                        </a>

                        <a
                            href={`https://probuildstats.com/champion/${championData?.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs hover:underline lg:text-white"
                        >
                            PROBUILD STATS
                        </a>
                    </div>
                </div>
            </section>
            <AbilitiesSection championData={championData} />
            <SkinsSection championData={championData} />
        </>
    );
}
