import { Locale } from "@/i18n-config";
import axios from "axios"

export const getMuslimData = async (pathName: string, lang: Locale) => {
    try {
        const res = await axios.get(`${process.env.NODE_ENV === "production" ? process.env.PRODCTUION_URL : 'http://localhost:3000/'}${lang}/api/${pathName}`)
        return res.data
    } catch (error) {
        axios.isAxiosError(error) && console.error(error)
    }
};

export const getRandomAyah = async () => {
    const randomAyah = Math.floor(Math.random() * 6236) + 1
    try {
        const res = await axios.get(`${process.env.API_URL}/ayah/${randomAyah}/ar.alafasy`)
        return res.data
    } catch (error) {
        axios.isAxiosError(error) && console.error(error)
    }
}