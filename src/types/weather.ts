export interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: Array<{
        main: string;
        description: string;
        icon: string;
    }>;
    wind: {
        speed: number;
    };
}

export interface FavouriteLocation {
    id: string;
    name: string
}

export type TemperatureUnit = 'celsius' | 'fahrenheit';
