import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center gap-8">
      <header className="space-y-4">
        <span className="text-sm uppercase tracking-widest tex-zinc-400">
          Full Stack Sotware Developer
        </span>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Construindo aplicações{" "}
          <span className="text-zinc-400">escaláveis, perfomáticas</span> e bem
          arquitetadas.
        </h1>

        <p className="max-w-2xl text-lg text-zinc-300">
          Desenvolvedor fullstack com foco em React, TypeScript e Node.js.
          Experiência em APIs REST, arquitetura limpa e projetos orientados a
          produto.
        </p>
      </header>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/projects"
          className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
        >
          Ver projetos
        </Link>

        <Link
          to="/contact"
          className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white/40"
          >
            Entrar em contato
          </Link>
      </div>

      <div className="flex gap-6 pt-8 text-sm text-zinc-400">
        <span>React</span>
        <span>TypeScript</span>
        <span>Node.Js</span>
        <span>APIs REST</span>
      </div>
    </section>
  );
}
