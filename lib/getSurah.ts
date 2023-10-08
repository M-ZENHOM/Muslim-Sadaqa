import axios, { isAxiosError } from "axios";
import { toast } from "sonner";

export const getSurah = async (id: number) => {
    try {
        const res = await axios.get(`http://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
        return res.data
    } catch (error) {
        if (isAxiosError(error)) {
            toast.error(error.message)
        }
        return `${error} Fetching erorr on single surah`
    }
}