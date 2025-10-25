import React, {useReducer, createContext, useEffect} from 'react'
import {loadFavorites, saveFavorites}from '../utils/storage.js'

/*Estado Inicial*/ 
const initialState = {
    favorites:loadFavorites(),
    types:['fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 
        'dragon', 'dark', 'steel', 'fairy']
}

/*Reducer - Atualiza o estado*/ 
const reducer = (state, action) => { // state = estado atual / action = obj que faz algo com o dado
    switch(action.type){
        
        case 'ADD_FAVORITE':
            if(!state.favorites.find(p => p.id === action.payload.id)){
                const newFavorites = [...state.favorites, action.payload]
                saveFavorites(newFavorites)
                return {...state, favorites: new newFavorites}

            } return state

        case 'REMOVE_FAVORITE':
           const updateFavorite = state.favorites.filter(p => p.id !== action.payload)
           saveFavorites(updateFavorite)
           return {...state, favorites:updateFavorite}
           default: return state
    }
}

const PokemonContext = createContext()

export const PokemonProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState) // dispatch mensageiro que envia acao para o reducer

    return(
        <PokemonContext.Provider value={{...state, dispatch}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContext