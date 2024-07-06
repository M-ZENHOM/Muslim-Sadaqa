export interface QuranData {
    number: number,
    name: string,
    englishName: string,
    englishNameTranslation: string,
    numberOfAyahs: number,
    revelationType: string
    ayahs: []
}
export interface SurahType {
    number: number,
    numberOfAyahs: number,
    text: string,
    audio: string,
    audioSecondary: string,
    numberInSurah: number,
    juz: number,
    manzil: number,
    page: number,
    ruku: number,
    hizbQuarter: number,
    sajda: boolean

}

export interface AyahType {
    number: number
    text: string
    edition: {
        identifier: string
        language: string
        name: string
        englishName: string
        format: string
        type: string
    }
    surah: {
        number: number
        name: string
        englishName: string
        englishNameTranslation: string
        numberOfAyahs: number
        revelationType: string
    }
    numberInSurah: number
    juz: number
    manzil: number
    page: number
    ruku: number
    hizbQuarter: number
    sajda: boolean
}

export interface PalestineDoaaType {
    arabic: string
    english: string
}
export interface DeadDoaaType {
    fristPartOfDoaa: string
    secPartOfDoaa: string

}