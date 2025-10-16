export const loadFavorites = () => JSON.parse(localStorage.getItem('favorites')) || []
export const saveFavorites = (favorites) => localStorage.setItem('favorites', JSON.stringfy(favorites))