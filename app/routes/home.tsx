import { ArrowRightCircleIcon } from "lucide-react";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import ProjectCard from "~/components/project-card";

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

const projects = [
  {
    id: 1,
    name: "Project Name",
    description: "I could be dumb",
    image_url: "https://via.placeholder.com/400x200",
    price: "2100",
  },
  {
    id: 2,
    name: "Project Name",
    description: "I could be dumb",
    image_url: "https://via.placeholder.com/400x200",
    price: "22000",
  },
  {
    id: 3,
    name: "Project Name",
    description: "I could be dumb",
    image_url: "https://via.placeholder.com/400x200",
    price: "23000",
  },
  {
    id: 4,
    name: "Project Name",
    description: "I could be dumb",
    image_url: "https://via.placeholder.com/400x200",
    price: "24000",
  },
  {
    id: 5,
    name: "Project Name",
    description: "I could be dumb",
    image_url: "https://via.placeholder.com/400x200",
    price: "25000",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-12">
        <h1 className="pt-2 text-lime-400 text-6xl md:text-9xl font-semibold  ">
          <span className="text-zinc-50 ">[</span>PORTFOLIO
          <span className="text-zinc-50">]</span>
        </h1>
        <div className="py-2 flex flex-wrap gap-2">
          {services.map((service) => (
            <div className="rounded-full p-2 bg-zinc-800">
              <span key={service.id} className="text-lime-400 text-sm p-2">
                {service.name}
              </span>
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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
