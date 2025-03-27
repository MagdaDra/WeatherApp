import { TemperatureUnit} from "../types/weather";

interface UnitToggleProps {
    unit: TemperatureUnit;
    onToggle: (unit: TemperatureUnit) => void;
}

export default function UnitToggle({unit, onToggle}: UnitToggleProps) {
    return (
        <div className='flex items-center gap-2 bg-gray-100 rounded-lg p-1'>
            <button 
                onClick={() => onToggle('celsius')}
                className={`px-3 py-1 rounded-md transition-colors ${
                    unit === 'celsius'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                >
            °C
            </button>
            <button
                onClick={() => onToggle('fahrenheit')}
                className={`px-3 py-1 rounded-md transition-colors ${
                    unit === 'fahrenheit'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'                    
                }`}
                >
            °F            
            </button>
        </div>
    )
}