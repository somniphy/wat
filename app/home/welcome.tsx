import { ArrowUpRight } from "lucide-react";

export function Welcome() {
  return (
    <div className="py-12">
     
      <h2 className="text-zinc-50 text-5xl font-bold uppercase">
        Christian Penales
      </h2>
      <div className="py-6 flex flex-wrap gap-4">
        <div>
          <a
            href={"https://github.com/somniphy"}
            target="_blank"
            className="inline-flex items-center gap-1 text-zinc-900 hover:text-zinc-900 hover:bg-zinc-100 text-2xl font-semibold border border-zinc-50 rounded-full px-4"
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
            className="inline-flex items-center gap-1 text-zinc-900 hover:text-zinc-900 hover:bg-zinc-100 transition-colors duration-300 text-2xl font-semibold border border-zinc-50 rounded-full px-4"
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
            className="inline-flex items-center gap-1 text-zinc-900 hover:text-zinc-900 hover:bg-zinc-100 transition-colors duration-300 text-2xl font-semibold border border-zinc-50 rounded-full px-4"
          >
            Instagram
            <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>
        <div>
          <a
            href={"https://github.com/somniphy"}
            target="_blank"
            className="inline-flex items-center gap-1 text-zinc-900 hover:text-zinc-900 hover:bg-zinc-100 transition-colors duration-300 text-2xl font-semibold border border-zinc-50 rounded-full px-4"
          >
            Behance
            <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
