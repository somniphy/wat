import { ArrowRightCircleIcon } from "lucide-react";
import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "chrisp - Home" },
    { name: "description", content: "Welcome to my Portfolio!" },
  ];
}

const services = [
  "Web Design",
  "Logo and Branding",
  "Web Development",
  "Search Engine Optimization",
  "Shopify and WordPress Themes",
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-12">
        <h1 className="pt-2 text-lime-400 text-6xl md:text-9xl font-semibold">
          <span className="text-zinc-50">[</span>PORTFOLIO
          <span className="text-zinc-50">]</span>
        </h1>
        <div className="py-2 flex flex-wrap gap-2">
          {services.map((service) => (
            <div className="rounded-full p-2 bg-zinc-800">
              <span className="text-lime-400 text-sm p-2">{service}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1>Latest Works</h1>
        <Link to="projects" className="hover:underline flex gap-1">
          View More
          <ArrowRightCircleIcon className="text-lime-400" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:flex gap-2 py-2">
        <div className="bg-zinc-800 p-4 w-auto md:w-72 h-64 rounded-md hover:scale-105 transition-all duration-200">
          <div className="bg-lime-400 w-32 text-center rounded-full text-sm p-2 text-zinc-950">
            View Details
          </div>
        </div>
        <div className="bg-zinc-800 p-4 w-auto md:w-72 h-64 rounded-md hover:scale-105 transition-all duration-200"></div>
        <div className="bg-zinc-800 p-4 w-auto md:w-72 h-64 rounded-md hover:scale-105 transition-all duration-200"></div>
        <div className="bg-zinc-800 p-4 w-auto md:w-72 h-64 rounded-md hover:scale-105 transition-all duration-200"></div>
        <div className="bg-zinc-800 p-4 w-auto md:w-72 h-64 rounded-md hover:scale-105 transition-all duration-200"></div>
      </div>
    </div>
  );
}
