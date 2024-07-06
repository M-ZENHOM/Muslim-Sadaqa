import React from "react"

export const useLocalStorage = (key: string, initialValue: string | number) => {
    const [storedValue, setStoredValue] = React.useState(initialValue);

    React.useEffect(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                setStoredValue(JSON.parse(item));
            }
        } catch (error) {
            console.log(error);
        }
    }, [key]);

    const setValue = (value: string | number | ((val: string | number) => string | number)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue] as const;
}