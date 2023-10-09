import React from "react"

export const useLocalStorage = (key: string, initailValue: string) => {
    const [value, setValue] = React.useState(() => {
        const storedValue = typeof window !== 'undefined' && window.localStorage.getItem(key)
        return storedValue && typeof window !== 'undefined' ? JSON.parse(storedValue) : initailValue
    })

    React.useEffect(() => {
        typeof window !== 'undefined' && window.localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}