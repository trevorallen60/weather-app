'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react'; // Install lucide-react if you haven't
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SearchBar() {
  const [zip, setZip] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (zip.length === 5) {
      router.push(`/weather/${zip}`);
    }
  };

  return (
    <div className="w-full max-w-md group">
      <form 
        onSubmit={handleSearch} 
        className={cn(
          "flex items-center gap-2 p-1 transition-all duration-300 ease-in-out rounded-xl",
        )}
      >
        <div className="relative flex-1">
          <Search className={cn(
            "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200",
            isFocused ? "text-sky-400" : "text-slate-400"
          )} />
          <Input
            type="text"
            placeholder="Search US Zip Code..."
            className={cn("bg-transparent border-none pl-10 text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0 h-11",
            )}
            value={zip}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, ''))} // Dumb UX: Only allow numbers
            maxLength={5}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={zip.length !== 5}
          className={cn(
            "rounded-lg px-6 transition-all duration-200 active:scale-95 font-medium hover:pointer",
            "bg-sky-500 hover:bg-sky-400 text-white shadow-sm shadow-sky-500/20",
            "disabled:opacity-90 disabled:bg-slate-700 disabled:cursor-not-allowed"
          )}
        >
          Explore
        </Button>
      </form>
      
      <p className={cn(
        "text-xs mt-2 ml-2 transition-opacity duration-300 text-slate-400",
        isFocused ? "opacity-100" : "opacity-0"
      )}>
        Press <kbd className="font-sans border border-slate-500 rounded px-1">Enter</kbd> to search
      </p>
    </div>
  );
}