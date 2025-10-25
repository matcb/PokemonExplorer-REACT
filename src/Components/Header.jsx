import ThemeToggle from './ThemeToggle'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'


const Header = () => {
    const {darkMode} = useContext(ThemeContext)
    
    return (
        <>
            <header className="bg-poke-blue dark:bg-poke-red text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold flex items-center">
                        <img className="w-6 h-6 mr-2" src="../assets/pokeball-pokemon-svgrepo-com.svg" alt="pokeboll" />
                    </h1>   
                    <nav className="flex items-center space-x-4">
                        <Link className="hover:underline" to="/">Explorar</Link>
                        <Link className="hover:underline" to="/favoritos">Favoritos</Link>
                        <Link className="hover:underline" to="/sobre">Sobre</Link>
                        <ThemeToggle/>
                    </nav>
                </div>
            </header>
        </>
    )

}