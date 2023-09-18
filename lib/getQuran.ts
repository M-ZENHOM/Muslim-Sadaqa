import axios from "axios"

export const getQuran = async () => {
    try {
        const res = await axios.get(`http://api.alquran.cloud/v1/surah`)
        return res.data
    } catch (error) {
        console.log(error);
        return `${error} Fetching erorr on all quran surah`
    }

}

export const getSurah = async (id: number) => {
    try {
        const res = await axios.get(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
        return res.data
    } catch (error) {
        console.log(error);
        return `${error} Fetching erorr on single surah`
    }
}

export const getRandomAyah = async (ayahNumber: number) => {
    try {
        const res = await axios.get(`http://api.alquran.cloud/v1/ayah/${ayahNumber}/ar.alafasy`)
        return res.data

    } catch (error) {
        console.log(error);
        return `${error} Fetching erorr on RandomAyah`
    }
}
export const getAyahTafsir = async (AyahNumber: number) => {
    try {
        const res = await axios.get(`https://api.alquran.cloud/v1/ayah/${AyahNumber}/ar.muyassar`)
        return res.data
    } catch (error) {
        console.log(error);
        return `${error} Fetching erorr on AyahTafsir`
    }
}

