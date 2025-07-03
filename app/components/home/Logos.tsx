import { CircleIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useEffect, useState } from "react";

type SliderProps = {
  src: string;
  alt: string;
  class?: string;
};

const data: SliderProps[] = [
  {
    src: "/images/tagesspiegel.svg",
    alt: "Tagesspiegel Logo",
    class: "h-6",
  },
  {
    src: "/images/bild.svg",
    alt: "Bild Logo",
  },
  {
    src: "/images/handelsblatt.svg",
    alt: "Handelsblatt Logo",
    class: "h-6",
  },
  {
    src: "/images/zdf.svg",
    alt: "ZDF Logo",
  },
  {
    src: "/images/wirtschaftswoche.svg",
    alt: "Wirtschaftswoche Logo",
    class: "h-6",
  },
];
const isMobile = () => window.innerWidth < 768;

export const HomeLogos = () => {
  const [enableCarousel, setEnableCarousel] = useState(false);

  useEffect(() => {
    setEnableCarousel(isMobile());

    const handleResize = () => {
      setEnableCarousel(isMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-14">
      <div className="container mx-auto max-w-6xl px-4 md:px-1.5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2 text-sm uppercase">
            <CircleIcon size={10} strokeWidth={5} className="text-primary" />{" "}
            Bekannt aus
          </div>

          {enableCarousel ? (
            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
            >
              <CarouselContent>
                {data.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="flex basis-1/2 items-center justify-center"
                  >
                    <img src={item.src} alt={item.alt} className={item.class} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-around md:flex-row">
              {data.map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  className={item.class}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
