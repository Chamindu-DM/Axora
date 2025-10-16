import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import ServicesDetail from "../components/ServicesDetail";
import Portfolio from "../components/Portfolio";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SmoothScrolling from "../components/SmoothScrolling";

export default function App() {
    return (
        <div className="bg-white content-stretch flex flex-col isolate items-start justify-start relative size-full main-container overflow-x-hidden max-w-full pt-[72px]">
            <SmoothScrolling />
            <Navigation />
            <HeroSection />
            <AboutUs />
            <ServicesOverview />
            {/*<Portfolio />*/}
            <ServicesDetail />
            <Contact />
            <Footer />
        </div>
    );
}