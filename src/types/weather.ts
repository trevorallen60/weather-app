// Defined to match the 5-day / 3-hour forecast structure
export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  pop: number; // Probability of precipitation
  dt_txt: string;
}

export interface WeatherResponse {
  list: ForecastItem[];
  city: {
    name: string;
    country: string;
    timezone: number;
  };
}