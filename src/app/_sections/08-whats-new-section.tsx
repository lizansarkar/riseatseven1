"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Timer } from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const headingImage =
    "https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad";

const posts = [
    {
        title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
        href: "#",
        category: "News",
        author: "Carrie Rose",
        readTime: "2 mins",
        image:
            "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=1200&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=4b569fd0ff131a28cbdd97102264a30f",
        authorImage:
            "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1750847674&s=8bef9798a0d24a5970f561908d301967",
    },
    {
        title:
            "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
        href: "#",
        category: "Food/Hospitality/Drink",
        author: "Ray Saddiq",
        readTime: "2 mins",
        image:
            "https://www.shutterstock.com/image-vector/charming-cartoonstyle-illustration-featuring-clever-260nw-2699094815.jpg",
        authorImage:
            "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89",
    },
    {
        title: "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
        href: "#",
        category: "Food/Hospitality/Drink",
        author: "Carrie Rose",
        readTime: "2 mins",
        image:
            "https://as1.ftcdn.net/jpg/02/32/11/72/1000_F_232117209_M7yThsR9t3votch5hp9ZenNUBH1beEMq.jpg",
        authorImage:
            "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1750847674&s=8bef9798a0d24a5970f561908d301967",
    },
];

function AnimatedButton({ className = "" }: { className?: string }) {
    return (
        <Link
            href="https://riseatseven.com/blog/"
            className={`group inline-flex w-full shrink-0 items-center justify-center gap-x-2 overflow-hidden rounded-3xl border border-transparent bg-white px-6 py-3 text-base font-medium leading-tight tracking-tight text-neutral-950 ring-neutral-950/5 transition-all hover:rounded-xl focus:outline-none focus:ring-3 md:w-auto ${className}`}
        >
            <span className="relative overflow-hidden">
                <span className="flex items-center gap-x-2 transition-transform duration-300 group-hover:-translate-y-6">
                    <span>Explore More Thoughts</span>
                    <ArrowUpRight className="mt-1 size-3" aria-hidden="true" />
                </span>
                <span className="absolute left-0 top-0 flex translate-y-6 items-center gap-x-2 transition-transform duration-300 group-hover:translate-y-0">
                    <span>Explore More Thoughts</span>
                    <ArrowUpRight className="mt-1 size-3" aria-hidden="true" />
                </span>
            </span>
        </Link>
    );
}

function MetaPill({ children, image }: { children: React.ReactNode; image?: string }) {
    return (
        <span className="inline-flex min-h-7 items-center gap-x-2 rounded-full bg-white px-3 py-1 text-sm font-medium leading-none tracking-tight text-neutral-500 xl:min-h-8 xl:py-1.5 xl:text-base">
            {image ? (
                <span className="-ml-1.5 inline-flex items-center justify-center">
                    <span className="-mr-1 size-5 overflow-hidden rounded-full">
                        <Image src={image} alt="" width={20} height={20} className="size-full object-cover" />
                    </span>
                </span>
            ) : null}
            <span className="inline-flex items-center gap-x-1.5">{children}</span>
        </span>
    );
}

function BlogCard({ post }: { post: (typeof posts)[number] }) {
    return (
        <Link
            href={post.href}
            className="group flex w-full flex-col items-start gap-y-5 transition-transform duration-300 hover:-translate-y-2"
        >
            <div className="grid w-full">
                <div className="z-20 col-start-1 row-start-1 p-3">
                    <div className="flex flex-wrap gap-1">
                        <span className="inline-flex min-h-7 items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium leading-none tracking-tight text-white backdrop-blur-sm xl:min-h-8 xl:py-1.5 xl:text-base">
                            {post.category}
                        </span>
                    </div>
                </div>

                <div className="relative z-10 col-start-1 row-start-1 aspect-square overflow-hidden rounded-2xl lg:rounded-3xl">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1280px) 31vw, (min-width: 1024px) 32vw, (min-width: 768px) 45vw, 88vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>

            <div className="flex flex-col items-start gap-y-3">
                <div className="mt-1 flex items-start gap-1">
                    <MetaPill image={post.authorImage}>{post.author}</MetaPill>
                    <MetaPill>
                        <Timer className="size-4" aria-hidden="true" />
                        <span>{post.readTime}</span>
                    </MetaPill>
                </div>

                <h2 className="text-balance text-left text-2xl font-medium leading-none tracking-[-0.04em] text-neutral-950 xl:text-3xl 4xl:text-4xl">
                    {post.title}
                </h2>
            </div>
        </Link>
    );
}

export default function WhatsNewSection() {
    return (
        <section className="w-full bg-[#f4f4f2] pb-12 xl:pb-24">
            <div className="w-full px-0">
                <div className="grid grid-cols-12 gap-x-3 gap-y-3 md:gap-x-5 md:gap-y-7">
                    <div className="col-span-12 px-4 md:px-7">
                        <div className="grid grid-cols-12 gap-x-3 gap-y-3 md:border-b md:border-neutral-200 md:pb-5 md:gap-x-5 md:gap-y-7">
                            <div className="col-span-11 flex items-end md:col-span-9">
                                <h2 className="flex flex-col text-balance text-left text-6xl font-medium leading-[0.9] tracking-[-0.055em] text-neutral-950 md:text-7xl md:leading-none lg:text-7xl 2xl:text-8xl 2xl:leading-[0.9] 4xl:text-[5.5rem]">
                                    <span className="flex flex-wrap items-center justify-start gap-x-3 gap-y-2 lg:gap-x-3.5">
                                        <span>What&apos;s</span>
                                        <span className="relative inline-flex aspect-square w-[0.9em] shrink-0 overflow-hidden rounded-[15%] bg-black/5 align-middle">
                                            <Image
                                                src={headingImage}
                                                alt="What's new"
                                                fill
                                                sizes="(min-width: 1536px) 90px, (min-width: 768px) 76px, 54px"
                                                className="object-cover object-center"
                                                priority
                                            />
                                        </span>
                                        <span>New</span>
                                    </span>
                                </h2>
                            </div>

                            <div className="hidden md:col-span-3 md:flex md:items-center md:justify-end">
                                <AnimatedButton />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:px-7">
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={1.15}
                            spaceBetween={15}
                            loop
                            slidesOffsetBefore={15}
                            speed={700}
                            breakpoints={{
                                768: { slidesPerView: 2.15 },
                                1024: { loop: false, slidesPerView: 3, spaceBetween: 15, slidesOffsetBefore: 0 },
                                1280: { loop: false, slidesPerView: 3, spaceBetween: 20, slidesOffsetBefore: 0 },
                            }}
                            pagination={{
                                el: ".whats-new-pagination",
                                type: "progressbar",
                            }}
                            className="w-full [&_.swiper-wrapper]:ease-out"
                        >
                            {posts.map((post) => (
                                <SwiperSlide key={post.title} className="py-2">
                                    <BlogCard post={post} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="relative mt-5 w-full px-4 py-3 md:px-7 lg:hidden">
                            <div className="relative w-full">
                                <div className="whats-new-pagination swiper-pagination-progressbar h-px! bg-neutral-300! [&_.swiper-pagination-progressbar-fill]:bg-neutral-950!" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 px-4 md:hidden md:px-7">
                        <AnimatedButton />
                    </div>
                </div>
            </div>
        </section>
    );
}
