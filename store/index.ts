import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Surah = {
    title: string,
    surahID: number
}
interface SurahStore {
    surahList: Surah[];
    addToList: (title: string, surahID: number) => void;
    removeFromList: (id: number) => void;
}

export const useSurahStore = create<SurahStore>()(
    persist(
        (set, get) => ({
            surahList: [],
            addToList: (title: string, surahID: number) => {
                // Check if surahID is already in the list
                const surahExists = get().surahList.some((surah) => surah.surahID === surahID);
                if (!surahExists) {
                    set((state) => ({
                        surahList: [
                            ...state.surahList,
                            { title, surahID },
                        ],
                    }));
                }
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