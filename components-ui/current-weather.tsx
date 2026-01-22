import { ForecastItem } from "@/types/weather";
import { Wind, Droplets, CloudRain, Navigation2, Thermometer } from "lucide-react";
import { getWeatherIconUrl } from "../utils/weather-helpers";
import { cn } from "@/lib/utils";

interface CurrentWeatherProps {
  data: ForecastItem;
  city: string;
}

export default function CurrentWeather({ data, city }: CurrentWeatherProps) {
  const rainChance = Math.round(data.pop * 100);

  return (
    <section className="relative overflow-hidden glass rounded-[2.5rem] p-8 md:p-12 mb-12 border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-6 duration-700">
      
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-sky-400">
              Current Conditions
            </span>
          </div>
          
          <h2 className="text-2xl font-bold text-white/70 tracking-tight">{city}</h2>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="text-8xl md:text-9xl font-black text-white tracking-tighter drop-shadow-xl">
              {Math.round(data.main.temp)}°
            </span>
            <div className="relative group">
               <div className="absolute inset-0 bg-sky-400/20 blur-3xl rounded-full animate-pulse" />
               <img 
                src={getWeatherIconUrl(data.weather[0].icon)}
                alt={data.weather[0].description}
                className="relative w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-3">
             <p className="text-2xl text-slate-300 capitalize font-medium tracking-tight">
              {data.weather[0].description}
            </p>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Thermometer className="w-4 h-4 text-orange-400/70" />
              <span className="text-sm font-semibold">Feels like {Math.round(data.main.feels_like)}°</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 md:pl-12 md:border-l border-white/5">
          
          <div className="flex flex-col items-center p-4 rounded-3xl bg-white/[0.02] border border-white/5 transition-colors hover:bg-white/[0.05]">
            <div className="relative mb-3">
              <Navigation2 
                className="w-5 h-5 text-sky-400" 
                style={{ transform: `rotate(${data.wind.deg}deg)` }}
              />
            </div>
            <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Wind</span>
            <span className="text-lg font-bold text-white">{Math.round(data.wind.speed)} <span className="text-xs text-slate-500">mph</span></span>
          </div>
          
          <div className="flex flex-col items-center p-4 rounded-3xl bg-white/[0.02] border border-white/5 transition-colors hover:bg-white/[0.05]">
            <Droplets className="w-5 h-5 text-sky-400 mb-3" />
            <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Humidity</span>
            <span className="text-lg font-bold text-white">{data.main.humidity}%</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-3xl bg-white/[0.02] border border-white/5 transition-colors hover:bg-white/[0.05]">
            <CloudRain className={cn(
              "w-5 h-5 mb-3",
              rainChance > 0 ? "text-sky-400" : "text-slate-600"
            )} />
            <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Precip.</span>
            <span className="text-lg font-bold text-white">{rainChance}%</span>
          </div>
          
        </div>

      </div>
    </section>
  );
}