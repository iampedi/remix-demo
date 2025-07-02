import { CheckIcon } from "lucide-react";
import { Button } from "./ui/button";

export const HomeHeroSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto max-w-6xl px-1.5">
        <div className="flex gap-6">
          <div className="_content flex flex-1 flex-col items-start justify-center gap-4">
            <div className="flex h-[38px] items-center gap-2 rounded bg-white px-3">
              <img
                className="h-[18px]"
                src="/public/images/google-logo.svg"
                alt="Google Logo"
              />
              <span>4,9</span>
              <span className="uppercase">Rating auf Google</span>
            </div>
            <h1 className="text-5xl font-semibold leading-[54px]">
              Cannabis, Rezept & AU-Schein online bestellen
            </h1>
            <ul className="[&_li]:flex [&_li]:items-center [&_li]:gap-3 [&_li_svg]:bg-white [&_li_svg]:p-1 [&_li_svg]:rounded-md [&_li_svg]:text-green-600 leading-9 text-lg">
              <li><CheckIcon strokeWidth={4} size={22} /> einfach, schnell und günstig</li>
              <li><CheckIcon strokeWidth={4} size={22} /> mit oder ohne Arztgespräch</li>
              <li><CheckIcon strokeWidth={4} size={22} /> mit Cannabis Apotheken Marktplatz</li>
              <li><CheckIcon strokeWidth={4} size={22} /> Cannabis Erstrezept 0 €</li>

              <Button className="w-full mt-8 h-[54px]" disabled>Cannabis & Rezept bestellen</Button>
            </ul>

          </div>

          <div className="_image">
            <img
              className="w-[467px]"
              src="/public/images/home-sec-01.jpg"
              alt="Screen Shot of application"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
