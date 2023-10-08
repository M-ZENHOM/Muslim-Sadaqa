import axios, { isAxiosError } from "axios"


export const getMusliumData = async (pathName: string) => {
    try {
        const res = await axios(`${process.env.MUSLIUM_API_URL}/${pathName}`)
        return res.data
    } catch (err) {
        if (isAxiosError(err)) {
            console.log(err.message);
        }
        return `${err} Fetching erorr on MusliumData`
    }

}