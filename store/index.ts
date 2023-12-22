import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Surah = {
    title: string,
    surahID: number
    isToggled?: boolean;
}
interface SurahStore {
    surahList: Surah[];
    toggleSurah: (title: string, surahID: number) => void;
    removeFromList: (id: number) => void;
}
interface SettingType {
    settings: {
        fontSize: string
        fontStyle: string
        reciter: string
    }[]
    setFontSize: (fontSize: string) => void;
    setFontStyle: (fontStyle: string) => void;
    setReciter: (reciter: string) => void;
    resetSetting: () => void;
}

const defaultSetting = {
    fontSize: "18",
    fontStyle: "normal",
    reciter: "ar.alafasy"
}

export const useSettings = create<SettingType>()(
    persist(
        (set, get) => ({
            settings: [
                defaultSetting
            ],
            setFontSize: (fontSize: string) => {
                set((state) => {
                    return {
                        settings: [
                            { fontSize, fontStyle: state.settings[0]!.fontStyle, reciter: state.settings[0]!.reciter }
                        ],
                    };
                });
            },
            setFontStyle: (fontStyle: string) => {
                set((state) => {
                    return {
                        settings: [
                            { fontStyle, fontSize: state.settings[0]!.fontSize, reciter: state.settings[0]!.reciter }
                        ],
                    };
                });
            },
            setReciter: (reciter: string) => {
                set((state) => {
                    return {
                        settings: [
                            { fontSize: state.settings[0]!.fontSize, fontStyle: state.settings[0]!.fontStyle, reciter }
                        ],
                    };
                });
            },
            resetSetting: () => {
                set((state) => {
                    return {
                        settings: [
                            defaultSetting
                        ],
                    };
                });
            },
        }),
        {
            name: 'settings',
        }
    )
)

export const useSurahStore = create<SurahStore>()(
    persist(
        (set, get) => ({
            surahList: [],
            toggleSurah: (title: string, surahID: number) => {
                set((state) => {
                    const surahIndex = state.surahList.findIndex((surah) => surah.surahID === surahID);

                    // If the surah is already in the list, remove it
                    if (surahIndex !== -1) {
                        const updatedSurahList = [...state.surahList];
                        updatedSurahList.splice(surahIndex, 1);
                        return { surahList: updatedSurahList };
                    }

                    // If the surah is not in the list, add it
                    return {
                        surahList: [
                            ...state.surahList,
                            { title, surahID },
                        ],
                    };
                });
            },

            removeFromList: (id: number) => {
                set((state) => ({
                    surahList: state.surahList.filter((surah) => surah.surahID !== id),
                }));
            }
        }),
        {
            name: 'surah-list',
        }
    )
)



