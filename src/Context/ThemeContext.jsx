import React, {createContext, useState, useEffect} from "react"

/* 1- Instanciar obj createContext()*/ 
const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true' )
    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode: () => setDarkMode(!darkMode)}}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContext