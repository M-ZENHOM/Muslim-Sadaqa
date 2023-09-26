import axios from "axios";

export const getSurah = async (id: number) => {
    try {
        const res = await axios.get(`https://api.quran.com/api/v4/chapters/${id}?language=ar`)
        return res.data
    } catch (error) {
        console.log(error);
        return `${error} Fetching erorr on single surah`
    }
}