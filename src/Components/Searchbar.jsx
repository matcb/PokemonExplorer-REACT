import {useState} from 'react'

const Searchbar = () => {
    
    
    return (
        <>
            <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder = "Busque por nome ou ID"
                    className="flex-grow p-2 border rounded dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-poke-yellow"
                    aria-label="Busca de Pokemon"

                
                />
                <button className="bg-poke-red text-white p-2 rounded hover:bg-poke-blue transition" type="submit">
                    Buscar
                </button>
            </form>
        </>
    )
}

export default Searchbar