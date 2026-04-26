import HeroSection from "./(links)/hero-section/page";
import Icons from "@/components/Icons";
import Images from '@/components/Images';
import Contact from "./(links)/contact/page";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <Icons />
      <Images />
      <Contact/>
    </div>
  );
}
