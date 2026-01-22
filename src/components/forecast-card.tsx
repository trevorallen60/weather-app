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
        "flex flex-col items-center justify-between p-4 min-w-[140px] h-[240px]",
        "glass rounded-3xl transition-all duration-500 ease-out",
        "hover:bg-white/[0.08] hover:-translate-y-2 hover:border-white/40 group",
        "animate-in fade-in zoom-in-95 fill-mode-both"
      )}
    >
      {/* Time Header */}
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-sky-400 transition-colors">
        {time}
      </span>

      {/* Weather Icon with Glow */}
      <div className="relative my-2">
        <div className="absolute inset-0 bg-sky-400/10 blur-2xl rounded-full group-hover:bg-sky-400/20 transition-colors" />
        <img 
          src={getWeatherIconUrl(item.weather[0].icon)}
          alt={item.weather[0].description}
          className="relative w-16 h-16 object-contain drop-shadow-md scale-110"
        />
      </div>

      {/* Main Temp & Description */}
      <div className="text-center">
        <span className="text-3xl font-black tracking-tighter text-white">
          {Math.round(item.main.temp)}°
        </span>
        <p className="text-[10px] font-bold text-slate-500 capitalize mt-0.5">
          {item.weather[0].main}
        </p>
      </div>

      {/* Data Grid - Wind & Precipitation */}
      <div className="w-full pt-3 mt-2 border-t border-white/5 grid grid-cols-2 gap-2">
        {/* Precipitation Column */}
        <div className="flex flex-col items-center gap-1">
          <Droplets className={cn(
            "w-3 h-3 transition-colors",
            precipitation > 30 ? "text-sky-400" : "text-slate-600"
          )} />
          <span className="text-[10px] font-bold text-slate-400">{precipitation}%</span>
        </div>

        {/* Wind Column */}
        <div className="flex flex-col items-center gap-1">
          <div className="relative">
             <Navigation2 
              className="w-3 h-3 text-sky-500/70" 
              style={{ transform: `rotate(${item.wind.deg}deg)` }} 
            />
          </div>
          <span className="text-[10px] font-bold text-slate-400">{Math.round(item.wind.speed)}<span className="text-[8px] ml-0.5 opacity-50">mph</span></span>
        </div>
      </div>
    </div>
  );
}