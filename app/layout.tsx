import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/manrope";
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-mono/400.css";
import { Header } from "./_components/header";
import { email, fullName, githubUrl, linkedinUrl, name, navigation, role, siteUrl } from "./_lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Vladyslav (Vlad) Polishchuk — Senior Software Engineer",
    template: "%s | Vlad Polishchuk",
  },
  description: "Senior Software Engineer at Autodesk and independent developer building thoughtful websites and reliable software.",
  robots: siteUrl && process.env.VERCEL_ENV !== "preview" ? undefined : { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#content">Skip to content</a>
        <Header name={name} links={navigation} />
        <main id="content" tabIndex={-1}>{children}</main>
        <footer className="site-footer">
          <div className="container">
            <div className="footer-main">
              <div>
                <Link className="wordmark" href="/">{name}<span>.</span></Link>
                <p>{role}</p>
              </div>
              <nav aria-label="Footer navigation">
                {navigation.map(({ label, href }) => <Link key={href} href={href}>{label}</Link>)}
              </nav>
              <nav aria-label="Social and contact links">
                <a href={githubUrl}>GitHub</a>
                {linkedinUrl && <a href={linkedinUrl}>LinkedIn</a>}
                {email && <a href={`mailto:${email}`}>Email</a>}
              </nav>
            </div>
            <div className="footer-fineprint">
              <p>© {new Date().getFullYear()} {fullName}</p>
              <p>Independent projects and opinions are my own.</p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
