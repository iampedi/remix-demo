import type { MetaFunction } from "@remix-run/node";
import { HomeHeroSection } from "~/components/home/HeroSection";
import { HomeLogos } from "~/components/home/Logos";
import { HomeOurServices } from "~/components/home/OurServices";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix App - DrAnswer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <HomeHeroSection />

      <HomeLogos />

      <HomeOurServices />
    </>
  );
}
