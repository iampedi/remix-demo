import { CircleIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button, buttonVariants } from "../ui/button";
import { VariantProps } from "class-variance-authority";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  link: string;
  variant: ButtonVariant;
  cta: string;
};

const data: ServiceItem[] = [
  {
    icon: "/public/images/icon-oele-light.svg",
    title: "Cannabis inkl. Rezept",
    description:
      "Beantrage dein Cannabis Rezept einfach online. Wähle zum besten Preis die passenden Blüten für Beschwerden wie Stress, Schmerzen, Schlaf­störungen, fülle den medizinischen Fragebogen aus und beginne deine Therapie.",
    link: "#",
    variant: "default",
    cta: "Cannabis inkl. Online-Rezept",
  },
  {
    icon: "/public/images/icon-arznei.svg",
    title: "Arznei Rezepte",
    description:
      "Deine Arznei inkl. Rezept vom Online-Arzt, jetzt auch für Diätspritzen. Fülle den medizinischen Fragebogen zu deiner Behandlung aus und lass dir dein Rezept direkt an die Apotheke deiner Wahl schicken.",
    link: "#",
    variant: "destructive",
    cta: "Arzneimittel-Rezept online",
  },
  {
    icon: "/public/images/icon-kosmetik-light.svg",
    title: "Krankschreibung",
    description:
      "Deine Online-Krankschreibung in wenigen Minuten. Beantworte den medizinischen Fragebogen oder sprich mit einem unserer Ärzte. Deinen AU-Schein erhältst du bequem als PDF oder auf Wunsch per Post.",
    link: "#",
    variant: "secondary",
    cta: "AU-Schein online",
  },
];

export const HomeOurServices = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-1.5">
        <div>
          <div className="flex items-center gap-2 pb-4 text-sm uppercase md:pb-5">
            <CircleIcon size={10} strokeWidth={5} className="text-primary" />{" "}
            Services
          </div>
          <h2 className="pb-10 text-3xl font-semibold md:pb-14 md:text-5xl">
            Unsere Services
          </h2>

          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            {data.map((item, index) => (
              <Card
                key={index}
                className="gap-4 rounded-2xl border-none px-6 py-8 shadow-none md:px-10"
              >
                <CardHeader className="mb-4 p-0">
                  <div className="mb-4">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <CardTitle className="flex items-center text-2xl md:h-20 md:text-[34px] md:leading-10">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-[15px] md:text-base md:leading-snug">
                    {item.description}
                  </p>
                </CardContent>
                <CardFooter className="mt-8 p-0">
                  <Button
                    className="h-[54px] w-full"
                    variant={item.variant}
                    disabled
                  >
                    {item.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
