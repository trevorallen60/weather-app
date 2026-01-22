'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ForecastItem } from "../types/weather";
import ForecastCard from "./forecast-card";

interface ForecastCarouselProps {
  items: ForecastItem[];
}

export default function ForecastCarousel({ items }: ForecastCarouselProps) {
  return (
    <div className="w-full relative px-1 md:px-0 overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => (
            <CarouselItem
              key={item.dt}
              className="pl-2 md:pl-4 basis-[40%] sm:basis-1/4 md:basis-1/4 lg:basis-1/6"
            >
              <div className="h-full py-4">
                <ForecastCard item={item} index={index} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="block md:block">
          <CarouselPrevious className="-left-12 h-10 w-10" />
          <CarouselNext className="-right-12 h-10 w-10" />
        </div>
      </Carousel>
    </div>
  );
}