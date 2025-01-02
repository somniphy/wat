import { useState } from "react";
import { Link } from "react-router";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

export default function SiteHeader() {
  const [isActive, setIsActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="h-16 flex justify-between items-center">
          <Link to="/" className="hidden lg:inline-flex">
            <span className="text-zinc-950 font-semibold">CP</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="transition-colors hover:text-zinc-950/45 text-zinc-950"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
