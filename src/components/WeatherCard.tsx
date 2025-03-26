import {Star, Wind, Droplets} from 'lucide-react';
import {WeatherData, TemperatureUnit} from '../types/weather';

interface WeatherCardProps {
    data: WeatherData;
    unit: TemperatureUnit;
    isFavourite: boolean;
    onToggleFavourite: () => void; // void - the function doesn't return anything
}
export default function WeatherCard({
    data,
    unit,
    isFavourite,
    onToggleFavourite
}: WeatherCardProps) {
    const formatTemperature = (temp: number) => {
        return `${Math.round(temp)}°${unit === 'celsius' ? 'C' : 'F'}`;
    }
    return(
        <div className='bg-white rounded-xl shadow-lg p-6 w-full max-w-md'>
            <div className='flex justify-between items-start'>
                <div>
                    <h2 className='text-2xl font-bold text-gray-800'>{data.name}</h2>
                    <p className='text-gray-600'>{data.weather[0].description}</p>
                </div>
                <button
                    onClick={onToggleFavourite}
                    className={`p-2 rounded-full ${
                        isFavourite ? 'text-yellow-500' : 'text-gray-400'
                    } hover:bg-gray-100`}
                    >
                        <Star fill={isFavourite ? 'currentColor' : 'none'} />    
                </button>
            </div>
            <div className='mt-4 flex items-center justify-center'>
                <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} // @2x.png higher resolution than .png
                    alt={data.weather[0].description}
                    className='w-20 h-20'        
                />
                <span className='text-5xl font-bold text-gray-800'>
                    {formatTemperature(data.main.temp)}        
                </span>
            </div>
            <div className='mt-6 grid grid-cols-2 gap-4'>
                <div className='flex items-center gap-2 text-gray-600'>
                    <Wind size={20} />
                    <span>{Math.round(data.wind.speed)} m/s</span>        
                </div>
                <div className='flex items-center gap-2 text-gray-600'>
                    <Droplets size={20} />
                    <span>{data.main.humidity}%</span>
                </div>
            </div>
        </div>
    )
}