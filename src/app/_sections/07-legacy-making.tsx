"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        title: "Pioneers",
        bg: "bg-black",
        text: "text-white",
        rotate: 4,
        image:
            "https://i.pinimg.com/736x/34/9a/d7/349ad76a0e10303425a7115f01f9ac84.jpg",
        alt: "Pioneers",
        body: [
            "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
            "We’re on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
        ],
    },
    {
        title: "Award Winning",
        bg: "bg-[#cff6de]",
        text: "text-neutral-950",
        rotate: 8,
        image:
            "https://img.freepik.com/premium-vector/pair-cute-animals-love-fox-hugs-chicken-vector-illustration_732054-446.jpg",
        alt: "Award Winning",
        body: [
            "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
        ],
    },
    {
        title: "Speed",
        bg: "bg-white",
        text: "text-neutral-950",
        rotate: 12,
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=1200&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=fcd852553577704c1299945293bb882d",
        alt: "Speed",
        body: [
            "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.",
        ],
    },
];

function LegacyCard({ card }: { card: (typeof cards)[number] }) {
    return (
        <div
            className={`grid w-full flex-col rounded-2xl p-7 text-center lg:aspect-square lg:items-center lg:rounded-3xl xl:px-14 xl:py-10 ${card.bg}`}
        >
            <div className="col-start-1 row-start-1 flex flex-col gap-y-3 text-center md:gap-y-5 lg:items-center">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl lg:aspect-square lg:w-48 lg:rounded-2xl 4xl:w-56">
                    <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(min-width: 1536px) 224px, (min-width: 1024px) 192px, 100vw"
                        className="object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="flex flex-col items-center gap-y-4">
                    <h2 className={`text-balance text-center text-3xl font-medium leading-none tracking-tight lg:text-5xl xl:text-6xl 3xl:text-7xl 3xl:leading-[0.9] ${card.text}`}>
                        {card.title}
                    </h2>

                    <div className={`w-full ${card.text}`}>
                        {card.body.map((paragraph) => (
                            <p key={paragraph} className="mb-5 text-pretty text-sm leading-normal last:mb-0 lg:text-base">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function LegacyMakingSection() {
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const trigger = triggerRef.current;
        if (!trigger) return;

        const ctx = gsap.context(() => {
            gsap.to(itemRefs.current.filter(Boolean), {
                yPercent: -100,
                rotate: -50,
                stagger: 1,
                ease: "power2.inOut",
                duration: 3,
                scrollTrigger: {
                    trigger,
                    start: "top 30%",
                    end: "bottom -50%",
                    scrub: true,
                },
            });
        }, trigger);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full bg-[#f4f4f2] py-0">
            <div className="w-full px-0">
                <div className="w-full px-4 py-10 md:px-7 lg:hidden">
                    <div className="mb-3 flex justify-center">
                        <h2 className="text-balance text-left text-base font-medium leading-tight tracking-tight text-neutral-950 lg:text-lg xl:text-xl 4xl:text-2xl 4xl:leading-none">
                            Legacy In The Making
                        </h2>
                    </div>

                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={15}
                        loop
                        speed={700}
                        breakpoints={{
                            640: { slidesPerView: 1.55 },
                        }}
                        pagination={{
                            el: ".legacy-making-pagination",
                            type: "progressbar",
                        }}
                        className="w-full [&_.swiper-wrapper]:ease-out"
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.title} className="!flex !h-auto">
                                <LegacyCard card={card} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="relative mt-3 w-full">
                        <div className="legacy-making-pagination swiper-pagination-progressbar h-px! bg-neutral-300! [&_.swiper-pagination-progressbar-fill]:bg-neutral-950!" />
                    </div>
                </div>

                <div ref={triggerRef} className="relative hidden h-[300vh] w-full lg:flex">
                    <div className="sticky left-0 top-0 h-screen w-full overflow-hidden">
                        <div className="absolute left-0 top-0 mt-10 flex w-full justify-center 3xl:mt-16">
                            <h2 className="text-balance text-left text-lg font-medium leading-tight tracking-tight text-neutral-950 xl:text-xl 4xl:text-2xl 4xl:leading-none">
                                Legacy In The Making
                            </h2>
                        </div>

                        {cards.map((card, index) => (
                            <div
                                key={card.title}
                                ref={(element) => {
                                    itemRefs.current[index] = element;
                                }}
                                className="absolute left-0 top-8 flex h-full w-full items-center justify-center will-change-transform"
                                style={{ zIndex: cards.length - index }}
                            >
                                <div className="w-full max-w-lg xl:max-w-xl 4xl:max-w-2xl" style={{ transform: `rotate(${card.rotate}deg)` }}>
                                    <LegacyCard card={card} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
