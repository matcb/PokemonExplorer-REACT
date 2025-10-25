import { useContext } from 'react'
import PokemonContext from '../Context/PokemonContext'

const  TypeFilter = ({onFilter}) => {
    const {types} = useContext(PokemonContext)
     return(
        <>
            <select 
            className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600 mb-4" 
            onChange={(e) => onFilter(PokemonContext)}
            aria-label="Filtro por Tipos"
            >
                <option value="">Todos os Tipos</option>    
                {types.map(type => (<option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>))}
            </select>
        </>
     )
}

export default TypeFilter