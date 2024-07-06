"use client";
import useStore from "@/hooks/useStore";
import { useSurahStore } from "@/store";
import { Card, CardTitle } from "./ui/card";
import { Icons } from "./Icons";
import { ScrollArea } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

interface FavProps {
  IndexPage: {
    FavBoxTitle: string;
    FavBoxSubTitle: string;
    FavBoxDescription: string;
  };
  lang: string;
}
const FavBox = ({ IndexPage, lang }: FavProps) => {
  const surahStore = useStore(useSurahStore, (state) => state);
  return (
    <Card className="w-full h-60 p-8 text-center space-y-3 bg-gradient-to-br from-primary/25 to-50%">
      <CardTitle className="text-muted-foreground">
        {IndexPage.FavBoxTitle}
      </CardTitle>
      <ScrollArea
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="rounded-md p-4 h-full"
      >
        {!surahStore ? (
          <div className="w-full flex items-center flex-col justify-center space-y-4">
            <Skeleton className="w-20 h-5" />
            <Skeleton className="w-96 h-5" />
          </div>
        ) : surahStore?.surahList.length !== 0 ? (
          <>
            {surahStore?.surahList.map((surah) => (
              <Card
                key={surah.surahID}
                className="w-full p-4 bg-secondary my-2 flex items-center justify-between text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Link
                  href={`/surah/${surah.surahID}`}
                  className="text-xl font-semibold leading-none tracking-tight"
                >
                  {surah.title}
                </Link>
                <Icons.Remove
                  className="cursor-pointer hover:scale-125 hover:text-red-500 transition-all duration-300"
                  onClick={() => surahStore.removeFromList(surah.surahID)}
                />
              </Card>
            ))}
          </>
        ) : (
          <div className="space-y-3">
            <h2 className="cursor-pointer text-xl">
              {IndexPage.FavBoxSubTitle}
            </h2>
            <p className="text-muted-foreground">
              {IndexPage.FavBoxDescription}{" "}
            </p>
          </div>
        )}
      </ScrollArea>
    </Card>
  );
};

export default FavBox;
