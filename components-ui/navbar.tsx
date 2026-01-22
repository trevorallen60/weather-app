import SearchBar from "./search-bar";
import { CloudSun } from "lucide-react";

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-xl">
            <div className="mx-auto">
                <div className="glass-card border-none px-6 py-4 flex items-center justify-between gap-8 transition-all duration-500">

                    <div className="flex items-center gap-4 shrink-0 group cursor-pointer">
                        <div className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-br from-purple-500 to-orange-500 animate-pulse"></span>
                        </div>

                        <div className="relative overflow-hidden">
                            <CloudSun className="w-6 h-6 text-orange-400 animate-rotate-slow absolute -left-8 opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-700" />
                            <h1 className="text-xl font-bold tracking-tight cosmic-gradient bg-clip-text text-transparent transition-all duration-500 group-hover:pl-8">
                                WeatherCast
                            </h1>
                        </div>
                    </div>

                    <div className="flex-1 max-w-md animate-slide-up-fade">
                        <SearchBar />
                    </div>

                </div>
            </div>
        </nav>
    );
};
