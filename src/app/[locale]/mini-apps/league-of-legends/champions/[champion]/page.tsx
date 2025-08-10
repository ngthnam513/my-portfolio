import { getChampionByName } from "@/apis/league-of-legends";
import {
  getChampionDifficultyIcon,
  getChampionDifficultyTranslationKey,
  getChampionRoleIcon,
  getChampionSplashImageURL,
  getLeagueOfLegendsLocale,
} from "@/lib/league-of-legends.helper";
import { Metadata } from "next";
import {} from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Fragment } from "react";
import AbilitiesSection from "./abilities";
import SkinsSection from "./skins";

interface ChampionPageProps {
  champion: string;
  locale: string;
}

export async function generateMetadata({
  params,
}: {
  params: ChampionPageProps;
}): Promise<Metadata> {
  const { champion, locale } = await params;
  return {
    icons: {
      icon: `/league-of-legends.svg`,
    },
    title: `${champion}`,
    description:
      locale === "en"
        ? `League Of Legends Champion: ${champion}`
        : `Vị tướng Liên Minh Huyền Thoại: ${champion}`,
  };
}

export default async function ChampionPage({
  params,
}: {
  params: ChampionPageProps;
}) {
  const { champion, locale } = await params;
  const response = await getChampionByName(
    getLeagueOfLegendsLocale(locale),
    champion
  );
  const championData = response?.data?.[champion];

  const t = await getTranslations("LEAGUE_OF_LEGENDS_CHAMPIONS_PAGE");

  return (
    <>
      <section className="relative w-full bg-[var(--color-secondary-background)]">
        <Image
          src={getChampionSplashImageURL(championData?.id, 0)}
          alt={championData?.id}
          width={1215}
          height={717}
          unoptimized
          priority
          className="object-cover w-full h-auto"
        />
        <div className="md:absolute md:inset-0 md:bg-gradient-to-r md:from-black/70 md:to-white/10 flex flex-col justify-center px-4 md:px-12 lg:px-28 py-4">
          <h2 className="text-base md:text-xl lg:text-3xl text-[var(--color-lol-foreground)] font-bold uppercase italic lg:mt-16">
            {championData?.title}
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-7xl md:text-white font-bold uppercase italic my-4 lg:my-6">
            {championData?.name}
          </h1>
          <p className="w-full lg:w-1/2 md:text-white text-justify">
            {championData?.lore}
          </p>
          <div className="flex justify-center md:justify-start items-center gap-8 mt-4">
            <div className="border border-[var(--color-lol-foreground)] w-32 h-32 p-4 text-center">
              <div className="flex justify-center items-center gap-4">
                {championData?.tags.map((tag) => (
                  <Fragment key={tag}>
                    {getChampionRoleIcon(tag, { className: "w-8 h-8" })}
                  </Fragment>
                ))}
              </div>
              <h4 className="text-xs md:text-white uppercase mt-6">
                {t("ROLE")}
              </h4>
              <p className="text-xs text-[var(--color-lol-foreground)] uppercase">
                {championData?.tags.join(" / ")}
              </p>
            </div>
            <div className="border border-[var(--color-lol-foreground)] w-32 h-32 p-4 text-center">
              <div className="flex justify-center items-center text-[var(--color-lol-foreground)]">
                {getChampionDifficultyIcon(championData?.info?.difficulty)}
              </div>
              <h4 className="text-xs md:text-white uppercase mt-6">
                {t("DIFFICULTY")}
              </h4>
              <p className="text-xs text-[var(--color-lol-foreground)] uppercase">
                {t(
                  getChampionDifficultyTranslationKey(
                    championData?.info?.difficulty
                  )
                )}
              </p>
            </div>
          </div>
          <div className="border-t border-t-[var(--color-lol-foreground)] w-full lg:w-1/2 flex justify-start items-center space-x-2 md:space-x-6 mt-4 lg:mt-auto pt-1">
            <p className="text-xs text-secondary-foreground uppercase">
              {t("CHAMPION_MASTERY")}
            </p>
            <a
              href={`https://op.gg/lol/champions/${championData?.id}/build`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs lg:text-white hover:underline"
            >
              OP.GG
            </a>
            <a
              href={`https://u.gg/lol/champions/${championData?.id}/build`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs lg:text-white hover:underline"
            >
              U.GG
            </a>

            <a
              href={`https://probuildstats.com/champion/${championData?.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs lg:text-white hover:underline"
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
