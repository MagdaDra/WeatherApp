import { FavouriteLocation, TemperatureUnit } from "../types/weather";

const FAVOURITES_KEY = 'weatherapp_favourites';
const UNIT_KEY = 'weatherapp_unit';

export const getFavourites = (): FavouriteLocation[] => {
    const stored = localStorage.getItem(FAVOURITES_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const addFavourite = (location: FavouriteLocation) => {
    const favourites = getFavourites();
    if (!favourites.some(fav=>fav.id === location.id)) {
        localStorage.setItem(FAVOURITES_KEY, JSON.stringify([...favourites, location]))
    }
};

export const removeFavourite = (id: string) => {
    const favourites = getFavourites();
    localStorage.setItem(
        FAVOURITES_KEY,
        JSON.stringify(favourites.filter(fav => fav.id !== id))
    );
};

export const getPreferredUnit = (): TemperatureUnit => {
    return (localStorage.getItem(UNIT_KEY) as TemperatureUnit) || 'celsius'
};

export const setPreferredUnit = (unit: TemperatureUnit) => {
    localStorage.setItem(UNIT_KEY, unit)
};



