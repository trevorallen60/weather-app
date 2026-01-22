import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500">
      
      <header className="relative py-12 text-center flex flex-col items-center">
        <Skeleton className="h-6 w-24 rounded-full bg-white/5 mb-4" />
        
        <Skeleton className="h-16 w-64 md:w-96 bg-white/10 rounded-2xl mb-4" />
        
        <Skeleton className="h-6 w-48 bg-white/5 rounded-lg" />

        <div className="mt-12 w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      <div className="space-y-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-8 w-32 bg-white/10 rounded-lg ml-2" />
            
            <div className="flex gap-4 overflow-hidden">
              {[1, 2, 3, 4, 5].map((j) => (
                <div key={j} className="min-w-[150px] md:min-w-[180px] space-y-3">
                  <Skeleton className="h-[220px] w-full rounded-2xl bg-white/[0.03] border border-white/5" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}