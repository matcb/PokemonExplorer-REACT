import {useContext} from 'react'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import ThemeContext from '../Context/ThemeContext'

const ThemeToggle = () => {
    const {darkMode, toggleDarkMode} = useContext(ThemeContext)

    return(
        <>
            <button   aria-label={darkMode ? 'Modo Claro' : 'Modo Escuro'} onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                {darkMode ? <MdLightMode/> : <MdDarkMode/>}
            </button>
        </>
    )
}

export default ThemeToggle