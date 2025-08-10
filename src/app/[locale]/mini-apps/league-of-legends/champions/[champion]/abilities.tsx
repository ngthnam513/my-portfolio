"use client";
import BorderIcon from "@/components/icons/league-of-legends/border";
import {
  getChampionAbilityImageURL,
  getChampionAbilityKey,
  getChampionAbilityVideoURL,
  getChampionPassiveImageURL,
} from "@/lib/league-of-legends.helper";
import { cn } from "@/lib/utils";
import { ChampionDetails } from "@/types/league-of-legends";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment, useState } from "react";

interface AbilitiesSectionProps {
  championData: ChampionDetails;
}

export default function AbilitiesSection({
  championData,
}: AbilitiesSectionProps) {
  const t = useTranslations("LEAGUE_OF_LEGENDS_CHAMPIONS_PAGE");
  const [selectedSkillId, setSelectedSkillId] = useState<
    "P" | "Q" | "W" | "E" | "R"
  >("P");

  return (
    <section className="px-4 md:px-12 lg:px-28 py-12 xl:flex xl:justify-center xl:items-center gap-4 bg-[var(--color-secondary-background)]">
      <div className="xl:flex-1/2 relative">
        <h2 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold uppercase italic mb-8">
          {t("ABILITIES")}
        </h2>
        <div className="flex justify-start sm:justify-center items-start overflow-x-auto max-w-full overflow-hidden px-4 py-8">
          <button
            className="flex flex-col items-center justify-center min-w-24 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setSelectedSkillId("P")}
          >
            <div className="relative">
              <BorderIcon
                width="84"
                height="84"
                className={cn(
                  "absolute w-14 md:w-[84px] aspect-square -top-5 -left-1 md:inset-[-11px] z-10 opacity-0 scale-150 transition-transform duration-300 ease-in-out",
                  {
                    "opacity-100 scale-100": selectedSkillId === "P",
                  }
                )}
              />
              <Image
                src={getChampionPassiveImageURL(
                  championData?.passive?.image?.full
                )}
                alt={championData?.passive?.name}
                width={64}
                height={64}
                className={cn(
                  "rounded-full opacity-50 w-12 md:w-16 aspect-square",
                  {
                    "opacity-100": selectedSkillId === "P",
                  }
                )}
              />
            </div>
            <p className="text-sm font-medium uppercase mt-8">
              {championData?.passive?.name}
            </p>
          </button>
          <div className="w-6"></div>
          {championData?.spells.map((spell, index) => (
            <Fragment key={spell?.id}>
              <button
                key={spell.id}
                className="flex flex-col items-center justify-center min-w-24 cursor-pointer hover:scale-110 transition-transform"
                onClick={() =>
                  setSelectedSkillId(
                    index === 0
                      ? "Q"
                      : index === 1
                      ? "W"
                      : index === 2
                      ? "E"
                      : "R"
                  )
                }
              >
                <div className="relative">
                  <BorderIcon
                    width="84"
                    height="84"
                    className={cn(
                      "absolute w-14 md:w-[84px] aspect-square -top-5 -left-1 md:inset-[-11px] z-10 opacity-0 scale-150 transition-transform duration-300 ease-in-out",
                      {
                        "opacity-100 scale-100":
                          selectedSkillId === getChampionAbilityKey(index),
                      }
                    )}
                  />
                  <Image
                    src={getChampionAbilityImageURL(spell?.id)}
                    alt={spell.id}
                    width={64}
                    height={64}
                    className={cn(
                      "rounded-full opacity-50 w-12 md:w-16 aspect-square",
                      {
                        "opacity-100":
                          selectedSkillId === getChampionAbilityKey(index),
                      }
                    )}
                  />
                </div>
                <p className="text-sm font-medium uppercase mt-8">
                  {spell.name}
                </p>
              </button>
              {championData?.spells?.length !== index + 1 && (
                <div className="w-6"></div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="xl:flex-1/2">
        <div className="border border-[var(--color-lol-foreground)] p-4">
          <video
            autoPlay
            muted
            loop
            className="w-full aspect-auto"
            key={selectedSkillId}
          >
            <source
              src={getChampionAbilityVideoURL(
                championData?.key,
                selectedSkillId
              )}
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
