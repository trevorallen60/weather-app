"use client";
import { CloudOff, MapPinOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-500">
      
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-amber-500/20 blur-[60px] rounded-full animate-pulse" />
        <div className="relative glass p-8 rounded-full border-amber-500/20">
          <CloudOff className="w-16 h-16 text-amber-400/80" />
          <MapPinOff className="absolute -bottom-2 -right-2 w-8 h-8 text-slate-500" />
        </div>
      </div>

      <div className="text-center space-y-4 max-w-sm">
        <h2 className="text-3xl font-black tracking-tighter text-white">
          Location Lost
        </h2>
        <p className="text-slate-400 font-medium leading-relaxed">
          We couldn't find a weather report for that zip code. It might be outside our radar or mistyped.
        </p>
      </div>

      <div className="mt-10">
        <Link href="/">
          <Button 
            variant="outline" 
            className="glass border-white/10 hover:bg-white/10 text-white rounded-xl px-8 h-12 transition-all active:scale-95 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Search
          </Button>
        </Link>
      </div>

      {/* Subtle Background Detail */}
      <div className="mt-20 opacity-20">
        <div className="text-[10rem] font-black text-white/5 select-none leading-none">
          404
        </div>
      </div>
    </div>
  );
}