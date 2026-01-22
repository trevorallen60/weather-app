import { DayGroup } from "../utils/weather-helpers";
import ForecastCarousel from "./forecast-carousel";


export default function DaySection({ group }: { group: DayGroup }) {
    const dateLabel = new Date(group.date).toLocaleDateString(undefined, {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
    });

    return (
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm uppercase tracking-[0.25em] font-black cosmic-gradient bg-clip-text text-transparent">
                    {dateLabel}
                </h3>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-500/40 via-orange-500/30 to-transparent rounded-full" />
            </div>

            <div className="w-full px-2">
                <ForecastCarousel items={group.items} />
            </div>
        </section>
    );
}
