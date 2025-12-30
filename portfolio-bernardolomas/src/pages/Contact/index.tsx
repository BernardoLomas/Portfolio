import Seo from "../../components/seo/Seo";

export default function Contact() {
  return (
    <>
      <Seo
        title="Bernardo Lomas | Full Stack Developer"
        description="Desenvolvedor full stack"
      />
      <section className="mx-auto max-w-2xl space-y-10">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Contacts</h1>
          <p className="text-zinc-300">
            Entre em contato comigo por email ou redes profissionais.
          </p>
        </header>

        <div className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <p className="text-sm text-zinc-400">Email</p>
            <p className="text-zinc-200">bernardo.lomasb@gmail.com</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <p className="text-sm text-zinc-400">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/bernardolomas/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-200 hover:underline"
            >
              www.linkedin.com/in/bernardolomas
            </a>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <p className="text-sm text-zinc-400">GitHub</p>
            <a
              href="https://github.com/BernardoLomas"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-200 hover:underline"
            >
              github.com/BernardoLomas
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
