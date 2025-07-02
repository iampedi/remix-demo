export const HomeHeroSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto max-w-6xl px-1.5">
        <div className="flex gap-6">
          <div className="_content flex flex-1 flex-col items-start justify-center gap-4 bg-red-50">
            <div className="flex h-[38px] items-center gap-2 rounded bg-white px-3">
              <img
                className="h-[18px]"
                src="/public/images/google-logo.svg"
                alt="Google Logo"
              />
              <span>4,9</span>
              <span className="uppercase">Rating auf Google</span>
            </div>
            <h1 className="text-5xl font-semibold leading-tight">
              Cannabis, Rezept & AU-Schein online bestellen
            </h1>
            <ul>
              <li>einfach, schnell und günstig</li>
              <li>mit oder ohne Arztgespräch</li>
              <li>mit Cannabis Apotheken Marktplatz</li>
              <li>Cannabis Erstrezept 0 €</li>
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
