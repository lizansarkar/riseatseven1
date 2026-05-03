"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
    {
        title: "Chasing Consumers",
        image:
            "https://www.shutterstock.com/shutterstock/photos/733856020/display_1500/stock-vector-cartoon-fox-sneaking-off-with-a-chicken-in-his-hands-733856020.jpg",
        alt: "Chasing consumers collage",
    },
    {
        title: "Not Algorithms",
        image:
            "https://t3.ftcdn.net/jpg/17/12/07/84/360_F_1712078471_yMkw3OyHagIraJXuLxT2D5xpSb9f3OOq.jpg",
        alt: "Not algorithms collage",
    },
];

function MarqueeGroup() {
    return (
        <>
            {marqueeItems.map((item) => (
                <div
                    key={item.title}
                    className="js-marquee-item flex shrink-0 items-center gap-x-4 px-2 pb-3 lg:gap-x-10 lg:px-5 lg:pb-10 lg:pt-5"
                >
                    <h2 className="flex-1 text-balance text-left font-sans text-7xl font-medium leading-[0.9] tracking-tight text-neutral-950 md:text-7xl lg:pb-10 lg:text-8xl xl:text-[10rem]">
                        {item.title}
                    </h2>

                    <div className="relative aspect-square w-[20vw] shrink-0 overflow-hidden rounded-2xl md:w-[15vw] lg:mb-10 lg:w-[12vw] lg:rounded-3xl">
                        <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            sizes="(min-width: 1024px) 12vw, (min-width: 768px) 15vw, 20vw"
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            ))}
        </>
    );
}

export default function ChasingConsumersMarquee() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;

        if (!container || !track) return;

        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(".js-marquee-item");
            const half = items.length / 2;
            const firstSet = items.slice(0, half);
            const loopWidth = firstSet.reduce((total, item) => total + item.offsetWidth, 0);

            gsap.to(track, {
                x: -loopWidth,
                duration: loopWidth / 80,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x) => parseFloat(x) % loopWidth),
                },
            });

            ScrollTrigger.matchMedia({
                "(pointer: fine)": () => {
                    gsap.to(container, {
                        xPercent: -20,
                        ease: "none",
                        scrollTrigger: {
                            trigger: container,
                            start: "top 100%",
                            end: "bottom -100%",
                            scrub: true,
                        },
                    });
                },
                "(pointer: coarse)": () => {
                    gsap.set(container, { xPercent: 0 });
                },
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full bg-[#f4f4f2] py-0">
            <div className="w-full px-0">
                <Link
                    href="https://riseatseven.com/contact/"
                    aria-label="Send us your brief"
                    className="relative block w-full overflow-hidden"
                >
                    <div ref={containerRef} className="relative z-0 flex w-[120vw] overflow-hidden">
                        <div ref={trackRef} className="flex shrink-0 items-center will-change-transform">
                            <MarqueeGroup />
                            <MarqueeGroup />
                            <MarqueeGroup />
                            <MarqueeGroup />
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
