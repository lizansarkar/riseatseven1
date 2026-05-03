"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChartNoAxesCombined, Search } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type WorkItem = {
    id: number;
    title: string;
    years: string;
    href: string;
    category?: string;
    stat: string;
    colour: string;
    image: string;
    imageAlt: string;
};

const workItems: WorkItem[] = [
    {
        id: 8366,
        title: "SIXT",
        years: "2023-2025",
        href: "#",
        category: "Car rental",
        stat: "An extra 3m clicks regionally through SEO",
        colour: "#cb7b3a",
        image:
            "https://img.freepik.com/premium-photo/fox-hen-cuddling-barn_1260728-18785.jpg?w=360",
        imageAlt: "SIXT case study",
    },
    {
        id: 7670,
        title: "Dojo - B2B",
        years: "2021-2025",
        href: "#",
        category: "Card Machines",
        stat: "A B2B success story for Dojo card machines",
        colour: "#fdd8c4",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=a58aad241c378704b95fc931da4d4614",
        imageAlt: "Dojo card machine product shot",
    },
    {
        id: 19708,
        title: "Magnet Trade - B2B",
        years: "2023-2024",
        href: "#",
        stat: "A full service SEO success story 170%+ increase",
        colour: "#d8c4fd",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=7398d248a91f5f5fb8cfa4cebdbd0abc",
        imageAlt: "Magnet Trade case study screenshot",
    },
    {
        id: 16982,
        title: "Leading E Sim brand globally",
        years: "2023-2025",
        href: "#",
        category: "Esims",
        stat: "Increasing brand and non brand visibility UK/ES",
        colour: "#cb7b3a",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=6884fe858f0f62041177a15578077f6a",
        imageAlt: "eSIM case study image",
    },
    {
        id: 17067,
        title: "JD Sports",
        years: "2025",
        href: "#",
        category: "Trainers",
        stat: "65% up YoY in clicks for JDSports FR, IT, ES",
        colour: "#3a8ccb",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=96ad9016c5b9fc1ca4f68f64edfd2a13",
        imageAlt: "JD Sports case study image",
    },
    {
        id: 8221,
        title: "Parkdean Resorts",
        years: "2019-2025",
        href: "#",
        category: "Easter Breaks",
        stat: "Dominating Google and AI search",
        colour: "#d2b59d",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=5c4955fc5f6fb648616a34d4b460283a",
        imageAlt: "Parkdean Resorts Easter breaks",
    },
    {
        id: 301,
        title: "Pooky",
        years: "2025",
        href: "#",
        category: "Rechargeable Lights",
        stat: "Driving demand for Pooky Rechargeable Lights",
        colour: "#39b0bd",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=2d5c0ed6a14be7af0ef2603e5310e3c4",
        imageAlt: "Pooky rechargeable lights",
    },
    {
        id: 11781,
        title: "Parkdean Resorts",
        years: "2019-2025",
        href: "#",
        category: "UK holidays",
        stat: "Social search and multi channel content to #1",
        colour: "#d29dd0",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=de4db6ccda581beedbd354ecc6ce3c40",
        imageAlt: "Parkdean Resorts social search",
    },
    {
        id: 27,
        title: "Revolution Beauty",
        years: "2022-2025",
        href: "#",
        category: "Beauty Dupes",
        stat: "Building the UK's leading beauty dupe brand",
        colour: "#fecacc",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=2ba167fd30db107ee2ee4fe9762131db",
        imageAlt: "Revolution Beauty case study screenshot",
    },
    {
        id: 297,
        title: "Lloyds Pharmacy",
        years: "2022-23",
        href: "#",
        category: "STI tests",
        stat: "Driving category leadership for STI tests",
        colour: "#60dcfb",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=1c4bb65d7aafa9054370ab42e1ed5acb",
        imageAlt: "Lloyds Pharmacy case study screenshot",
    },
    {
        id: 8004,
        title: "PrettyLittleThing",
        years: "2021-2023",
        href: "#",
        category: "Outfits",
        stat: 'Driving discovery for everything "outfits" for PLT',
        colour: "#fecacc",
        image:
            "https://png.pngtree.com/png-vector/20240907/ourmid/pngtree-happy-cartoon-hen-with-eggs-clip-art-illustration-png-image_13776611.png",
        imageAlt: "PrettyLittleThing case study screenshot",
    },
];

function Pill({ label, inverse = false }: { label?: string; inverse?: boolean }) {
    if (!label) return null;

    return (
        <div
            className={`inline-flex shrink-0 items-center gap-x-3 rounded-full px-3.5 py-2.5 text-sm font-medium leading-none tracking-tight backdrop-blur-sm lg:text-base ${inverse ? "bg-white/15 text-current" : "bg-white/20 text-white"
                }`}
        >
            <Search className="size-4" aria-hidden="true" />
            <span>{label}</span>
            <ChartNoAxesCombined className="size-4" aria-hidden="true" />
        </div>
    );
}

function WorkCard({
    item,
    active,
    setActive,
}: {
    item: WorkItem;
    active: number | null;
    setActive: (id: number | null) => void;
}) {
    const isActive = active === item.id;

    return (
        <Link
            href={item.href}
            onMouseEnter={() => setActive(item.id)}
            onMouseLeave={() => setActive(null)}
            className="group relative mb-5 grid overflow-hidden rounded-2xl lg:mb-7"
        >
            <div className="col-start-1 row-start-1 transition duration-500 group-hover:scale-105">
                <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 1536px) 42vw, (min-width: 1024px) 48vw, 100vw"
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="z-30 col-start-1 row-start-1 flex items-start justify-end p-3 lg:items-end lg:p-5">
                <Pill label={item.category} />
            </div>

            <div className="relative z-30 col-start-1 row-start-1 flex items-end justify-start p-3 lg:hidden">
                <div className="relative z-20 grid gap-y-1">
                    <div className="mt-2 text-xs font-medium text-white">[{item.years}]</div>
                    <h3 className="text-balance text-3xl font-medium leading-none tracking-tight text-white">
                        {item.title}
                    </h3>
                </div>
                <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-linear-to-t from-black opacity-70" />
            </div>

            <div
                className={`z-40 col-start-1 row-start-1 flex flex-col items-start justify-between p-3 text-neutral-950 transition duration-300 lg:p-5 ${isActive ? "opacity-100" : "opacity-0"
                    }`}
                style={{ backgroundColor: item.colour }}
            >
                <h3 className="text-balance text-3xl font-medium leading-none tracking-tight text-current lg:text-4xl xl:text-5xl 3xl:text-6xl">
                    {item.stat}
                </h3>
                <div className="flex w-full items-end justify-between">
                    <div className="w-8 lg:w-24" />
                    <Pill label={item.category} inverse />
                </div>
            </div>
        </Link>
    );
}

function AnimatedButton() {
    return (
        <Link
            href="https://riseatseven.com/work/"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-x-2 overflow-hidden rounded-3xl border border-transparent bg-white px-6 py-3 text-base font-medium leading-tight tracking-tight text-neutral-950 ring-neutral-950/5 transition-all hover:rounded-xl focus:outline-none focus:ring-3 md:w-auto"
        >
            <span className="relative overflow-hidden">
                <span className="flex items-center gap-x-2 transition-transform duration-300 group-hover:-translate-y-6">
                    <span>Explore Our Work</span>
                    <ArrowUpRight className="mt-1 size-3" aria-hidden="true" />
                </span>
                <span className="absolute left-0 top-0 flex translate-y-6 items-center gap-x-2 transition-transform duration-300 group-hover:translate-y-0">
                    <span>Explore Our Work</span>
                    <ArrowUpRight className="mt-1 size-3" aria-hidden="true" />
                </span>
            </span>
        </Link>
    );
}

export default function FeaturedWork() {
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const imagesRef = useRef<HTMLDivElement | null>(null);
    const headingsContainerRef = useRef<HTMLDivElement | null>(null);
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [active, setActive] = useState<number | null>(null);

    useEffect(() => {
        const trigger = triggerRef.current;
        const images = imagesRef.current;
        const headingsContainer = headingsContainerRef.current;

        if (!trigger || !images || !headingsContainer) return;

        const ctx = gsap.context(() => {
            const setup = () => {
                const windowHeight = window.innerHeight;
                const imageTravel = Math.max(images.offsetHeight - windowHeight, 0);
                const touchTravel = Math.max(images.offsetHeight - windowHeight * 1.1, 0);

                gsap.set(trigger, { height: images.offsetHeight });

                ScrollTrigger.matchMedia({
                    "(pointer: fine)": () => {
                        gsap.to(images, {
                            y: -imageTravel,
                            ease: "none",
                            scrollTrigger: {
                                trigger,
                                start: "top top",
                                end: `+=${imageTravel}`,
                                scrub: true,
                            },
                        });
                    },
                    "(pointer: coarse)": () => {
                        gsap.to(images, {
                            y: -touchTravel,
                            ease: "none",
                            scrollTrigger: {
                                trigger,
                                start: "top top",
                                end: `+=${touchTravel}`,
                                scrub: true,
                                pin: true,
                            },
                        });
                    },
                });

                const headingsTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger,
                        start: "top top",
                        end: `+=${imageTravel}`,
                        scrub: true,
                    },
                });

                headingRefs.current.forEach((heading) => {
                    if (!heading) return;

                    headingsTimeline.fromTo(
                        heading,
                        { y: 150 },
                        {
                            y: headingsContainer.offsetHeight * -1 + 300,
                            duration: 4,
                            ease: "none",
                        },
                        0,
                    );
                });
            };

            setup();
            window.addEventListener("resize", () => ScrollTrigger.refresh());

            return () => window.removeEventListener("resize", () => ScrollTrigger.refresh());
        }, trigger);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full bg-[#f4f4f2] pb-12 xl:pb-24">
            <div className="w-full px-4 md:px-7">
                <div ref={triggerRef} className="relative -my-7 flex w-full overflow-hidden lg:overflow-visible">
                    <div className="top-0 h-[110svh] w-full py-7 lg:sticky lg:h-screen">
                        <div className="grid h-full w-full grid-cols-12 overflow-hidden rounded-3xl bg-neutral-950 px-5 lg:px-8 xl:px-10">
                            <div className="relative col-span-12 hidden items-start lg:col-span-6 lg:flex lg:h-[96svh] lg:flex-row lg:items-center">
                                <div className="relative z-10 flex h-full flex-col items-start pt-16 lg:gap-y-20 lg:pb-32 lg:pt-24">
                                    <h2 className="text-balance text-left text-base font-medium leading-tight tracking-tight text-white lg:text-lg xl:text-xl 4xl:text-2xl 4xl:leading-none">
                                        Featured Work
                                    </h2>

                                    <div className="relative hidden flex-1 overflow-hidden pr-5 lg:inline-block">
                                        <div className="pointer-events-none absolute left-0 top-0 z-20 hidden h-1/3 w-full bg-linear-to-b from-neutral-950 lg:flex" />
                                        <div className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-1/3 w-full bg-linear-to-t from-neutral-950 lg:flex" />

                                        <div ref={headingsContainerRef} className="relative z-10 grid gap-y-2 2xl:gap-y-3 4xl:gap-y-5">
                                            {workItems.map((item, index) => (
                                                <div
                                                    key={item.id}
                                                    ref={(element) => {
                                                        headingRefs.current[index] = element;
                                                    }}
                                                    className="relative transition"
                                                >
                                                    <Link
                                                        href={item.href}
                                                        onMouseEnter={() => setActive(item.id)}
                                                        onMouseLeave={() => setActive(null)}
                                                        className={`flex items-start gap-x-2 transition-transform duration-300 ${active === item.id ? "translate-x-3" : "translate-x-0"
                                                            }`}
                                                    >
                                                        <span className="text-balance text-left text-5xl font-medium leading-none tracking-tight text-white lg:text-6xl xl:text-7xl xl:leading-[0.9] 3xl:text-[5rem] 4xl:text-8xl">
                                                            {item.title}
                                                        </span>
                                                        <span className="mt-2 text-xs font-medium text-white">[{item.years}]</span>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                ref={imagesRef}
                                className="col-span-12 grid pb-14 pt-7 lg:col-span-6 lg:col-start-7 3xl:col-span-5 3xl:col-start-8 4xl:col-span-5 4xl:col-start-8"
                            >
                                <div className="mb-5 lg:hidden">
                                    <h2 className="text-balance text-left text-base font-medium leading-tight tracking-tight text-white">
                                        Featured Work
                                    </h2>
                                </div>

                                {workItems.map((item) => (
                                    <WorkCard key={item.id} item={item} active={active} setActive={setActive} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-3 flex justify-center lg:mt-7">
                    <AnimatedButton />
                </div>
            </div>
        </section>
    );
}
