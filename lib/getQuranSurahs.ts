import axios from "axios"

export const getQuranSurahs = async () => {
    try {
        const res = await axios.get(`${process.env.API_URL}/surah`)
        return res.data
    } catch (error) {
        return axios.isAxiosError(error) && console.error(error)
    }
}