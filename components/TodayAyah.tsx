"use client";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { AyahType } from "@/types";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import { Card, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface fetchedAyahType {
  data: AyahType;
}

export default function TodayAyah({
  AyahBoxTitle,
  lang,
  randomAyah,
}: {
  AyahBoxTitle: string;
  lang: "en" | "ar";
  randomAyah: string;
}) {
  const [_, copy] = useCopyToClipboard();
  const textLength = randomAyah.length;
  return (
    <Card className="w-full h-60  p-8 text-center space-y-3 bg-gradient-to-br from-primary/25 to-50% flex flex-col items-center justify-center">
      <CardTitle className="text-muted-foreground">{AyahBoxTitle}</CardTitle>
      {!randomAyah ? (
        <Skeleton className="w-full h-10" />
      ) : (
        <h2 className={`${textLength > 50 ? "text-md" : "text-xl"}`}>
          {randomAyah}
        </h2>
      )}
      <Button className="flex" onClick={() => copy(randomAyah)}>
        {lang === "ar" ? "نسخ الاية" : "Copy Ayah"}{" "}
        <Icons.Copy className="w-6 h-6 mr-2 cursor-pointer  p-1" />
      </Button>
    </Card>
  );
}
