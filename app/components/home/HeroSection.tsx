import { CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import builder from "~/lib/builder";

type HeroItem = {
  icon: string;
  title: React.ReactNode;
};

const data: HeroItem[] = [
  {
    icon: "/images/icon-fact-01.svg",
    title: (
      <p>
        <strong>3 Mio.</strong> online Arzt- Behandlungen seit 2018
      </p>
    ),
  },
  {
    icon: "/images/icon-fact-02.svg",
    title: (
      <p>
        <strong>schnell &amp; unkompliziert</strong> mit online Fragebogen
      </p>
    ),
  },
  {
    icon: "/images/icon-fact-03.svg",
    title: (
      <p>
        <strong>99%</strong> aller Patienten erhalten ihr Rezept oder AU-Schein
        wunschgemäß&lt;
      </p>
    ),
  },
];

export const HomeHeroSection = () => {
  const [content, setContent] = useState<{
    heroTitle?: string;
    heroBullets?: { item: string }[];
    heroImage?: string;
    heroCta?: string;
  } | null>(null);

  useEffect(() => {
    builder
      .get("home-hero", {
        options: { noTargeting: true },
      })
      .toPromise()
      .then((res) => {
        const data = res.data ?? null;
        setContent(data);
        console.log("Entries:", data);
      })
      .catch(console.error);
  }, []);

  if (!content) return <p>Loading...</p>;

  return (
    <section className="bg-gray-100 md:py-8">
      <div className="container mx-auto max-w-6xl px-4 md:px-1.5">
        <div className="flex gap-6">
          <div className="_content mt-8 flex flex-1 flex-col items-start">
            <div className="mb-4 flex h-[38px] items-center gap-2 rounded bg-white px-3">
              <img
                className="h-[18px]"
                src="/images/google-logo.svg"
                alt="Google Logo"
              />
              <span className="font-semibold">4,9</span>
              <span className="uppercase">Rating auf Google</span>
            </div>
            <h1 className="mb-2 text-[31px] font-semibold leading-9 md:mb-4 md:text-5xl md:leading-[54px]">
              {content.heroTitle}
            </h1>
            <ul className="w-full text-[15px] leading-[30px] md:w-auto md:text-lg md:leading-9 [&_li]:flex [&_li]:items-center [&_li]:gap-2 [&_li]:md:gap-3 [&_li_svg]:rounded-md [&_li_svg]:bg-white [&_li_svg]:p-1 [&_li_svg]:text-green-600">
              {content.heroBullets?.map((bullet, index) => (
                <li key={index}>
                  <CheckIcon strokeWidth={4} size={22} /> {bullet.item}
                </li>
              ))}

              <Button className="mt-8 h-[54px] w-full" disabled>
                {content.heroCta}
              </Button>
            </ul>

            <div className="my-8 flex w-full items-center justify-center gap-5 rounded-xl bg-white p-5 md:hidden">
              <h2 className="flex-1 text-[19px] font-semibold leading-[22px]">
                Lade die <span className="text-primary">DrAnsay-App</span>{" "}
                herunteraden
              </h2>
              <div className="flex flex-col justify-between gap-2">
                <img
                  className="h-10"
                  src="/images/appstore.webp"
                  alt="App Store Logo"
                />
                <img
                  className="h-10 w-auto"
                  src="/images/android.webp"
                  alt="Android Logo"
                />
              </div>
            </div>

            <div className="mb-16 mt-8 md:hidden">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="mb-4 flex items-center gap-4 rounded-xl bg-white px-4 py-5"
                >
                  <img className="h-12" src={item.icon} alt="Icon" />
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          <div className="_image hidden md:block">
            <img
              className="w-[467px]"
              src={content.heroImage ?? ""}
              alt="Screen Shot of application"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
