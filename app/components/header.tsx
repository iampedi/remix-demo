import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container max-w-6xl mx-auto px-1.5">
        <div className="h-[77px] flex items-center gap-14">
          <div>
            <img src="/images/dransay-logo.svg" alt="Project Logo" />
          </div>

          <nav className="flex gap-6 text-gray-400">
            <div>Recipes</div>
            <div>Sick note</div>
            <div>Cannabis pharmacies</div>
            <div>About Us</div>
            <div>For pharmacies</div>
          </nav>

          <div className="flex flex-1 justify-end gap-2.5">
            <Button variant={"secondary"}>Ask a question</Button>
            <Button>Shop</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
