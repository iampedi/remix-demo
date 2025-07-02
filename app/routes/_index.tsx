import type { MetaFunction } from "@remix-run/node";
import { HomeHeroSection } from "~/components/homeHeroSection";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <HomeHeroSection />;
}
