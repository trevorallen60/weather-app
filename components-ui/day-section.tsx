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
            <div className="flex items-center gap-4">
                <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-sky-400/80">
                    {dateLabel}
                </h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-sky-400/20 to-transparent" />
            </div>

            <div className="w-full px-2">
                <ForecastCarousel items={group.items} />
            </div>
        </section>
    );
}