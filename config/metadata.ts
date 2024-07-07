import { Locale } from "@/i18n-config";
import { siteConfig } from "./site";

export async function generateMetadata({
    params,
}: {
    params: { id: number; lang: Locale };
}) {
    return {
        title: {
            default: `${params.lang === "ar" ? "مسلم صدقة" : "Muslism Sadqa"}`,
            template: `%s - ${params.lang === "ar" ? "مسلم صدقة" : "Muslism Sadqa"}`,
        },
        description: siteConfig.description,
        keywords: [
            "Quran",
            "Azkar",
            "Doaa",
            "أذكار",
            "دعاء",
            "قرأن",
            "تسبيح",
            "اذكار الصباح",
            "اذكار المساء",
            "سور",
            "سور القران",
            "quran surah",
        ],
        metadataBase: new URL(siteConfig.url),
        openGraph: {
            type: "website",
            locale: "en_US",
            url: siteConfig.url,
            title: siteConfig.title,
            description: siteConfig.description,
            siteName: siteConfig.title,
            images: [
                {
                    url: `${siteConfig.url}/opengraph-image.png`,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: siteConfig.title,
            description: siteConfig.description,
            images: [`${siteConfig.url}/opengraph-image.png`],
            creator: "@MAD_ZENHOM",
        },
        authors: [
            {
                name: "Mahmoud Zenhom",
                url: siteConfig.github,
            },
        ],
        publisher: "Mahmoud Mohamed Zenhom",
        creator: "Mahmoud Zenhom",
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon.ico",
            apple: "/favicon.ico",
        },
    };
}