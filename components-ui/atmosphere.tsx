export const Atmosphere = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
    {/* Primary purple orb - top left */}
    <div
      className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 animate-float animate-morph animate-pulse-glow"
      style={{
        animationDelay: '0s',
        filter: 'blur(100px)',
        willChange: 'transform, filter, opacity'
      }}
    />

    {/* Secondary orange orb - top right */}
    <div
      className="absolute -top-[15%] -right-[15%] w-[45%] h-[45%] rounded-full bg-orange-500/25 animate-float animate-morph animate-pulse-glow"
      style={{
        animationDelay: '2s',
        animationDuration: '7s',
        filter: 'blur(110px)',
        willChange: 'transform, filter, opacity'
      }}
    />

    {/* Tertiary purple orb - middle */}
    <div
      className="absolute top-[40%] left-[30%] w-[35%] h-[35%] rounded-full bg-violet-500/20 animate-float animate-morph animate-pulse-glow"
      style={{
        animationDelay: '4s',
        animationDuration: '9s',
        filter: 'blur(120px)',
        willChange: 'transform, filter, opacity'
      }}
    />

    {/* Bottom left accent - pink/red */}
    <div
      className="absolute -bottom-[10%] -left-[15%] w-[40%] h-[40%] rounded-full bg-pink-600/20 animate-float animate-morph animate-pulse-glow"
      style={{
        animationDelay: '1.5s',
        animationDuration: '8s',
        filter: 'blur(130px)',
        willChange: 'transform, filter, opacity'
      }}
    />

    {/* Bottom right accent - amber */}
    <div
      className="absolute bottom-[10%] -right-[10%] w-[38%] h-[38%] rounded-full bg-amber-500/18 animate-float animate-morph animate-pulse-glow"
      style={{
        animationDelay: '3s',
        animationDuration: '10s',
        filter: 'blur(115px)',
        willChange: 'transform, filter, opacity'
      }}
    />

    {/* Center floating orb */}
    <div
      className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full bg-indigo-500/15 animate-float animate-morph animate-pulse-glow"
      style={{
        animationDelay: '5s',
        animationDuration: '11s',
        filter: 'blur(140px)',
        willChange: 'transform, filter, opacity'
      }}
    />

    {/* Subtle grain overlay for depth */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}
    />
  </div>
);
