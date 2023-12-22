import { Locale } from "@/i18n-config";
import axios from "axios"

export const getMusliumData = async (pathName: string, lang: Locale) => {
    try {
        const res = await axios.get(`${process.env.NODE_ENV === "production" ? process.env.PRODCTUION_URL : 'http://localhost:3000/'}${lang}/api/${pathName}`)
        return res.data
    } catch (error) {
        axios.isAxiosError(error) && console.error(error)
    }
};

export const getRandomAyah = async () => {
    try {
        const res = await axios.get(`${process.env.API_URL}/ayah/${Math.floor(Math.random() * 6236)}/ar.alafasy`)
        return res.data
    } catch (error) {
        axios.isAxiosError(error) && console.error(error)
    }
}