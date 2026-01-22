import DaySection from "@/src/components/day-section";
import { WeatherService } from "@/src/services/weather";
import { groupForecastByDay } from "@/src/utils/weather-helpers";
import { notFound } from "next/navigation";
import { MapPin, CalendarDays } from "lucide-react"; // Sleek iconography
import { cn } from "@/lib/utils";
import NotFound from "./error";
import CurrentWeather from "@/src/components/current-weather";

interface WeatherPageProps {
  params: {
    zip: string;
  };
}

export default async function WeatherPage({ params }: WeatherPageProps) {
  const { zip } = await params;

  try {
    const data = await WeatherService.getForecastByZip(zip);
    const groupedData = groupForecastByDay(data.list);
    const currentForecast = data.list[0];

    return (
      <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <CurrentWeather
            data={currentForecast} 
            city={data.city.name} 
          />
        <header className="relative text-center flex flex-col items-center">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-3 h-3" />
            Live Report
          </div>
          <div className="flex items-center gap-2 mt-4 text-slate-400 font-medium">
            <CalendarDays className="w-4 h-4 text-sky-500/70" />
            <p className="text-lg">5-Day Forecast <span className="text-slate-600">|</span> 3-hour intervals</p>
          </div>

        </header>


        <div className="grid gap-8 w-full max-w-full overflow-hidden px-1">
          {groupedData.map((group, index) => (
            <div
              key={group.date}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 min-w-0"
            >
              <DaySection group={group} />
            </div>
          ))}
        </div>

        <footer className="pt-10 pb-20 text-center text-slate-600 text-xs font-medium tracking-wide">
          Data provided by OpenWeather API • {new Date().getFullYear()}
        </footer>
      </div>
    );
  } catch (error) {
    console.error("Internal log:", error);
    throw error;
  }
}