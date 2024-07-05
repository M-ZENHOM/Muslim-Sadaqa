import axios from "axios"

export const getQuranChapters = async (lang: string) => {
    const URL = process.env.NODE_ENV === "production" ? process.env.PRODCTUION_URL : 'http://localhost:3000'
    try {
        const res = await axios.get(`${URL}/${lang}/api/quran`)
        return res.data
    } catch (error) {
        return axios.isAxiosError(error) && console.error(error)
    }
}