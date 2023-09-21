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