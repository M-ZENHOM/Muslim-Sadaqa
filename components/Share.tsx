import React from 'react'
import {
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'next-share'
import { siteConfig } from '@/config/site'
import { Locale } from '@/i18n-config'

export default function Share({ lang }: { lang: Locale }) {
    return (
        <div className='flex flex-col items-center space-y-4'>
            <h2>{lang === "ar" ? "شارك الموقع مع اصحابك" : "Share website"}</h2>
            <div className='w-full flex items-center justify-around'>
                <TwitterShareButton
                    url={siteConfig.url}
                    title={siteConfig.description}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <FacebookShareButton
                    url={siteConfig.url}
                    quote={siteConfig.description}
                    hashtag={'#quran #islam #quranwebapp #islamwebapp #doaa #azkar '}
                    title={siteConfig.description}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <WhatsappShareButton
                    url={siteConfig.url}
                    title={siteConfig.description}
                    separator=" "
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </div>
        </div>
    )
}
