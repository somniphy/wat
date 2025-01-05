import type { Route } from "./+types/home";
import { Cta } from "../home/cta";
import Services from "~/home/services";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "chrisp - Home" },
    { name: "description", content: "Welcome to my Portfolio!" },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Cta />
      <Services />
    </div>
  )
}
