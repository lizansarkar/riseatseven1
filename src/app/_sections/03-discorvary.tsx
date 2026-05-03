import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const imageUrl =
    "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062";

const links = [
    {
        label: "Our Story",
        href: "https://riseatseven.com/about/",
        variant: "primary",
    },
    {
        label: "Our Services",
        href: "https://riseatseven.com/services/",
        variant: "ghost",
    },
] as const;

function AnimatedLink({
    href,
    label,
    variant,
    className = "",
}: {
    href: string;
    label: string;
    variant: "primary" | "ghost";
    className?: string;
}) {
    const baseClasses =
        "group inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-x-2 overflow-hidden border border-transparent font-medium leading-tight tracking-tight transition-all focus:outline-none focus:ring-3 md:w-auto";

    const variantClasses =
        variant === "primary"
            ? "rounded-3xl bg-white px-6 py-3 text-neutral-950 ring-neutral-950/5 hover:rounded-xl"
            : "bg-transparent text-neutral-950";

    return (
        <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
            <span className="relative overflow-hidden">
                <span className="flex items-center gap-x-2 transition-transform duration-300 group-hover:-translate-y-6">
                    <span>{label}</span>
                    <ArrowUpRight className="mt-1 size-3" aria-hidden="true" />
                </span>
                <span className="absolute left-0 top-0 flex translate-y-6 items-center gap-x-2 transition-transform duration-300 group-hover:translate-y-0">
                    <span>{label}</span>
                    <ArrowUpRight className="mt-1 size-3" aria-hidden="true" />
                </span>
            </span>
        </Link>
    );
}

function ActionLinks({ className = "" }: { className?: string }) {
    return (
        <div className={`flex flex-wrap gap-4 ${className}`}>
            {links.map((link) => (
                <AnimatedLink key={link.label} {...link} />
            ))}
        </div>
    );
}

export default function DemandDiscoverySection() {
    return (
        <section className="w-full bg-[#f4f4f2] py-12 xl:py-24">
            <div className="w-full px-4 md:px-7">
                <div className="flex w-full flex-col-reverse items-start justify-between gap-x-3 gap-y-3 md:flex-row md:gap-x-5 md:gap-y-5">
                    <ActionLinks className="w-full md:hidden" />

                    <div className="mb-1 w-full max-w-sm md:mb-0 md:mt-2 xl:max-w-xl 2xl:max-w-2xl 4xl:max-w-3xl">
                        <p className="text-balance text-left font-sans text-lg font-medium leading-tight tracking-tight text-neutral-950 xl:text-2xl xl:leading-none 4xl:text-3xl 4xl:leading-none">
                            A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
                        </p>
                    </div>

                    <div className="grid w-full max-w-[24rem] gap-y-3 md:max-w-160 md:gap-y-7 xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-[52rem] 4xl:max-w-5xl">
                        <h2 className="flex flex-col text-balance text-left font-sans text-5xl font-medium leading-none tracking-tight text-neutral-950 lg:text-6xl xl:text-7xl xl:leading-[0.9] 3xl:text-[5rem] 4xl:text-8xl">
                            <span className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1 md:gap-x-2.5">
                                <span>Driving</span>
                                <span>Demand</span>
                                <span>&amp;</span>
                                <span>Discovery</span>
                                <span className="relative inline-flex aspect-square w-[0.95em] shrink-0 overflow-hidden rounded-[15%] bg-black/5 align-middle">
                                    <Image
                                        src={imageUrl}
                                        alt="Content marketing team member"
                                        fill
                                        sizes="(min-width: 1536px) 88px, (min-width: 1280px) 68px, (min-width: 1024px) 58px, 48px"
                                        className="object-cover object-center"
                                        priority
                                    />
                                </span>
                            </span>
                        </h2>

                        <ActionLinks className="hidden md:flex" />
                    </div>
                </div>
            </div>
        </section>
    );
}
