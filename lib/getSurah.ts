import axios from "axios";

export const getSurah = async (id: number) => {
    try {
        const res = await axios.get(`http://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
        return res.data
    } catch (error) {
        console.log(error);
        return `${error} Fetching erorr on single surah`
    }
}