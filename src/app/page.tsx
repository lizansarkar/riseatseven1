import HeroSection from "./_sections/01-hero";
import AgencyBehind from "./_sections/02-agency-behind";
import DemandDiscovery from "./_sections/03-discorvary";
import FeaturedWorkSection from "./_sections/04-featured-work";
import Services from "./_sections/05-services-section";
import ChasingConsumersMarquee from "./_sections/06-chasing-consumers-marquee";
import LegacyMakingSection from "./_sections/07-legacy-making";
import WhatsNewSection from "./_sections/08-whats-new-section";
import ReadyToRiseSection from "./_sections/09-ready-to-rise";
import Footer from "./_sections/10.footer";


export default function Home() {
    return (
        <>
            <HeroSection />
            <AgencyBehind />
            <DemandDiscovery />
            <FeaturedWorkSection />
            <Services />
            <ChasingConsumersMarquee />
            <LegacyMakingSection />
            <WhatsNewSection />
            <ReadyToRiseSection />
            <Footer />
        </>
    )
}