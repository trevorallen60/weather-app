import SearchBar from "./search-bar";

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full">
            <div className="">
                <div className="glass border-none!  px-6 py-3 flex items-start justify-between gap-8">

                    <div className="flex items-center gap-3 shrink-0 py-3">
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:to-sky-400 transition-all">              WeatherCast
                        </h1>
                    </div>

                    <div className="flex-1 max-w-md">
                        <SearchBar />
                    </div>

                </div>
            </div>
        </nav>
    );
};