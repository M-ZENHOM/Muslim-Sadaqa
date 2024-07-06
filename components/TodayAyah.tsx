"use client";
import { useEffect, useRef, useState } from "react";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import { Card, CardTitle } from "./ui/card";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { getMuslimData } from "@/lib/getMuslimData";
import { AyahType } from "@/types";
import { Skeleton } from "./ui/skeleton";

interface fetchedAyahType {
  data: AyahType;
}

export default function TodayAyah({
  AyahBoxTitle,
  lang,
}: {
  AyahBoxTitle: string;
  lang: "en" | "ar";
}) {
  const [_, copy] = useCopyToClipboard();
  const [ayah, setAyah] = useState<fetchedAyahType>();
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;

    fetchedRef.current = true;
    getMuslimData("random-ayah", lang).then(setAyah).catch(console.error);
  }, [lang]);

  return (
    <Card className="w-full h-60  p-8 text-center space-y-3 bg-gradient-to-br from-primary/25 to-50% flex flex-col items-center justify-center">
      <CardTitle className="text-muted-foreground">{AyahBoxTitle}</CardTitle>
      {!ayah ? (
        <Skeleton className="w-full h-10" />
      ) : (
        <h2 className="text-lg">{ayah?.data.text}</h2>
      )}
      <Button className="flex" onClick={() => copy(ayah?.data.text!)}>
        {lang === "ar" ? "نسخ الاية" : "Copy Ayah"}{" "}
        <Icons.Copy className="w-6 h-6 mr-2 cursor-pointer  p-1" />
      </Button>
    </Card>
  );
}
