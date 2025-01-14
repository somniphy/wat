import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router";

const navigation = [
  { name: "Gallery", to: "jekkey" },
  { name: "About", to: "about" },
  { name: "Contact", to: "contact" },
];

export default function JekkeyLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#090909]">
      <header className="sticky top-0 z-10 h-[88px] p-8 flex justify-between bg-transparent backdrop-blur w-screen max-w-[1440px] items-center">
        <Link to="/jekkey" className="text-white text-md font-bold">
          JEKKEY®
        </Link>
        <p className="hidden lg:flex text-white uppercase text-md">
          ARCHITECTURE PHOTOGRAPHY PORTFOLIO
        </p>
        <nav className="hidden lg:flex gap-12">
          <Link to="jekkey" className="text-white uppercase text-md">
            Gallery
          </Link>
          <Link to="jekkey" className="text-white uppercase text-md">
            About
          </Link>
          <Link to="jekkey" className="text-white uppercase text-md">
            Contact
          </Link>
        </nav>
        <div className="lg:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-600 transition ease-in-out duration-200"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <XIcon className="block h-6 w-6 text-white" aria-hidden="true" />
            ) : (
              <MenuIcon
                className="block h-6 w-6 text-white"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </header>
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-4 transition-all">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  "text-white block px-3 py-2 text-sm  transition-colors",
                  isPending ? "text-white" : "",
                  isActive ? "underline" : "",
                  isTransitioning ? "opacity-75" : "",
                ].join(" ")
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <main className="min-h-screen bg-[#1E1E1E] w-screen max-w-[1440px]">
        <Outlet />
      </main>
    </div>
  );
}
