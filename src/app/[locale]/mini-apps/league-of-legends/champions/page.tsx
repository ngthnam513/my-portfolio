import { getChampionList } from '@/apis/league-of-legends';
import routes from '@/contants/routes';
import { getChampionLoadingScreenImageURL, getLeagueOfLegendsLocale } from '@/lib/league-of-legends.helper';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

interface LeagueOfLegendsChampionsPageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LeagueOfLegendsChampionsPageProps): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: locale === 'en' ? 'League Of Legends Champions' : 'Các Vị Tướng Liên Minh Huyền Thoại',
        description: locale === 'en' ? 'Explore the champions of League Of Legends.' : 'Khám phá các vị tướng của Liên Minh Huyền Thoại.',
    };
}

export default async function LeagueOfLegendsChampionsPage({ params }: LeagueOfLegendsChampionsPageProps) {
    const t = await getTranslations('LEAGUE_OF_LEGENDS_CHAMPIONS_PAGE');
    const { locale } = await params;

    const response = await getChampionList(getLeagueOfLegendsLocale(locale));
    const champions = response?.data;

    return (
        <div className="min-h-screen px-4 md:px-12 lg:px-28">
            <section className="text-center">
                <h1 className="text-sm uppercase md:text-lg lg:text-2xl">{t('CHOOSE')}</h1>
                <h1 className="mt-2 mb-4 text-3xl font-bold uppercase italic md:text-5xl lg:text-7xl">{t('CHAMPION')}</h1>
                <p className="text-secondary-foreground text-xs md:text-base lg:text-lg">{t('DESCRIPTION')}</p>
            </section>
            <section className="flex flex-wrap items-center justify-between">
                {Object.values(champions).map(champion => (
                    <Link
                        key={champion.id}
                        className="group w-full p-2 sm:flex-1/2 md:flex-1/4"
                        href={`${routes.leagueOfLegendsChampions}/${champion.id}`}
                    >
                        <div className="relative aspect-3/4 w-full overflow-hidden">
                            <Image
                                src={getChampionLoadingScreenImageURL(champion.id)}
                                alt={champion.name}
                                className="scale-110 transition-transform duration-200 group-hover:scale-125"
                                fill
                                unoptimized
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                            />
                        </div>
                        <h2 className="group-hover:bg-lol-background/80 bg-lol-background p-4 text-base font-bold text-white uppercase italic md:text-xl lg:text-3xl">
                            {champion.name}
                        </h2>
                    </Link>
                ))}
            </section>
        </div>
    );
}
