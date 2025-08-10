"use client";
import ArrowLeftIcon from "@/components/icons/arrow-left";
import ArrowRightIcon from "@/components/icons/arrow-right";
import { getChampionSplashImageURL } from "@/lib/league-of-legends.helper";
import { cn } from "@/lib/utils";
import { ChampionDetails } from "@/types/league-of-legends";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SkinsSectionProps {
  championData: ChampionDetails;
}

export default function SkinsSection({ championData }: SkinsSectionProps) {
  const t = useTranslations("LEAGUE_OF_LEGENDS_CHAMPIONS_PAGE");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [selectedSkinIndex, setSelectedSkinIndex] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const containerW = containerRef.current.scrollWidth;
    const imageW = containerW / championData?.skins?.length || 1;
    containerRef.current.scrollTo({
      left: imageW * selectedSkinIndex,
      behavior: "smooth",
    });
    if (!progressRef.current) return;
    progressRef.current.style.width = `${
      ((selectedSkinIndex + 1) / championData?.skins?.length) * 100
    }%`;
  }, [selectedSkinIndex, championData?.skins?.length]);

  return (
    <section className="px-4 md:px-12 lg:px-28 py-12 bg-[var(--color-secondary-background)]">
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase italic mb-8">
        {t("AVAILABLE_SKINS")}
      </h2>
      <div className="relative w-full">
        <Image
          src={getChampionSplashImageURL(
            championData?.id,
            championData?.skins?.[selectedSkinIndex]?.num
          )}
          alt={`${championData?.name}-${selectedSkinIndex}`}
          width={1215}
          height={717}
          unoptimized
          priority
          className="object-cover w-full h-auto"
        />
      </div>
      <div
        ref={containerRef}
        className="flex overflow-x-auto py-4"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {championData?.skins?.map((skin, index) => (
          <button
            key={skin?.id}
            className={cn(
              "relative flex-shrink-0 w-1/3 md:w-1/4 lg:w-1/5 p-2 cursor-pointer border border-transparent transition-[border-color] duration-200 ease-linear",
              {
                "border-[var(--color-lol-foreground)]":
                  selectedSkinIndex === index,
              }
            )}
            onClick={() => setSelectedSkinIndex(index)}
          >
            <Image
              src={getChampionSplashImageURL(championData?.id, skin?.num)}
              alt={`${championData?.name} - ${skin?.name}`}
              width={1215}
              height={717}
              className="object-cover w-full h-auto"
            />
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <div className="flex-1 rounded-full bg-secondary-foreground mr-4">
          <div
            className="h-1 rounded-full bg-[var(--color-lol-foreground)] transition-[width] duration-200 ease-linear"
            ref={progressRef}
          />
        </div>
        <button
          className={cn(
            "cursor-pointer hover:opacity-80 text-[var(--color-lol-foreground)]",
            {
              "text-secondarybg-secondary-foreground cursor-not-allowed":
                selectedSkinIndex === 0,
            }
          )}
          disabled={selectedSkinIndex === 0}
          onClick={() => setSelectedSkinIndex((prev) => prev - 1)}
        >
          <ArrowLeftIcon />
        </button>
        <button
          className={cn(
            "cursor-pointer hover:opacity-80 text-[var(--color-lol-foreground)]",
            {
              "text-secondarybg-secondary-foreground cursor-not-allowed":
                selectedSkinIndex === championData?.skins?.length - 1,
            }
          )}
          disabled={selectedSkinIndex === championData?.skins?.length - 1}
          onClick={() => setSelectedSkinIndex((prev) => prev + 1)}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
}
