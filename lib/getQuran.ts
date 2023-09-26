import axios from "axios"



export const getQuran = async () => {
    try {
        const res = await axios.get(`http://api.alquran.cloud/v1/quran/ar.alafasy`)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.message);
            return "Error try again later - في مشكلة جرب في وقت تاني";
        }
    }
}

// export const getSurah = async (id: number) => {
//     try {
//         const res = await axios.get(`${process.env.API_URL}/surah/${id}/ar.alafasy`)
//         return res.data
//     } catch (error) {
//         console.log(error);
//         return `${error} Fetching erorr on single surah`
//     }
// }

// export const getRandomAyah = async (ayahNumber: number) => {
//     try {
//         const res = await axios.get(`${process.env.API_URL}/ayah/${ayahNumber}/ar.alafasy`)
//         return res.data

//     } catch (error) {
//         console.log(error);
//         return `${error} Fetching erorr on RandomAyah`
//     }
// }

