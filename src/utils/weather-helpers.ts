import { ForecastItem } from "../types/weather";

export interface DayGroup {
  date: string;
  items: ForecastItem[];
}

/**
 * Groups a flat list of 3-hour intervals by their calendar date.
 */
export const groupForecastByDay = (list: ForecastItem[]): DayGroup[] => {
  const groups: { [key: string]: ForecastItem[] } = {};

  list.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
  });

  return Object.keys(groups).map((date) => ({
    date,
    items: groups[date],
  }));
};

export const getWeatherIconUrl = (iconCode: string): string => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}