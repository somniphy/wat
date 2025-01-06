import {
  DribbbleIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Projects", to: "/projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4">
        <nav className="h-16 flex justify-between items-center">
          <Link to="/" className="flex">
            <h1 className="text-zinc-50 text-2xl font-bold">
              chrisp<span className="text-lime-400">.</span>
            </h1>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    "text-sm transition-colors",
                    isPending ? "text-zinc-500" : "",
                    isActive ? "text-lime-400" : "",
                    isTransitioning ? "opacity-75" : "",
                  ].join(" ")
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="inline-flex gap-2 items-center">
            <Link
              to="https://github.com/somniphy"
              target="_blank"
              className="bg-lime-400 rounded-3xl p-2"
            >
              <GithubIcon className="w-4 h-4 text-zinc-900" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/chrispenales"
              target="_blank"
              className="bg-lime-400 rounded-3xl p-2"
            >
              <LinkedinIcon className="w-4 h-4 text-zinc-900" />
            </Link>
            <Link
              to="https://dribbble.com/chan999u"
              target="_blank"
              className="bg-lime-400 rounded-3xl p-2"
            >
              <DribbbleIcon className="w-4 h-4 text-zinc-900" />
            </Link>
            <Link
              to="https://instagram.com/chan999u"
              target="_blank"
              className="bg-lime-400 rounded-3xl p-2"
            >
              <InstagramIcon className="w-4 h-4 text-zinc-900" />
            </Link>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-600 transition ease-in-out duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  "block px-3 py-2 text-zinc-50 text-sm transition-colors",
                  isPending ? "text-zinc-500" : "",
                  isActive ? "text-lime-400" : "",
                  isTransitioning ? "opacity-75" : "",
                ].join(" ")
              }
              onClick={() => setIsOpen(true)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
