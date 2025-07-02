import type { MetaFunction } from "@remix-run/node";
import { HomeHeroSection } from "~/components/homeHeroSection";
import { HomeLogos } from "~/components/homeLogos";

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
    </>
  );
}
