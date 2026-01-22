import DaySection from "@/components-ui/day-section";
import { WeatherService } from "@/services/weather";
import { groupForecastByDay } from "@/utils/weather-helpers";
import { notFound } from "next/navigation";
import { MapPin, CalendarDays } from "lucide-react"; // Sleek iconography
import { cn } from "@/lib/utils";
import NotFound from "./error";
import CurrentWeather from "@/components-ui/current-weather";

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
      <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
        {/* Animated background accent */}
        <div className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-full blur-[150px] animate-pulse-glow pointer-events-none" />

        <CurrentWeather
            data={currentForecast}
            city={data.city.name}
          />
        <header className="relative text-center flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card cosmic-gradient bg-clip-text text-transparent text-xs font-black uppercase tracking-widest mb-4 animate-scale-pulse">
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
            Live Report
          </div>
          <div className="flex items-center gap-3 mt-4 text-slate-300 font-semibold">
            <CalendarDays className="w-5 h-5 text-orange-400 animate-pulse" />
            <p className="text-lg">5-Day Forecast <span className="text-slate-600 mx-2">|</span> 3-hour intervals</p>
          </div>

        </header>


        <div className="grid gap-8 w-full max-w-full overflow-hidden px-1 relative z-10">
          {groupedData.map((group, index) => (
            <div
              key={group.date}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
              className="animate-in fade-in slide-in-from-bottom-6 duration-700 min-w-0"
            >
              <DaySection group={group} />
            </div>
          ))}
        </div>

        <footer className="pt-10 pb-20 text-center text-slate-600 text-xs font-bold tracking-wider flex flex-col items-center gap-3 animate-in fade-in duration-1000" style={{ animationDelay: '1000ms' }}>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 animate-pulse" />
            Data provided by OpenWeather API • {new Date().getFullYear()}
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 animate-pulse" />
          </p>
        </footer>
      </div>
    );
  } catch (error) {
    console.error("Internal log:", error);
    throw error;
  }
}
