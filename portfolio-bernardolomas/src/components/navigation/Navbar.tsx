import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../layout/Container";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <Container>
          <nav className="flex h-16 items-center justify-between">
            <Link
              to="/"
              className="text-lg font-bold tracking-tight"
            >
              Bernardo Lomas
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm transition ${
                      isActive
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
              <a
                href="https://www.linkedin.com/in/bernardolomas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/50 px-6 py-3 text-sm font-semibold transition hover:border-emerald-400/40"
              >
                Let's talk
              </a>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-sm font-semibold"
            >
              Menu
            </button>
          </nav>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex h-full flex-col items-center justify-center gap-10"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-sm text-zinc-400"
              >
                Close
              </button>

              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold"
                >
                  {link.label}
                </NavLink>
              ))}

              <a
                href="https://www.linkedin.com/in/bernardolomas/"
                download
                className="inline-flex items-center justify-center rounded-md border border-white/50 px-6 py-3 text-sm font-semibold transition hover:border-emerald-400/40"
              >
                Reach out
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
