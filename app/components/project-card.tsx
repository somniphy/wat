import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router";
import type { Project } from "~/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="max-w-md rounded-md bg-zinc-800 hover:scale-105 transition-all duration-200">
      <img
        className="rounded-t-lg"
        src={project.image_url}
        alt={project.name}
      />
      <div className="p-5">
        <h5 className="mb-2 font-bold tracking-tight text-lime-400">
          {project.name}
        </h5>
        <p className="mb-4 text-zinc-50 text-sm">{project.description}</p>
        <Link
          to="/"
          className="inline-flex gap-1 px-4 py-2 text-sm text-zinc-900 bg-lime-400 rounded-full hover:bg-lime-500"
        >View Details
        <ArrowRightCircleIcon />
        </Link>
      </div>
    </div>
  );
}
