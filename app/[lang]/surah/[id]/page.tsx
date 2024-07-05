import { ScrollArea } from "@/components/ui/scroll-area";
import { Icons } from "@/components/Icons";
import { Locale } from "@/i18n-config";
import { SurahType } from "@/types";
import AyahBox from "@/components/AyahBox";
import { getMusliumData } from "@/lib/getMusliumData";
import { getDictionary } from "@/dictionaries";
import Setting from "@/components/Setting";
import SurahAudioBoxs from "@/components/SurahAudioBoxs";
import SurahDetails from "@/components/SurahDetails";
import { getSurahDetails } from "@/lib/getSurahDetails";
import QuranChapters from "@/config/db/QuranChapters.json";
export async function generateMetadata({
  params,
}: {
  params: { id: number; lang: Locale };
}) {
  const Surah = QuranChapters.map((surah) => surah).find(
    (surah) => surah.number == params.id
  );
  return {
    title: `${
      params.lang === "ar" ? Surah?.name : Surah?.englishNameTranslation
    }`,
  };
}

export default async function page({
  params,
  searchParams,
}: {
  params: { id: number; lang: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const ayahNum =
    typeof searchParams.ayahNum === "string" ? Number(searchParams.ayahNum) : 0;
  const [Surah, { SurahPage: surahPageTranslations }, reciters] =
    await Promise.all([
      getSurahDetails(params.id, params.lang),
      getDictionary(params.lang),
      getMusliumData("reciters", params.lang),
    ]);

  return (
    <section className="min-h-screen ">
      <Setting
        reciters={reciters}
        lang={params.lang}
        SurahPage={surahPageTranslations}
      />
      <div className="flex flex-col justify-center items-center md:flex-row gap-5 w-full pt-20 md:py-8 px-10 ">
        <SurahAudioBoxs
          ayahNum={ayahNum}
          SurahPage={surahPageTranslations}
          surahNum={params.id}
        />
        <SurahDetails
          lang={params.lang}
          Surah={Surah}
          SurahPage={surahPageTranslations}
        />
      </div>
      <div className="flex flex-col h-full flex-1 px-2 md:px-10">
        <ScrollArea className="w-full h-[50vh] md:h-[80vh] pb-20 ">
          <Icons.Bismallah className="text-center w-full" />
          {Surah.code === 200 ? (
            <>
              {Surah.data?.ayahs.map((sur: SurahType) => (
                <div
                  dir={params.lang === "ar" ? "rtl" : "ltr"}
                  key={sur.number}
                  className="flex justify-between items-center w-full p-2 group"
                >
                  <span className="bg-muted w-10 h-10 rounded-full text-center flex justify-center items-center group-hover:text-primary-foreground group-hover:bg-primary  text-lg">
                    {sur.numberInSurah}
                  </span>
                  <AyahBox
                    sur={sur}
                    Surah={Surah}
                    ayahNum={ayahNum}
                    lang={params.lang}
                  />
                </div>
              ))}
            </>
          ) : (
            <p className="w-full text-center text-xl py-20 text-red-600">
              *
              {params.lang === "ar"
                ? "فى مشكله في السرفر يا كينج تعالى كمان شوية "
                : "Something went wrong, try again later!"}
            </p>
          )}
        </ScrollArea>
      </div>
    </section>
  );
}
