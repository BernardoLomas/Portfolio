import { NavLink } from "react-router-dom";

const linkBase = "text-sm text-zinc-300 hover:text-white transition-colors";
const linkActive = "text-white";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-base font-semibold tracking-tight">
            Bernardo Lomas
          </span>
          <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-zinc-300">
            Full Stack
          </span>
        </NavLink>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
