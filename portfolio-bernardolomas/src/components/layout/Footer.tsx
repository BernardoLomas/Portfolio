export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Bernardo Lomas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}