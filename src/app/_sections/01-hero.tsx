"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type HeroImage = {
    src: string;
    alt: string;
};

type Logo = {
    src: string;
    alt: string;
};

const smoothEase = "cubic-bezier(0.135,0.9,0.15,1)";

const heroImages: HeroImage[] = [
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Emirates-airpline-in-flight.avif?w=1330&h=700&q=100&auto=format&fit=crop&dm=1750948034&s=7fc16049313aefb0ea160470af9ae379",
        alt: "Emirates aircraft in flight",
    },
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231&s=60dc0e3c84825da30f8d809caf5fabe1",
        alt: "Red Bull campaign image",
    },
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2560&h=1707&q=100&auto=format&fit=crop&dm=1750847623&s=2e6f5684a2dcbdbd148a651a17aafe47",
        alt: "Pooky lighting campaign image",
    },
];

const awardLogos: Logo[] = [
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png?w=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=4224a150635830510189f10a0aee7f56",
        alt: "Global Search Awards",
    },
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png?w=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=56325840ae0c2320f07f4d2dbe0f17e7",
        alt: "The Drum Awards",
    },
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png?w=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=14f640e099e035cfc477931c969f88a5",
        alt: "UK Social Media Awards",
    },
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UK-Content-Awards-White.png?w=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=8acfce3a7fe88f5f830dfba6300fb306",
        alt: "UK Content Awards",
    },
];

const platformLogos: Logo[] = [
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/gogle.png?w=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=5742345d004979398925f2bf0ed2b0be",
        alt: "Google",
    },
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/chat-gpt.png?w=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847621&s=9520b72ff0ff76db733cb5e61f56aec3",
        alt: "ChatGPT",
    },
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/gemini.png?w=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847619&s=e18974e353f1549a6058c198296850ce",
        alt: "Gemini",
    },
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/tiktok.png?w=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=9a38aa8ec4497dcfe306a2c32895e41c",
        alt: "TikTok",
    },
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/youtube.png?w=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=ecef4746693ddd001d9f350e7b70e75a",
        alt: "YouTube",
    },
    {
        src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/reddit.png?w=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=54e8ed7ebe7dc34fafff2545b1b93d9c",
        alt: "Reddit",
    },
];

const navLinks = [
    "Services +",
    "International +",
    "About +",
    "Work",
    "Careers",
    "Blog",
    "Webinar",
];

function Laurel({ side }: { side: "left" | "right" }) {
    return (
        <svg
            viewBox="0 0 28 38"
            aria-hidden="true"
            className={`h-7 w-5 fill-current text-white/95 sm:h-8 sm:w-6 ${side === "left" ? "-scale-x-100" : ""
                }`}
        >
            <path d="M26.116 19.511c-1.321-.388-2.691.106-3.481 1.136.24-1.394.328-2.81.266-4.218l1.584.01c1.787.012 3.245-1.428 3.257-3.215l-1.966-.012c-1.323-.009-2.466.779-2.975 1.914-.147-1.35-.433-2.684-.853-3.978l1.616-.452c1.721-.481 2.726-2.267 2.244-3.988l-1.893.53c-1.334.373-2.238 1.531-2.352 2.834a17.06 17.06 0 0 0-1.958-3.738l1.547-.953c1.522-.937 1.996-2.93 1.058-4.452L20.536 1.96c-1.287.793-1.824 2.342-1.391 3.721a17.712 17.712 0 0 0-1.962-2.254c.518-.56.626-1.491-.036-2.143C16.304.453 14.934-.226 12.742.071c0 0 0 1.587 1.787 3.17.373.33.783.52 1.193.619.514.124.972-.013 1.308-.29.57.578 1.1 1.192 1.591 1.836-1.023-.704-2.407-.783-3.533-.09l-1.674 1.032c.938 1.521 2.931 1.995 4.452 1.057l1.511-.93c.06.091.12.184.18.277.657 1.015 1.202 2.094 1.636 3.215-.792-.94-2.087-1.383-3.347-1.03l-1.893.529c.482 1.721 2.267 2.726 3.988 2.244l1.69-.473c.373 1.219.62 2.476.744 3.746-.523-1.068-1.617-1.806-2.887-1.814l-1.965-.013c-.012 1.787 1.427 3.245 3.215 3.257l1.725.01c.027 1.15-.045 2.302-.217 3.437-.316-.989-1.1-1.808-2.171-2.122l-1.886-.554c-.504 1.715.478 3.513 2.192 4.016l1.51.444a17.63 17.63 0 0 1-1.14 3.275c.017-1.09-.516-2.161-1.503-2.787l-1.66-1.052c-.957 1.51-.509 3.509 1 4.465l1.389.88a17.96 17.96 0 0 1-2.393 3.218 14.9 14.9 0 0 1-.368.38c.798-1.195.726-2.822-.274-3.946l-1.306-1.47c-1.335 1.187-1.456 3.232-.269 4.568l1.255 1.411a17.38 17.38 0 0 1-3.023 2.15c.697-.934.865-2.214.326-3.338l-.85-1.772c-1.612.773-2.291 2.706-1.518 4.317l.7 1.46a17.374 17.374 0 0 1-4.314 1.267c-.372.055-.766.11-1.146.151-2.292.26-4.14.878-5.958 2.345l.605.756a11.71 11.71 0 0 1 1.218-.87c1.287-.805 2.734-1.161 4.249-1.365 1.98-.227 3.902-.758 5.684-1.582l.745 1.551c.773 1.611 2.706 2.291 4.317 1.518l-.85-1.772c-.593-1.235-1.868-1.923-3.156-1.828a18.98 18.98 0 0 0 3.433-2.47l1.022 1.149c1.187 1.336 3.232 1.456 4.568.269l-1.306-1.47c-.846-.951-2.127-1.286-3.276-.97.911-1.013 1.691-2.102 2.342-3.247l1.315.834c1.51.957 3.509.508 4.466-1.001l-1.66-1.052c-1.103-.699-2.467-.648-3.495.019a19.463 19.463 0 0 0 1.345-3.842l1.583.465c1.715.504 3.513-.478 4.017-2.193l-1.886-.554Z" />
        </svg>
    );
}

function AnimatedWord({ children }: { children: string }) {
    return (
        <span className="js-word mr-3 inline-flex overflow-hidden md:mr-4 lg:mr-5">
            {Array.from(children).map((letter, index) => (
                <span key={`${letter}-${index}`} className="inline-flex flex-col overflow-hidden">
                    <span className="hero-char block will-change-transform">
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                </span>
            ))}
        </span>
    );
}

export default function HeroSection() {
    const rootRef = useRef<HTMLElement | null>(null);
    const backgroundRef = useRef<HTMLImageElement | null>(null);
    const inlineImageRef = useRef<HTMLImageElement | null>(null);
    const [imageIndex, setImageIndex] = useState(0);

    const activeImage = heroImages[imageIndex];

    const reducedMotion = useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }, []);

    useEffect(() => {
        if (reducedMotion) return;

        const rotation = window.setInterval(() => {
            setImageIndex((current) => (current + 1) % heroImages.length);
        }, 4200);

        return () => window.clearInterval(rotation);
    }, [reducedMotion]);

    useEffect(() => {
        const root = rootRef.current;
        if (!root || reducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.set(".hero-char", { yPercent: 105 });
            gsap.set(".hero-fade", { autoAlpha: 0, y: 18 });
            gsap.set(".hero-nav", { autoAlpha: 0, y: -18 });
            gsap.set(".hero-shell", { scale: 1.03 });

            const intro = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.12 });
            intro
                .to(".hero-nav", { autoAlpha: 1, y: 0, duration: 0.75 })
                .to(".hero-shell", { scale: 1, duration: 1.4 }, "<")
                .to(
                    ".hero-char",
                    {
                        yPercent: 0,
                        duration: 1.1,
                        stagger: { each: 0.018, from: "start" },
                    },
                    "-=0.65",
                )
                .to(".hero-fade", { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.08 }, "-=0.72");

            gsap.to(backgroundRef.current, {
                yPercent: 7,
                scale: 1.08,
                ease: "none",
                scrollTrigger: {
                    trigger: root,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.to(".hero-center", {
                yPercent: -6,
                autoAlpha: 0.72,
                ease: "none",
                scrollTrigger: {
                    trigger: root,
                    start: "center center",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, root);

        return () => ctx.revert();
    }, [reducedMotion]);

    useEffect(() => {
        if (reducedMotion || !inlineImageRef.current || !backgroundRef.current) return;

        gsap.fromTo(
            [inlineImageRef.current, backgroundRef.current],
            { autoAlpha: 0, scale: 1.06 },
            { autoAlpha: 1, scale: 1, duration: 0.7, ease: "power3.out" },
        );
    }, [activeImage.src, reducedMotion]);

    return (
        <section
            ref={rootRef}
            className="relative w-full bg-[#efeeec] p-2 font-['saans',ui-sans-serif,system-ui,sans-serif]"
        >
            {/* Source site uses a thin mint report strip above the nav. */}
            <div className="absolute inset-x-2 top-0 z-50 h-1 rounded-full bg-[#b2f6e3]" />

            <div className="hero-shell relative h-[100svh] min-h-[760px] overflow-hidden rounded-[1.75rem] bg-[#111212] text-white shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
                <Image
                    ref={backgroundRef}
                    src={activeImage.src}
                    alt=""
                    aria-hidden="true"
                    width={1920}
                    height={1080}
                    className="absolute inset-0 h-full w-full scale-105 object-cover blur-sm md:blur-md"
                />
                <div className="absolute inset-0 bg-[#111212]/35" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_50%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.38))]" />

                <header className="hero-nav absolute inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-6 lg:px-8">
                    <Link href="/" aria-label="Rise at Seven home" className="text-[clamp(1.3rem,2vw,2rem)] font-medium tracking-[-0.04em]">
                        Rise at Seven<span className="align-super text-xs">°</span>
                    </Link>

                    <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-[15px] font-medium tracking-[-0.03em] lg:flex xl:gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(/\s|\+/g, "-")}`}
                                className="group relative transition-opacity duration-500 hover:opacity-70"
                                style={{ transitionTimingFunction: smoothEase }}
                            >
                                {link === "Work" && (
                                    <span className="absolute -right-5 -top-3 rounded-full bg-[#b2f6e3] px-1.5 py-0.5 text-[9px] leading-none text-[#111212]">
                                        25
                                    </span>
                                )}
                                {link}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium tracking-[-0.03em] text-[#111212] transition-[transform,background-color,color] duration-500 hover:scale-[1.025] hover:bg-[#b2f6e3] sm:px-7"
                        style={{ transitionTimingFunction: smoothEase }}
                    >
                        Get In Touch
                        <span className="inline-block transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                    </a>
                </header>

                <div className="hero-center relative z-20 flex h-full items-center justify-center px-4 text-center">
                    <div className="flex w-full max-w-[1500px] flex-col items-center">
                        <div className="hero-fade mb-6 flex flex-col items-center justify-center">
                            <p className="mb-3 max-w-[13rem] text-balance text-xs font-medium uppercase leading-[0.95] tracking-[-0.025em] text-white md:max-w-[15rem]">
                                #1 Most Recommended Content Marketing Agency
                            </p>
                            <div className="flex items-center gap-2">
                                <Laurel side="left" />
                                {awardLogos.map((logo, index) => (
                                    <Image
                                        key={logo.alt}
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={160}
                                        height={160}
                                        className={`h-auto w-10 object-contain opacity-95 sm:w-12 ${index === 3 ? "hidden lg:block" : ""}`}
                                    />
                                ))}
                                <Laurel side="right" />
                            </div>
                        </div>

                        <h1
                            className="max-w-[92rem] text-center text-[clamp(4.2rem,12vw,10.5rem)] font-medium leading-[0.86] tracking-[-0.065em] text-white md:leading-[0.88]"
                            aria-label="We Create Category Leaders"
                        >
                            <span className="block overflow-hidden pb-3">
                                <AnimatedWord>We</AnimatedWord>
                                <AnimatedWord>Create</AnimatedWord>
                            </span>
                            <span className="block overflow-visible pb-3">
                                <AnimatedWord>Category</AnimatedWord>
                                <span className="mr-3 inline-flex aspect-square w-[0.78em] translate-y-[0.08em] overflow-hidden rounded-[15%] bg-black/10 align-baseline md:mr-4 lg:mr-5">
                                    <Image
                                        ref={inlineImageRef}
                                        src={activeImage.src}
                                        alt={activeImage.alt}
                                        width={900}
                                        height={900}
                                        className="h-full w-full object-cover"
                                    />
                                </span>
                                <AnimatedWord>Leaders</AnimatedWord>
                            </span>
                        </h1>

                        <p className="hero-fade mt-2 text-balance text-[clamp(1.55rem,2.1vw,2.7rem)] font-medium leading-none tracking-[-0.055em] text-white">
                            on every searchable platform
                        </p>

                        <div className="hero-fade mt-12 hidden items-center justify-center gap-12 opacity-90 2xl:flex">
                            {platformLogos.map((logo) => (
                                <Image
                                    key={logo.alt}
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={160}
                                    height={160}
                                    className="h-auto w-16 object-contain"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between gap-6 p-6 md:p-7">
                    <p className="hero-fade hidden max-w-140 text-left text-sm font-normal leading-normal tracking-[-0.03em] text-white md:block lg:text-base">
                        Organic media planners creating, distributing &amp; optimising
                        <br />
                        <strong className="font-medium">search-first</strong> content for SEO, Social, PR, Ai and LLM search
                    </p>

                    <p className="hero-fade ml-auto max-w-[20rem] text-right text-sm font-medium leading-normal tracking-[-0.03em] text-white lg:text-base">
                        4 Global Offices serving
                        <br />
                        UK, USA (New York) &amp; EU
                    </p>
                </div>
            </div>
        </section>
    );
}
