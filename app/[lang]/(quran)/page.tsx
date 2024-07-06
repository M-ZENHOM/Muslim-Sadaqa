import { Icons } from "@/components/Icons";
import SurahBox from "@/components/SurahBox";
import Wrapper from "@/components/Wrapper";
import { cn } from "@/lib/utils";
import FavBox from "@/components/FavBox";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries";
import { QuranData } from "@/types";
import { getQuranChapters } from "@/lib/getQuranChapters";
import TodayAyah from "@/components/TodayAyah";
import { getMuslimData } from "@/lib/getMuslimData";

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}) {
  return {
    title: `${
      params.lang === "ar"
        ? "  القران الكريم - مسلم صدقة"
        : "Quran Kareem - Muslism Sadqa"
    }`,
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { IndexPage } = await getDictionary(lang);
  const QuranChapters = await getQuranChapters(lang);
  const randomAyah = await getMuslimData("random-ayah", lang);

  return (
    <Wrapper>
      <Icons.QuranKareem className="w-4/12 mx-auto py-28 md:py-20" />
      <div className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-between">
        <TodayAyah
          AyahBoxTitle={IndexPage.AyahBoxTitle}
          lang={lang}
          randomAyah={randomAyah.data.text}
        />
        <FavBox IndexPage={IndexPage} lang={lang} />
      </div>
      {QuranChapters.length !== 0 ? (
        <div
          className={cn("grid grid-cols-fluid gap-4 py-4 place-items-center")}
        >
          {QuranChapters.map((q: QuranData) => (
            <SurahBox key={q.number} {...q} lang={lang} />
          ))}
        </div>
      ) : (
        <p className="w-full text-center text-xl py-20 text-red-600">
          *
          {lang === "ar"
            ? "فى مشكله في السرفر يا كينج تعالى كمان شوية "
            : "Something went wrong, try again later!"}
        </p>
      )}
    </Wrapper>
  );
}
