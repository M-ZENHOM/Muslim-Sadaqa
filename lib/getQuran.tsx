import axios from "axios"

export const getQuran = async () => {
    const res = await axios.get(`http://api.alquran.cloud/v1/surah`)
    return res.data
}

export const getSurah = async (id: number) => {
    const res = await axios.get(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
    return res.data
}

export const getRandomAyah = async (ayahNumber: number) => {
    const res = await axios.get(`http://api.alquran.cloud/v1/ayah/${ayahNumber}/ar.alafasy`)
    return res.data
}
export const getAyahTafsir = async (AyahNumber: number) => {
    const res = await axios.get(`https://api.alquran.cloud/v1/ayah/${AyahNumber}/ar.muyassar`)
    return res.data
}

