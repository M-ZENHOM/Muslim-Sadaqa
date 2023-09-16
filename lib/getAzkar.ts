import axios from "axios"

export const getMorningAzkar = async () => {
    const res = await axios.get('http://localhost:3000/api/MorningAzkar')
    return JSON.parse(res.data)
}
export const getEvenAzkar = async () => {
    const res = await axios.get('http://localhost:3000/api/EvenAzkar')
    return JSON.parse(res.data)
}