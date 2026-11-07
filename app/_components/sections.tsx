import type { ReactNode } from "react";
import { ActionLink } from "./link-with-arrow";

export function PageIntro({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <div className="intro-copy">{children}</div>
    </div>
  );
}

export function ContactBand({ title = "Have an idea worth building?", copy = "Tell me what you’re working on. I’d love to hear about it." }: { title?: string; copy?: string }) {
  return (
    <section className="contact-band" aria-labelledby="contact-band-title">
      <div className="container contact-band-inner">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-band-title">{title}</h2>
          <p>{copy}</p>
        </div>
        <ActionLink href="/contact" variant="primary">Start a conversation</ActionLink>
      </div>
    </section>
  );
}
