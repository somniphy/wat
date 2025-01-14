import { ArrowRightCircleIcon } from "lucide-react";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import ProjectCard from "~/components/project-card";
import Jekkey from "../assets/jekkey/jekkey.png";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "chrisp - Home" },
    { name: "description", content: "Welcome to my Portfolio!" },
  ];
}

const services = [
  { id: 1, name: "Web Design" },
  { id: 2, name: "Logo and Branding" },
  { id: 3, name: "Web Development" },
  { id: 4, name: "Search Engine Optimization" },
  { id: 5, name: "Shopify and WordPress Themes" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-12">
        <h1 className="pt-2 text-lime-400 text-6xl md:text-9xl font-semibold  ">
          PORTFOLIO
        </h1>
        <div className="py-2 flex flex-wrap gap-2">
          {services.map((service) => (
            <div key={service.id} className="rounded-full p-2 bg-zinc-800">
              <p className="text-lime-400 text-sm p-2">{service.name}</p>
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
      <div className="grid grid-cols-1 md:flex gap-2 py-6">
        <div className="max-w-md rounded-md bg-zinc-800 hover:scale-105 transition-all duration-200">
          <img
            className="rounded-t-lg"
            height={240}
            width={240}
            src={Jekkey}
            alt="jekkey"
          />
          <div className="p-4">
            <h5 className="mb-2 font-bold tracking-tight text-lime-400">
              Jekkey Portfolio
            </h5>
            <p className="mb-4 text-zinc-50 text-sm text-wrap"></p>
            <Link
              to="jekkey"
              className="inline-flex gap-1 px-4 py-2 text-sm text-zinc-900 bg-lime-400 rounded-full hover:bg-lime-300 transition-colors duration-300"
            >
              View Details
              <ArrowRightCircleIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
