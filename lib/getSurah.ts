import axios, { isAxiosError } from "axios";

export const getSurah = async (id: number) => {
    try {
        const res = await axios.get(`http://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
        return res.data
    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error.message);

        }
        return `${error} Fetching erorr on single surah`
    }
}