import axios, { isAxiosError } from "axios";

export const getRandomAyah = async (ayahNumber: number) => {
    try {
        const res = await axios.get(`${process.env.API_URL}/ayah/${ayahNumber}/ar.alafasy`)
        return res.data

    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error.message);

        }
        return `${error} Fetching erorr on RandomAyah`
    }
}