import { useSurah } from "@/libs/hooks/surah";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Surah() {
  const router = useRouter();
  const { id } = router.query;
  const { data: surah, loading: surahLoading } = useSurah(id);

  return (
    <>
      <Head>
        <title>{surah?.englishName}</title>
      </Head>
      <div className="max-w-[600px] container mx-auto px-5 md:px-0">
        {surahLoading ? (
          <div className="pt-10">Loading</div>
        ) : (
          <>
            <div className="border-b border-gray-500 border-dashed pt-10 pb-10 mb-10">
              <Link className="mb-4 block text-blue-600" href="/">
                Back to Home
              </Link>
              <h2 className="text-3xl mb-2">{surah?.englishName}</h2>
              <p className="text-gray-400 font-light text-xl">
                {surah?.name} | {surah?.englishNameTranslation} |{" "}
                {surah?.numberOfAyahs} Ayat
              </p>
            </div>
            <div className="mb-10 flex flex-col gap-10">
              {surah?.ayahs?.map((ayat) => (
                <div
                  className="text-xl text-right flex flex-row-reverse items-center gap-4"
                  key={ayat?.number}
                >
                  {ayat?.text}{" "}
                  <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full p-2 border border-gray-300 text-sm">
                    {ayat?.numberInSurah}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
