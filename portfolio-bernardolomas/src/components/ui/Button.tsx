import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
type Common = {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};
type Props = Common &
  (
    | { to: string; href?: never }
    | ({ href: string; to?: never } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ to?: never; href?: never } & ButtonHTMLAttributes<HTMLButtonElement>)
  );
const base =
  "inline-flex min-h-11 items-center justify-center rounded-xl border-2 px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 motion-reduce:transform-none";
export default function Button(props: Props) {
  const { children, variant = "outline", className = "" } = props;
  const style =
    variant === "primary"
      ? "border-white bg-white text-zinc-950 hover:border-emerald-200 hover:bg-emerald-50"
      : "border-white/15 bg-zinc-900/60 text-zinc-100 hover:border-emerald-400/50";
  const classes = `${base} ${style} ${className}`;
  if ("to" in props && props.to)
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  if ("href" in props && props.href) {
    const { href, target, rel, download } = props;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
