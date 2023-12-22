import axios from "axios"

export const getSurahDetails = async (id: number, lang: string) => {
    try {
        const res = await axios.get(`${process.env.API_URL}/surah/${id}/${lang === "ar" ? "ar.alafasy" : "en.asad"}`)
        return res.data
    } catch (error) {
        return axios.isAxiosError(error) && console.error(error)
    }
}