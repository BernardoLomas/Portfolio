import Container from "../layout/Container"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <Container>
        <div className="flex flex-col gap-6 py-12 md:flex-row md-items-center md:justify-between">
          <div className="space-y-2">
            <span className="block text-lg font-bold text-emerald-400">
              Bernardo Lomas
            </span>
            <p className="text-sm text-zinc-400">
              Full Stack Software Developer
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-zinc-300">
            <a
              href="https://github.com/BernardoLomas"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bernardolomas/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:bernardo.lomasb@gmail.com"
              className="hover:text-white"
            >
              Email
            </a>
          </div>
        </div>

        <div className="pb-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Bernardo Lomas. Built with React & TypeScript
        </div>
      </Container>
    </footer>
  );
}