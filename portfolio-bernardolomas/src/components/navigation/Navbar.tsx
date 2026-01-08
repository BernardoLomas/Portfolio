import { Link, NavLink } from "react-router-dom";
import Container from "../layout/Container"
import Button from "../ui/Button";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-lg font-bold tracking-tight text-emerald-400"
          >
            Bernardo Lomas
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm transition ${isActive
                    ? "text-emerald-400"
                    : "text-zinc-300 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Button to="/#contact" variant="outline">
              Let's talk
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
