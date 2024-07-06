"use client";
import React, { FC, useMemo } from "react";
import Link from "next/link";
import { Icons } from "./Icons";
import { useIsSurahStored } from "@/hooks/useIsSurahStored";
import { useSurahStore } from "@/store";
import { arabicNumeralFormatter, cn } from "@/lib/utils";
import { Locale } from "@/i18n-config";

interface SurahBoxProps {
  number: number;
  name: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  lang: Locale;
}

const SurahBox: FC<SurahBoxProps> = ({
  number,
  name,
  numberOfAyahs,
  englishNameTranslation,
  lang,
}) => {
  const isStored = useIsSurahStored(number);
  const toggleSurah = useSurahStore((state) => state.toggleSurah);

  const handleToggleSurah = () => {
    toggleSurah(lang === "ar" ? name : englishNameTranslation, number);
  };

  return (
    <div className="flex w-full  max-w-[350px] justify-between items-center p-4 py-8 bg-muted rounded-lg border hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 group">
      <Link
        href={`/${lang}/surah/${number}`}
        className={cn("flex items-center justify-between space-x-4  w-full")}
      >
        <span className="w-[35px] h-[35px] bg-primary text-primary-foreground rounded-full text-center leading-[35px]">
          {lang === "ar"
            ? arabicNumeralFormatter(number.toString(), false)
            : number}
        </span>
        <span>{lang === "ar" ? `${name} ` : englishNameTranslation}</span>
        <span className={cn("group-hover:text-primary")}>
          {lang === "ar" ? `${numberOfAyahs} آيات` : `${numberOfAyahs} Ayahs`}
        </span>
      </Link>
      {isStored ? (
        <Icons.FilledHeart
          onClick={handleToggleSurah}
          className="w-7 h-7 cursor-pointer ml-4 "
        />
      ) : (
        <Icons.Heart
          onClick={handleToggleSurah}
          className={cn(
            "w-7 h-7 hover:scale-125 transition-all duration-300 cursor-pointer ml-4  "
          )}
        />
      )}
    </div>
  );
};

export default SurahBox;
