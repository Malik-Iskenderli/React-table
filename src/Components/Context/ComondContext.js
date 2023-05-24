import React, { useState, useEffect } from "react";
import { createContext } from "react";

const ComondContext = createContext()

export const ComondContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme") || false))

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

    const data = {
        theme,
        setTheme,
    }

    return (
        <ComondContext.Provider value={data}>
            {children}
        </ComondContext.Provider>
    )
    
}

export default ComondContext