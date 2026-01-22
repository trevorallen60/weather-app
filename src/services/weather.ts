import { WeatherResponse } from "../types/weather";

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const WeatherService = {
  async getForecastByZip(zip: string): Promise<WeatherResponse> {
    // Note: OpenWeather requires a country code for zip searches (e.g., ,us)
    const response = await fetch(
      `${BASE_URL}/forecast?zip=${zip},us&appid=${API_KEY}&units=imperial`
    );

    if (!response.ok) {
      throw new Error(`Weather data not found for zip: ${zip}`);
    }

    return response.json();
  }
};