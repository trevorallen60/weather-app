import { ForecastItem } from "../types/weather";
import { getWeatherIconUrl } from "../utils/weather-helpers";
import { cn } from "@/lib/utils";
import { Wind, Droplets, Navigation2 } from "lucide-react"; // Navigation2 for the wind arrow

interface ForecastCardProps {
  item: ForecastItem;
  index: number;
}

export default function ForecastCard({ item, index }: ForecastCardProps) {
  const time = new Date(item.dt * 1000).toLocaleTimeString('en-US', {
    hour: 'numeric', 
    hour12: true,
  });

  const precipitation = item.pop ? Math.round(item.pop * 100) : 0;

  return (
    <div
      style={{ animationDelay: `${index * 50}ms` }}
      className={cn(
        "flex flex-col items-center justify-between p-5 min-w-[140px] h-[240px]",
        "glass-card rounded-3xl transition-all duration-700 ease-out",
        "hover:bg-white/[0.12] hover:-translate-y-3 hover:scale-105 hover:shadow-[0_20px_60px_rgba(139,92,246,0.4)] group",
        "animate-in fade-in zoom-in-95 fill-mode-both cursor-pointer"
      )}
    >
      {/* Time Header */}
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 cosmic-gradient bg-clip-text group-hover:text-transparent transition-all duration-500">
        {time}
      </span>

      {/* Weather Icon with Glow */}
      <div className="relative my-2">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-orange-400/20 blur-2xl rounded-full group-hover:from-purple-400/40 group-hover:to-orange-400/40 transition-all duration-700 animate-pulse-glow" />
        <img
          src={getWeatherIconUrl(item.weather[0].icon)}
          alt={item.weather[0].description}
          className="relative w-16 h-16 object-contain drop-shadow-2xl scale-110 group-hover:scale-125 transition-transform duration-700 group-hover:animate-float"
        />
      </div>

      {/* Main Temp & Description */}
      <div className="text-center">
        <span className="text-3xl font-black tracking-tighter cosmic-gradient bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 inline-block">
          {Math.round(item.main.temp)}°
        </span>
        <p className="text-[10px] font-bold text-slate-400 capitalize mt-0.5 group-hover:text-purple-300 transition-colors">
          {item.weather[0].main}
        </p>
      </div>

      {/* Data Grid - Wind & Precipitation */}
      <div className="w-full pt-3 mt-2 border-t border-white/10 grid grid-cols-2 gap-2">
        {/* Precipitation Column */}
        <div className="flex flex-col items-center gap-1 group/precip">
          <Droplets className={cn(
            "w-3 h-3 transition-all duration-500 group-hover/precip:scale-125",
            precipitation > 30 ? "text-blue-400" : "text-slate-600"
          )} />
          <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-300 transition-colors">{precipitation}%</span>
        </div>

        {/* Wind Column */}
        <div className="flex flex-col items-center gap-1 group/wind">
          <div className="relative">
             <Navigation2
              className="w-3 h-3 text-purple-400 transition-all duration-500 group-hover/wind:scale-125"
              style={{ transform: `rotate(${item.wind.deg}deg)` }}
            />
          </div>
          <span className="text-[10px] font-bold text-slate-400 group-hover:text-purple-300 transition-colors">{Math.round(item.wind.speed)}<span className="text-[8px] ml-0.5 opacity-50">mph</span></span>
        </div>
      </div>
    </div>
  );
}
