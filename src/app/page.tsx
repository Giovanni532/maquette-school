import HeroSection from "./HeroSection";
import LocationSection from "./LocationSection";
import NewsLetterSection from "./NewsLetterSection";
import ProjetSection from "./ProjetSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <ProjetSection />
      <LocationSection />
      <NewsLetterSection />
    </>
  );
}
