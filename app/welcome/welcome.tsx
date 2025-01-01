import { ArrowUpRight } from "lucide-react";

export function Welcome() {
  return (
    <div className="container mx-auto flex flex-col py-24">
      <h1 className="text-4xl text-zinc-950 font-bold selection:text-red-800">Christian Penales</h1>
      <h2 className="text-zinc-950 text-7xl font-bold uppercase selection:text-red-800">
        Web Developer
      </h2>
      <div className="py-6 flex flex-row gap-4 selection:text-red-800">
        <div>
          <a
            href={"https://github.com/somniphy"}
            target="_blank"
            className="inline-flex items-center gap-1 text-zinc-900 hover:text-white hover:bg-zinc-900 text-3xl font-semibold border border-zinc-800 rounded-full px-4"
          >
            GitHub
            <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>
        <div>
          <a
            href={
              "https://www.linkedin.com/in/christian-jay-penales-2b33b1200/"
            }
            className="inline-flex items-center gap-1 text-zinc-900 hover:text-white hover:bg-zinc-900 transition-colors duration-300 text-3xl font-semibold border border-zinc-800 rounded-full px-4"
            target="_blank"
          >
            LinkedIn
            <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>
        <div>
          <a
            href={"https://github.com/somniphy"}
            target="_blank"
            className="inline-flex items-center gap-1 text-zinc-900 hover:text-white hover:bg-zinc-900 transition-colors duration-300 text-3xl font-semibold border border-zinc-800 rounded-full px-4"
          >
            Instagram
            <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>
        <div>
          <a
            href={"https://github.com/somniphy"}
            target="_blank"
            className="inline-flex items-center gap-1 text-zinc-900 hover:text-white hover:bg-zinc-900 transition-colors duration-300 text-3xl font-semibold border border-zinc-800 rounded-full px-4"
          >
            Behance
            <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
