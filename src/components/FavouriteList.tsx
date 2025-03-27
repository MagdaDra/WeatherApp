import { X } from "lucide-react";
import { FavouriteLocation } from "../types/weather";

interface FavouritesListProps {
    favourites: FavouriteLocation[];
    onSelect: (location: FavouriteLocation) => void;
    onRemove: (id: string) => void;
}

export default function FavouritesList({
    favourites,
    onSelect,
    onRemove,
}: FavouritesListProps) {
    if (favourites.length === 0) {
        return null;
    }

    return (
        <div className='w-full max-w-md'>
            <h3 className='text-sm font-medium text-gray-500 mb-2'>Favourite Locations</h3>
            <div className='flex flex-wrap gap-2'>
                {favourites.map((location) => (
                    <div
                        key={location.id}
                        className='group flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow-sm'
                    >
                        <button
                            onClick={() => onSelect(location)}
                            className='text-gray-700 hover:text-gray-900'
                            >
                                {location.name}
                        </button>
                        <button 
                            onClick={() => onRemove(location.id)}
                            className='opacity-0 group-hover:opacity-100 text-gray-400 hover: text-gray-600 transition-opacity'
                            >
                            <X size={14} />        
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}