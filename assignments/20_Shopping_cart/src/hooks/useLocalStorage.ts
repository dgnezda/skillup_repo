import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) { // type T of useLocalStorage means it's a generic type, and initial value is going to either be that type (T) or a function, that returns T
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === "function") {
            return (initialValue as () => T)()
        } else {
            return initialValue
        }
    })

    useEffect(() => (
        localStorage.setItem(key, JSON.stringify(value))
    ), [key, value])
    
    return [value, setValue] as [typeof value, typeof setValue]
}

