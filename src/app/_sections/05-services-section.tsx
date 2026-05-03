import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const headingImage =
    "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750944462&s=5eb651d549739cde26429958911743ea";

const services = [
    {
        title: "Digital PR",
        href: "#",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=1a61b84b15dae35de54d3d7de3cf70da",
        thumb:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=ca4a2c3891fedbd3ca3a3d46af0e6362",
    },
    {
        title: "Organic Social & Content",
        href: "#",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398338&s=8134104b62ab9543cbd61698a477579c",
        thumb:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398338&s=6dc7a97684078dc9cbe75679b4093ef5",
    },
    {
        title: "Search & Growth Strategy",
        href: "#",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858763&s=a0a8a8fbfd20e03adda5df8a1c1cd8c8",
        thumb:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858763&s=624a1f990a8d128dd35cf3a6e1f44dbe",
    },
    {
        title: "Content Experience",
        href: "#",
        image:
            "https://i.pinimg.com/736x/34/9a/d7/349ad76a0e10303425a7115f01f9ac84.jpg",
        thumb:
            "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846496&s=1aebaeffe44aa88331de2609962a990e",
    },
    {
        title: "Data & Insights",
        href: "#",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398487&s=b0718f9541002dd19d22844321850119",
        thumb:
            "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398487&s=5c5ad2c6b822417723c4f682fd885ced",
    },
    {
        title: "Onsite SEO",
        href: "#",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=212a785ca630960f6fa231d553b48fd6",
        thumb:
            "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=4a4a4154f7497d086fc695e27bf2aa17",
    },
];

function AnimatedButton({ className = "" }: { className?: string }) {
    return (
        <Link
            href="#"
            className={`group inline-flex w-full shrink-0 items-center justify-center gap-x-2 overflow-hidden rounded-3xl border border-transparent bg-white px-6 py-3 text-base font-medium leading-tight tracking-tight text-neutral-950 ring-neutral-950/5 transition-all hover:rounded-xl focus:outline-none focus:ring-3 md:w-auto ${className}`}
        >
            <span className="relative overflow-hidden">
                <span className="flex items-center gap-x-2 transition-transform duration-300 group-hover:-translate-y-6">
                    <span>View All Services</span>
                    <ArrowUpRight className="mt-1 size-3" aria-hidden="true" />
                </span>
                <span className="absolute left-0 top-0 flex translate-y-6 items-center gap-x-2 transition-transform duration-300 group-hover:translate-y-0">
                    <span>View All Services</span>
                    <ArrowUpRight className="mt-1 size-3" aria-hidden="true" />
                </span>
            </span>
        </Link>
    );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
    return (
        <div className="group relative col-span-12 -my-px md:col-span-6">
            <div className="absolute bottom-0 left-0 z-0 w-full lg:px-12">
                <div className="h-px w-full bg-neutral-200" />
            </div>

            <Link href={service.href} className="relative z-10 grid grid-cols-1">
                <div className="relative z-20 col-start-1 row-start-1 flex items-center gap-3 py-4 text-black transition duration-500 lg:py-6 lg:group-hover:text-white">
                    <div className="relative inline-flex size-12 overflow-hidden rounded-lg md:size-16 md:rounded-xl lg:hidden">
                        <Image
                            src={service.thumb}
                            alt={`${service.title} thumbnail`}
                            fill
                            sizes="64px"
                            className="object-cover"
                        />
                    </div>

                    <div className="lg:translate-x-10">
                        <div className="relative">
                            <div className="absolute left-0 top-0 overflow-hidden pr-2">
                                <div className="-translate-x-full translate-y-full -rotate-45 transition duration-300 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 lg:group-hover:rotate-0">
                                    <ArrowUpRight className="size-9 lg:size-11 xl:size-14" aria-hidden="true" />
                                </div>
                            </div>

                            <div className="transition duration-300 lg:group-hover:translate-x-14">
                                <h3 className="text-balance text-left text-3xl font-medium leading-none tracking-tight text-current lg:text-4xl xl:text-5xl 3xl:text-6xl">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 col-start-1 row-start-1 hidden overflow-hidden rounded-full bg-black opacity-0 transition duration-300 lg:block lg:group-hover:opacity-100">
                    <div className="relative h-full min-h-24 w-full opacity-60 transition duration-500 lg:group-hover:scale-105">
                        <Image
                            src={service.image}
                            alt={`${service.title} background`}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default function Services() {
    return (
        <section className="w-full bg-[#f4f4f2] pb-12 xl:pb-24">
            <div className="w-full px-4 md:px-7">
                <div className="grid grid-cols-12 gap-x-3 gap-y-3 overflow-hidden md:gap-x-5 md:gap-y-7 lg:pt-5">
                    <div className="col-span-12">
                        <div className="grid grid-cols-12 gap-x-3 gap-y-3 md:border-b md:border-neutral-200 md:pb-5 md:gap-x-5 md:gap-y-7">
                            <div className="col-span-11 flex items-end md:col-span-9">
                                <h2 className="flex flex-col text-balance text-left text-6xl font-medium leading-[0.9] tracking-tight text-neutral-950 md:text-7xl md:leading-none lg:text-7xl 2xl:text-8xl 2xl:leading-[0.9] 4xl:text-[5.5rem]">
                                    <span className="flex flex-wrap items-center justify-start gap-x-3 gap-y-2 lg:gap-x-3.5">
                                        <span>Our</span>
                                        <span className="relative inline-flex aspect-square w-[0.9em] shrink-0 overflow-hidden rounded-[15%] bg-black/5 align-middle">
                                            <Image
                                                src={headingImage}
                                                alt="Services"
                                                fill
                                                sizes="(min-width: 1536px) 90px, (min-width: 768px) 76px, 54px"
                                                className="object-cover object-center"
                                                priority
                                            />
                                        </span>
                                        <span>Services</span>
                                    </span>
                                </h2>
                            </div>

                            <div className="hidden md:col-span-3 md:flex md:items-center md:justify-end">
                                <AnimatedButton />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 grid grid-cols-12 gap-x-2">
                        {services.map((service) => (
                            <ServiceCard key={service.title} service={service} />
                        ))}
                    </div>

                    <div className="col-span-12 md:hidden">
                        <AnimatedButton />
                    </div>
                </div>
            </div>
        </section>
    );
}
