import { CircleIcon } from "lucide-react"


export const HomeLogos = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto max-w-6xl px-1.5">

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm uppercase"><CircleIcon size={16} strokeWidth={4} className="text-primary" /> Bekannt aus</div>
                    <div className="flex items-center justify-around flex-1">
                        <img className="h-6" src="/public/images/tagesspiegel.svg" alt="Tagesspiegel Logo" />
                        <img src="/public/images/bild.svg" alt="Bild Logo" />
                        <img className="h-6" src="/public/images/handelsblatt.svg" alt="Handelsblatt Logo" />
                        <img src="/public/images/zdf.svg" alt="ZDF Logo" />
                        <img className="h-6" src="/public/images/wirtschaftswoche.svg" alt="Wirtschaftswoche Logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}