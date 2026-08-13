type Name = "arrow-left" | "arrow-right" | "menu" | "close";
export default function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: Name;
  className?: string;
}) {
  const path = {
    "arrow-left": "M15 18l-6-6 6-6",
    "arrow-right": "M9 18l6-6-6-6",
    menu: "M4 7h16M4 12h16M4 17h16",
    close: "M6 6l12 12M18 6L6 18",
  }[name];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={path} />
    </svg>
  );
}
