import { CircleIcon } from "lucide-react";

export const HomeLogos = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto max-w-6xl px-1.5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm uppercase">
            <CircleIcon size={10} strokeWidth={5} className="text-primary" />{" "}
            Bekannt aus
          </div>
          <div className="flex flex-1 flex-col items-center justify-around md:flex-row">
            <img
              className="h-6"
              src="/images/tagesspiegel.svg"
              alt="Tagesspiegel Logo"
            />
            <img src="/images/bild.svg" alt="Bild Logo" />
            <img
              className="h-6"
              src="/images/handelsblatt.svg"
              alt="Handelsblatt Logo"
            />
            <img src="/images/zdf.svg" alt="ZDF Logo" />
            <img
              className="h-6"
              src="/images/wirtschaftswoche.svg"
              alt="Wirtschaftswoche Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
