import Link from "next/link";
import { ArrowUpRight, Share2, Heart, Briefcase, Music2, Send, Video } from "lucide-react";

const footerLinks = [
    [
        { label: "Services", href: "#" },
        { label: "Work", href: "#" },
        { label: "About", href: "#" },
        { label: "Culture", href: "#" },
        { label: "Meet The Risers", href: "#" },
    ],
    [
        { label: "Testimonials", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Webinars", href: "#" },
        { label: "Careers", href: "#" },
    ],
    [
        { label: "Sheffield", href: "#" },
        { label: "Manchester", href: "#" },
        { label: "London", href: "#" },
        { label: "New York", href: "#" },
        { label: "Contact", href: "#" },
    ],
];

const socials = [
    { label: "Facebook", href: "#", icon: Share2 },
    { label: "X", href: "#", icon: Send },
    { label: "LinkedIn", href: "#", icon: Briefcase },
    { label: "YouTube", href: "#", icon: Video },
    { label: "TikTok", href: "#", icon: Music2 },
    { label: "Instagram", href: "#", icon: Heart },
];

const legalItems = [
    "© 2025 Rise at Seven Ltd. All rights reserved",
    "Company Number 11955187",
    "VAT Registered GB 322402945",
];

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="group inline-flex text-lg font-medium leading-tight tracking-tight text-white transition-colors hover:text-[#a9f5d1] lg:text-xl"
        >
            <span className="relative overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-7">{label}</span>
                <span className="absolute left-0 top-0 block translate-y-7 transition-transform duration-300 group-hover:translate-y-0">
                    {label}
                </span>
            </span>
        </Link>
    );
}

function SocialLink({
    href,
    label,
    icon: Icon,
}: {
    href: string;
    label: string;
    icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}) {
    return (
        <Link
            href={href}
            target="_blank"
            aria-label={label}
            className="inline-flex items-center gap-x-2.5 rounded-xl bg-white px-2 py-1 text-xs text-neutral-950 transition-all hover:rounded-sm"
        >
            <Icon className="size-3.5" aria-hidden />
            <ArrowUpRight className="size-3" aria-hidden />
        </Link>
    );
}

function RiseLogo() {
    return (
        <svg className="h-full w-full fill-current object-contain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 21" aria-label="Rise at Seven">
            <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z" />
            <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z" />
            <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z" />
            <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z" />
            <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z" />
            <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z" />
            <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z" />
            <path d="M18.3089 0.378906H15.5V3.2953H18.3089V0.378906Z" />
            <path d="M18.3089 5.02344H15.5V19.9828H18.3089V5.02344Z" />
            <path d="M25.8409 10.7205C24.8142 10.3959 23.5183 10.0996 23.5183 8.77603C23.5183 7.77639 24.3279 7.18256 25.2728 7.18256C26.4077 7.18256 27.0549 7.91166 27.1895 8.99178H29.9984C29.9443 6.39935 27.9727 4.61719 25.4087 4.61719C22.8447 4.61719 20.7088 6.3723 20.7088 8.93767C20.7088 14.2307 27.5412 12.6102 27.5412 15.743C27.5412 17.0389 26.6227 17.7951 25.381 17.7951C23.707 17.7951 22.9516 16.6074 22.8427 15.0681H20.0352C20.0352 17.417 21.1951 19.2269 23.4094 20.0094C24.0303 20.2252 24.6789 20.3604 25.3262 20.3604C28.1892 20.3604 30.3494 18.5248 30.3494 15.5807C30.3494 12.6366 28.296 11.476 25.8402 10.7205H25.8409Z" />
            <path d="M39.3637 4.61719C34.9891 4.61719 31.6953 8.15514 31.6953 12.475C31.6953 16.7948 35.0432 20.3591 39.3096 20.3591C42.577 20.3591 45.3581 18.3341 46.493 15.2831H43.6842C42.8746 16.8489 41.1722 17.7944 39.4178 17.7944C36.96 17.7944 35.0709 16.0393 34.5028 13.7174H46.8975C46.9516 13.2582 46.978 12.7719 46.978 12.3133C46.978 8.10036 43.6037 4.61719 39.3637 4.61719ZM34.5028 11.5565C34.6651 9.09864 36.9059 7.18188 39.3373 7.18188C41.7688 7.18188 44.0075 9.09932 44.1705 11.5565H34.5028Z" />
            <path d="M9.55945 12.1512C12.1519 11.2327 13.3395 9.09953 13.3395 6.39957C13.3395 4.67151 12.7728 2.88934 11.5046 1.67395C10.0998 0.297591 8.07419 0 6.18314 0H0V19.9826H2.91572V13.8069L13.3389 19.9826V16.8606L6.22575 12.5949L7.61496 12.5293C8.26222 12.5293 8.96359 12.3676 9.55809 12.1512H9.55945ZM4.91499 10.3156H2.91572V2.67359H5.99444C8.317 2.67359 10.4231 3.86192 10.4231 6.40024C10.4231 9.5865 7.50742 10.3156 4.91499 10.3156Z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer id="footer" className="w-full bg-[#f4f4f2] py-0">
            <div className="w-full px-0">
                <div className="relative mt-8 grid p-2 lg:mt-0">
                    <div className="absolute left-0 top-0 flex h-full w-full p-2">
                        <div className="h-full w-full rounded-3xl bg-neutral-950" />
                    </div>

                    <div className="relative z-20 col-start-1 row-start-1 grid grid-cols-12 gap-x-3 gap-y-3 px-4 pb-6 pt-14 md:gap-x-5 md:gap-y-7 md:px-7 lg:py-10">
                        <div className="col-span-12 mb-10 flex flex-col items-start justify-start gap-y-3 md:gap-y-5 lg:col-span-4 lg:mb-0">
                            <h2 className="text-balance text-left text-2xl font-medium leading-none tracking-tight text-white xl:text-3xl 4xl:text-4xl">
                                Stay updated with Rise news
                            </h2>

                            <form className="relative w-full" action="https://riseatseven.com/thank-you/" method="post">
                                <label htmlFor="footer-email" className="sr-only">
                                    Your Email Address
                                </label>
                                <input
                                    id="footer-email"
                                    type="email"
                                    required
                                    name="email"
                                    className="w-full appearance-none rounded-full bg-neutral-700 px-5 py-4 text-lg font-medium leading-none tracking-tight text-white transition placeholder:text-white/50 focus:outline-none focus:ring-3 focus:ring-white/15 lg:px-6 lg:py-5 lg:text-xl"
                                    placeholder="Your Email Address"
                                />
                                <div className="absolute right-0 top-0 p-2">
                                    <button
                                        type="submit"
                                        aria-label="Subscribe"
                                        className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#a9f5d1] text-base text-neutral-950 transition hover:rotate-90 hover:bg-white lg:size-13 lg:text-lg"
                                    >
                                        <ArrowUpRight className="size-5" aria-hidden />
                                    </button>
                                </div>
                            </form>

                            <div className="flex flex-wrap gap-1">
                                {socials.map((social) => (
                                    <SocialLink key={social.label} {...social} />
                                ))}
                            </div>
                        </div>

                        <div className="col-span-12 flex flex-wrap justify-between gap-y-10 md:col-span-11 md:flex-row lg:col-span-6 lg:col-start-6">
                            {footerLinks.map((column, index) => (
                                <nav key={index} className="flex w-1/2 flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 md:w-auto">
                                    {column.map((link) => (
                                        <FooterLink key={link.label} {...link} />
                                    ))}
                                </nav>
                            ))}
                        </div>

                        <div className="col-span-12 mt-10 lg:mt-32">
                            <div className="text-white">
                                <RiseLogo />
                            </div>
                        </div>

                        <div className="col-span-12 mt-10 flex flex-col items-end justify-between md:flex-row lg:mt-0 lg:items-center">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 md:gap-3">
                                {legalItems.map((item) => (
                                    <div key={item} className="contents">
                                        <span className="text-xs font-light leading-tight text-white">{item}</span>
                                        <span className="inline-flex size-1 rounded-full bg-white md:mt-0.5" />
                                    </div>
                                ))}
                                <Link href="https://riseatseven.com/privacy-policy/" className="text-xs font-light leading-tight text-white underline-offset-2 hover:underline">
                                    Privacy Policy
                                </Link>
                                <span className="inline-flex size-1 rounded-full bg-white md:mt-0.5" />
                                <Link href="https://riseatseven.com/terms-conditions/" className="text-xs font-light leading-tight text-white underline-offset-2 hover:underline">
                                    Terms &amp; conditions
                                </Link>
                            </div>

                            <div className="mt-1 w-full md:ml-auto md:text-right lg:mt-0 lg:w-auto">
                                <Link href="https://madebyshape.co.uk" target="_blank" className="text-xs font-light leading-tight text-white underline-offset-2 hover:underline">
                                    Website MadeByShape
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
