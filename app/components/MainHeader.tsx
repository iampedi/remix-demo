import { Link } from "@remix-run/react";
import { Button } from "./ui/button";

export const MainHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-1.5">
        <div className="flex h-[77px] items-center gap-14">
          <div>
            <Link to="/">
              <img src="/images/dransay-logo.svg" alt="Project Logo" />
            </Link>
          </div>

          <nav className="hidden gap-6 text-gray-400 md:flex">
            <div>Recipes</div>
            <div>Sick note</div>
            <div>Cannabis pharmacies</div>
            <div>About Us</div>
            <div>For pharmacies</div>
          </nav>

          <div className="hidden flex-1 justify-end gap-2.5 md:flex">
            <Button variant={"secondary"} asChild>
              <Link to={"/questions"}>Ask a question</Link>
            </Button>
            <Button disabled>Shop</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
