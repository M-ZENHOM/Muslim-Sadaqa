import { Locale } from "@/i18n-config";
import axios, { type AxiosError } from "axios"

export const getMusliumData = async (pathName: string, lang: Locale) => {
    try {
        const res = await axios.get(`${process.env.NODE_ENV === "production" ? process.env.PRODCTUION_URL : 'http://localhost:3000/'}${lang}/api/${pathName}`)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            if (axiosError.response) {
                console.error("Error Response Data:", axiosError.response.data);
                console.error("Error Response Status:", axiosError.response.status);
            } else if (axiosError.request) {
                console.error("No Response Received");
            } else {
                console.error("Other Axios Error:", axiosError.message);
            }
        } else {
            console.error("Other Error:", error);
        }
        throw new Error("QuranFahras  data failed");
    }
};

export const getQuranFahras = async (lang: Locale) => {
    try {
        const res = await axios.get(`${process.env.NODE_ENV === "production" ? process.env.PRODCTUION_URL : 'http://localhost:3000/'}${lang}/api/quran`)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            if (axiosError.response) {
                console.error("Error Response Data:", axiosError.response.data);
                console.error("Error Response Status:", axiosError.response.status);
            } else if (axiosError.request) {
                console.error("No Response Received");
            } else {
                console.error("Other Axios Error:", axiosError.message);
            }
        } else {
            console.error("Other Error:", error);
        }
        throw new Error("QuranFahras  data failed");
    }
}


export const getSurah = async (id: number) => {
    try {
        const res = await axios.get(`http://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            if (axiosError.response) {
                console.error("Error Response Data:", axiosError.response.data);
                console.error("Error Response Status:", axiosError.response.status);
            } else if (axiosError.request) {
                console.error("No Response Received");
            } else {
                console.error("Other Axios Error:", axiosError.message);
            }
        } else {
            console.error("Other Error:", error);
        }
        throw new Error("Fetching Surah data failed");
    }
}



export const getRandomAyah = async () => {
    try {
        const res = await axios.get(`${process.env.API_URL}/ayah/${Math.floor(Math.random() * 6236)}/ar.alafasy`)
        return res.data

    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            if (axiosError.response) {
                console.error("Error Response Data:", axiosError.response.data);
                console.error("Error Response Status:", axiosError.response.status);
            } else if (axiosError.request) {
                console.error("No Response Received");
            } else {
                console.error("Other Axios Error:", axiosError.message);
            }
        } else {
            console.error("Other Error:", error);
        }
        throw new Error("Fetching RandomAyah data failed");
    }
}