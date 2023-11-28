import { useState }  from "react";

export function useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try{
            const item  = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue
        }
    })
    
    const setValue = object => {
        try {
            const arrayItems = JSON.parse(window.localStorage.getItem(key)) || [];
            arrayItems.push(object);
            setStoredValue(arrayItems)
            window.localStorage.setItem(key, JSON.stringify(arrayItems))
        } catch (error) {
            console.error(error);
        }
    }
    return [storedValue, setValue]
}

