import axios from "axios"

export const getMorningAzkar = async () => {
    const res = await axios.get('http://localhost:3000/api/MorningAzkar')
    return res.data
}