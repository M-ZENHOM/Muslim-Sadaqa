import axios from "axios";

export const getSurah = async (id: number) => {
    try {
        const res = await axios.get(`${process.env.API_URL}/surah/${id}/ar.alafasy`)
        return res.data
    } catch (error) {
        console.log(error);
        return `${error} Fetching erorr on single surah`
    }
}