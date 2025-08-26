import AboutSection from './packages/components/about/about-section';
import Header from './packages/components/header/header';
import HeroSection from './packages/components/hero-section/hero-section';
import WorkSection from './packages/components/work-section/work-section';
import ServicesSection from './packages/components/services-section/services-section';
import Footer from './packages/components/footer/footer';
import { GoToWhatsapp } from './packages/components/go-to-whatsapp/go-to-whatsapp';
import { BackToTopButton } from './packages/components/back-to-top/back-to-top-button';
export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <AboutSection/>
    <ServicesSection/>
    <WorkSection/>
    <Footer />
    <GoToWhatsapp />
    <BackToTopButton />
    </>

  );
}
