import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "chrisp - About" },
  ];
}

export default function About() {
  return (
    <div className="container mx-auto">
      <div className="py-12">
        <h3 className="text-zinc-950 text-2xl">About Me</h3>
        <h1 className=" text-zinc-950 text-5xl font-bold">Christian Penales</h1>
      </div>
      <div className="flex">
        <p className="text-zinc-900 text-wrap">
          I specialize in crafting visually appealing and user-friendly websites
          that combine modern design with seamless functionality. With a passion
          for both aesthetics and code, I aim to help businesses and individuals
          create online experiences that leave a lasting impression. Whether
          it's a sleek portfolio, an engaging blog, or a robust web application,
          I’m here to bring your ideas to life. Let’s work together to build
          something amazing!
        </p>
      </div>
    </div>
  );
}
