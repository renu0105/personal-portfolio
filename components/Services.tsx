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
import Image from "next/image";

const Services = () => {
  return (
    <section className="pt-20 min-h-screen scroll-mt-28 space-y-4">
      <h1 className="text-4xl font-bold text-[#956549] text-center">
        Services
      </h1>
      <p className="text-center text-xl font-sans">
        I offer a range of services that bring your ideas to life through
        modern, responsive, and scalable web solutions.
      </p>
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
              <div className="bg-[#D5BFA3] border border-[#956549] p-6 space-y-4 h-full rounded-xl shadow-md mx-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={300}
                  className="text-center w-full lg:h-80 h-60 rounded-2xl object-center"
                />
                <div className="flex flex-row gap-2 items-center">
                  <service.icon size={32} className="text-[#956549]" />
                  <h1 className="font-semibold text-xl text-[#956549]">
                    {service.title}
                  </h1>
                </div>
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
