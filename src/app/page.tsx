import Header from './packages/components/header/header';
import HeroSection from './packages/components/hero-section/hero-section';
import WorkSection from './packages/components/work-section/work-section';
import './packages/ui/styles/globals.scss';
export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <WorkSection/>
    </>

  );
}
