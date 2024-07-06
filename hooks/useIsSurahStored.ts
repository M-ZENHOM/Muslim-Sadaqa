import { useSurahStore } from "@/store";
import { useCallback, useEffect, useState } from "react";

export const useIsSurahStored = (surahId: number) => {
    const [isStored, setIsStored] = useState(false);

    const checkIsStored = useCallback(() => {
        const stored = useSurahStore.getState().surahList.some(s => s.surahID === surahId);
        setIsStored(stored);
    }, [surahId]);

    useEffect(() => {
        checkIsStored();
        return useSurahStore.subscribe(checkIsStored);
    }, [checkIsStored]);

    return isStored;
};