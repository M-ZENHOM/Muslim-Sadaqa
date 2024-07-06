import { Locale } from "@/i18n-config";
import { AyahType } from "@/types";
import axios from "axios"

export const getMuslimData = async (pathName: string, lang: Locale) => {
    try {
        const res = await axios.get(`${process.env.NODE_ENV === "production" ? process.env.PRODCTUION_URL : 'http://localhost:3000/'}${lang}/api/${pathName}`)
        return res.data
    } catch (error) {
        axios.isAxiosError(error) && console.error(error)
    }
};