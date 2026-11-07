import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      <path d={external ? "M6 18 18 6M7 6h11v11" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

export function ActionLink({ href, children, variant = "text", external = false }: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
}) {
  const className = `action action--${variant}`;
  const content = <>{children}<Arrow external={external} /></>;

  return external
    ? <a className={className} href={href}>{content}</a>
    : <Link className={className} href={href}>{content}</Link>;
}
