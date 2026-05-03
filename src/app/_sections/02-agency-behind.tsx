"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const logos = [
    {
        name: "SHEIN",
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5338&fp-y=0.5169&dm=1777373493&s=ead6719eb9ced22d7329aa45ffe821b2",
    },
    {
        name: "Revolution Beauty London",
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=71aa353fd484873a7b62b12467712f57",
    },
    {
        name: "PlayStation",
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/playstation-logo.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint",
    },
    {
        name: "AXA",
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/axa-logo.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint",
    },
    {
        name: "Emirates",
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/emirates-logo.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint",
    },
    {
        name: "Red Bull",
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1754645714&s=dce5e3e2020297d85adf0de6d8426157",
    },
];

export default function AgencyBehind() {
    return (
        <section className="w-full bg-[#f4f4f2] py-6 xl:py-12">
            <div className="w-full px-4 md:px-7">
                <div className="grid w-full grid-cols-1 gap-y-2 md:grid-cols-[minmax(120px,14%)_1fr]">
                    <div className="flex items-center">
                        <h2 className="max-w-32 text-balance text-left font-sans text-sm font-medium leading-tight tracking-tight text-neutral-950">
                            The agency behind ...
                        </h2>
                    </div>

                    <div className="relative w-full overflow-hidden">
                        <Swiper
                            modules={[Autoplay]}
                            loop
                            speed={7000}
                            allowTouchMove={false}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            slidesPerView={2.2}
                            spaceBetween={56}
                            breakpoints={{
                                640: { slidesPerView: 3.2, spaceBetween: 72 },
                                768: { slidesPerView: 4, spaceBetween: 88 },
                                1024: { slidesPerView: 5, spaceBetween: 104 },
                                1280: { slidesPerView: 6, spaceBetween: 120 },
                            }}
                            className="w-full overflow-visible [&_.swiper-wrapper]:ease-linear!"
                        >
                            {[...logos, ...logos].map((logo, index) => (
                                <SwiperSlide key={`${logo.name}-${index}`} className="!flex items-center justify-center">
                                    <div className="relative h-16 w-28 py-5 lg:w-32">
                                        <Image
                                            src={logo.src}
                                            alt={`${logo.name} logo`}
                                            fill
                                            sizes="(min-width: 1280px) 8vw, (min-width: 1024px) 10vw, (min-width: 768px) 14vw, 28vw"
                                            className="object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f4f4f2] to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f4f4f2] to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
