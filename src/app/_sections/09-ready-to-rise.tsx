"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text = "Ready to Rise at Seven?";

export default function ReadyToRiseSection() {
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const charRefs = useRef<Array<HTMLSpanElement | null>>([]);

    useEffect(() => {
        const trigger = triggerRef.current;
        const heading = headingRef.current;

        if (!trigger || !heading) return;

        const ctx = gsap.context(() => {
            const setup = () => {
                const headingWidth = heading.offsetWidth;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;

                let yStart = 150;
                let yEnd = 400;
                let charYStart = -60;

                if (windowWidth < 1024) {
                    yStart = 100;
                    yEnd = 200;
                    charYStart = -60;
                }

                gsap.set(heading, {
                    y: yStart,
                    x: headingWidth - windowWidth + windowWidth * 0.5,
                });

                gsap.to(heading, {
                    x: () => -(heading.offsetWidth - window.innerWidth + 1000),
                    y: yEnd,
                    ease: "none",
                    scrollTrigger: {
                        trigger,
                        start: "top 70%",
                        end: () => `+=${heading.offsetWidth - window.innerWidth + window.innerHeight * 0.35}`,
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });

                gsap.set(charRefs.current, {
                    yPercent: charYStart,
                    rotate: 10,
                });

                gsap.to(charRefs.current, {
                    yPercent: 0,
                    rotate: 0,
                    ease: "back.inOut(4)",
                    stagger: 0.35,
                    duration: 2.5,
                    scrollTrigger: {
                        trigger,
                        start: "top 77%",
                        end: () => `+=${heading.offsetWidth - window.innerWidth + 200}`,
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });
            };

            setup();
        }, trigger);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hidden overflow-hidden bg-[#f4f4f2] lg:block">
            <div ref={triggerRef} className="flex h-screen">
                <h2
                    ref={headingRef}
                    aria-label={text}
                    className="shrink-0 whitespace-nowrap text-[16vw] font-medium leading-tight tracking-tight text-neutral-950 4xl:text-[14vw]"
                >
                    {text.split("").map((character, index) =>
                        character === " " ? (
                            <span key={`space-${index}`} aria-hidden="true">
                                {" "}
                            </span>
                        ) : (
                            <span
                                key={`${character}-${index}`}
                                ref={(element) => {
                                    charRefs.current[index] = element;
                                }}
                                aria-hidden="true"
                                className="relative inline-block will-change-transform"
                            >
                                {character}
                            </span>
                        ),
                    )}
                </h2>
            </div>
        </section>
    );
}
