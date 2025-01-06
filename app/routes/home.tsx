import type { Route } from "./+types/home";

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
        <h1 className="text-zinc-50 text-3xl font-bold">
          chris penales<span className="text-lime-400">.</span>
        </h1>
        <h1 className="pt-2 text-lime-400 text-5xl md:text-9xl font-semibold">
          [PORTFOLIO]
        </h1>
        <div className="py-2 flex flex-wrap gap-2">
          {services.map((service) => (
            <div className="rounded-full p-2 bg-zinc-800">
              <span className="text-lime-400 text-sm p-2">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
