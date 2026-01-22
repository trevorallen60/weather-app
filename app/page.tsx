import { CloudSun, Wind, Droplets, Sparkles, Zap, CloudRain } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">

      <main className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Badge with enhanced animation */}
        <div
          className="mb-12 flex justify-center animate-in fade-in slide-in-from-top-4 duration-1000"
          style={{ animationDelay: '0ms' }}
        >
          <span className="glass-card rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase cosmic-gradient bg-clip-text text-transparent border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.3)] animate-scale-pulse relative overflow-hidden">
            <span className="relative z-10">Live Satellite Data</span>
            <Sparkles className="inline-block w-3 h-3 ml-2 animate-pulse text-orange-400" />
          </span>
        </div>

        {/* Main heading with staggered word animation */}
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-10">
          <div
            className="animate-in fade-in slide-in-from-bottom-6 duration-1000"
            style={{ animationDelay: '200ms' }}
          >
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Know Your
            </span>
          </div>
          <div
            className="animate-in fade-in slide-in-from-bottom-8 duration-1000 mt-2"
            style={{ animationDelay: '400ms' }}
          >
            <span className="cosmic-gradient bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(139,92,246,0.5)] inline-block animate-float">
              Atmosphere.
            </span>
          </div>
        </h1>

        {/* Description with shimmer effect */}
        <p
          className="mx-auto max-w-2xl text-xl md:text-2xl leading-relaxed text-slate-300 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 font-light"
          style={{ animationDelay: '600ms' }}
        >
          Hyper-local <span className="text-purple-400 font-semibold">5-day forecasts</span> with{" "}
          <span className="text-orange-400 font-semibold">3-hour precision</span>.
          <br className="hidden md:block" />
          Experience weather data through a <span className="cosmic-gradient bg-clip-text text-transparent font-semibold">minimalist, high-fidelity lens</span>.
        </p>

        {/* Feature cards with hover effects */}
        <div
          className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16 animate-in fade-in duration-1000"
          style={{ animationDelay: '800ms' }}
        >
          <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3 group transition-all duration-500 hover:scale-110">
            <div className="relative">
              <CloudSun className="w-5 h-5 text-orange-400 group-hover:rotate-180 transition-transform duration-700" />
              <div className="absolute inset-0 bg-orange-400/20 blur-xl group-hover:blur-2xl transition-all" />
            </div>
            <span className="text-slate-200 font-semibold">Visual Forecasts</span>
          </div>

          <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3 group transition-all duration-500 hover:scale-110">
            <div className="relative">
              <Wind className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-700" />
              <div className="absolute inset-0 bg-purple-400/20 blur-xl group-hover:blur-2xl transition-all" />
            </div>
            <span className="text-slate-200 font-semibold">Real-time Wind</span>
          </div>

          <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3 group transition-all duration-500 hover:scale-110">
            <div className="relative">
              <Droplets className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-blue-400/20 blur-xl group-hover:blur-2xl transition-all" />
            </div>
            <span className="text-slate-200 font-semibold">Precipitation</span>
          </div>
        </div>

        {/* Additional features with icons */}
        <div
          className="flex justify-center gap-8 text-slate-500 text-sm animate-in fade-in duration-1000"
          style={{ animationDelay: '1000ms' }}
        >
          <div className="flex items-center gap-2 group">
            <Zap className="w-4 h-4 text-yellow-400/70 group-hover:text-yellow-400 transition-colors animate-pulse" />
            <span>Lightning Fast</span>
          </div>
          <div className="flex items-center gap-2 group">
            <CloudRain className="w-4 h-4 text-blue-400/70 group-hover:text-blue-400 transition-colors animate-pulse" />
            <span>Accurate Data</span>
          </div>
          <div className="flex items-center gap-2 group">
            <Sparkles className="w-4 h-4 text-purple-400/70 group-hover:text-purple-400 transition-colors animate-pulse" />
            <span>Beautiful UI</span>
          </div>
        </div>
      </main>

      {/* Enhanced central glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-pink-500/10 rounded-full blur-[150px] -z-10 animate-pulse-glow" />

      {/* Rotating gradient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border-2 border-purple-500/10 -z-10 animate-rotate-slow" />

      <footer
        className="absolute bottom-12 flex flex-col items-center gap-4 text-slate-600 animate-in fade-in duration-1000"
        style={{ animationDelay: '1200ms' }}
      >
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          Powered by OpenWeather API
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
        </p>
      </footer>
    </div>
  );
}
