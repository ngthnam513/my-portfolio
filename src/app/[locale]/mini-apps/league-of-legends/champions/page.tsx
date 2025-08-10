import { getChampionList } from "@/apis/league-of-legends";
import routes from "@/contants/routes";
import {
  getChampionLoadingScreenImageURL,
  getLeagueOfLegendsLocale,
} from "@/lib/league-of-legends.helper";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

interface LeagueOfLegendsChampionsPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "en"
        ? "League Of Legends Champions"
        : "Các Vị Tướng Liên Minh Huyền Thoại",
    description:
      locale === "en"
        ? "Explore the champions of League Of Legends."
        : "Khám phá các vị tướng của Liên Minh Huyền Thoại.",
  };
}

export default async function LeagueOfLegendsChampionsPage({
  params,
}: LeagueOfLegendsChampionsPageProps) {
  const t = await getTranslations("LEAGUE_OF_LEGENDS_CHAMPIONS_PAGE");
  const { locale } = await params;

  const response = await getChampionList(getLeagueOfLegendsLocale(locale));
  const champions = response?.data;

  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-28">
      <section className="text-center">
        <h1 className="text-sm md:text-lg lg:text-2xl uppercase">
          {t("CHOOSE")}
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase italic mt-2 mb-4">
          {t("CHAMPION")}
        </h1>
        <p className="text-xs md:text-base lg:text-lg text-secondary-foreground">
          {t("DESCRIPTION")}
        </p>
      </section>
      <section className="flex flex-wrap justify-between items-center ">
        {Object.values(champions).map((champion) => (
          <Link
            key={champion.id}
            className="w-full sm:flex-1/2 md:flex-1/4 p-2 group"
            href={`${routes.leagueOfLegendsChampions}/${champion.id}`}
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src={getChampionLoadingScreenImageURL(champion.id)}
                alt={champion.name}
                className="scale-110 group-hover:scale-125 transition-transform duration-200"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <h2 className="text-base md:text-xl lg:text-3xl text-white font-bold uppercase italic bg-[var(--color-lol-background)] p-4 group-hover:bg-[var(--color-lol-background)]/80">
              {champion.name}
            </h2>
          </Link>
        ))}
      </section>
    </div>
  );
}
