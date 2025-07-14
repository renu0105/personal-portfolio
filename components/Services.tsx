"use client";
import { service } from "@/lib/data";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Services = () => {
  return (
    <section className="py-10">
      <p className="text-4xl mb-8 font-bold text-[#956549]">Services</p>

      <Carousel
        className="w-full"
        plugins={[Autoplay({ delay: 3000 })]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {service.map((service, index) => (
            <CarouselItem
              key={index}
              className="snap-start shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 px-2"
            >
              <div className="bg-[#D5BFA3] border border-[#956549] p-6 space-y-4 h-96 rounded-xl shadow-md">
                <service.icon size={32} className="text-[#956549]" />
                <h1 className="font-semibold text-xl text-[#956549]">
                  {service.title}
                </h1>
                <p>{service.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="bg-[#D5BFA3] h-12 w-12 font-bold border border-[#956549]"
          aria-label="Previous slide"
        />
        <CarouselNext
          className="bg-[#D5BFA3] h-12 w-12 font-bold border border-[#956549]"
          aria-label="Next slide"
        />
      </Carousel>
    </section>
  );
};

export default Services;
