import { CloudSun, Wind, Droplets } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      
      <main className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        <div className="mb-10 flex justify-center animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="glass rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-sky-400 border-sky-500/20 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
            Live Satellite Data
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Know Your <br /> 
          <span className="bg-gradient-to-b from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Atmosphere.
          </span>
        </h1>
        
        <p className="mx-auto max-w-xl text-lg md:text-xl leading-relaxed text-slate-400 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          Hyper-local 5-day forecasts with 3-hour precision. 
          Experience weather data through a minimalist, high-fidelity lens.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-slate-500 font-medium text-sm mb-12 animate-in fade-in duration-1000 delay-500">
          <div className="flex items-center gap-2">
            <CloudSun className="w-4 h-4 text-sky-500/50" />
            <span>Visual Forecasts</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-sky-500/50" />
            <span>Real-time Wind</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-sky-500/50" />
            <span>Precipitation</span>
          </div>
        </div>
      </main>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-sky-500/5 rounded-full blur-[120px] -z-10" />

      <footer className="absolute bottom-12 flex flex-col items-center gap-4 text-slate-600 animate-in fade-in duration-1000 delay-700">
        <div className="h-px w-12 bg-white/10" />
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold">
          Powered by OpenWeather API
        </p>
      </footer>
    </div>
  );
}