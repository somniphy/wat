import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Services from "~/welcome/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto grid-cols-1 md:flex justify-between">
      <Welcome />
      <Services />
    </div>
  )
}
