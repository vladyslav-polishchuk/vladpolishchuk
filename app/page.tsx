import Image from "next/image";
import Link from "next/link";
import { ActionLink, Arrow } from "./_components/link-with-arrow";
import { ContactBand } from "./_components/sections";
import { fullName, githubUrl, linkedinUrl, name, pageMetadata, role, services, siteUrl, villa } from "./_lib/site";
import villaCover from "../public/villa-lim-silent.jpg";
import villaPool from "../public/villa-pool.jpg";

const title = "Vladyslav (Vlad) Polishchuk — Senior Software Engineer";

export const metadata = {
  ...pageMetadata(title, "Senior Software Engineer at Autodesk and independent developer building thoughtful websites and reliable software.", "/"),
  title: { absolute: title },
};

const profile = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  alternateName: name,
  jobTitle: "Senior Software Engineer",
  worksFor: { "@type": "Organization", name: "Autodesk" },
  url: siteUrl,
  sameAs: linkedinUrl ? [githubUrl, linkedinUrl] : [githubUrl],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }} />
      <div className="container">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero-copy">
            <p className="eyebrow hero-eyebrow">{role}</p>
            <h1 id="home-title">
              I build thoughtful websites and <span>reliable software.</span>
            </h1>
            <p className="hero-description">
              I’m Vlad, a Senior Software Engineer at Autodesk with 11 years of experience. I also work independently, building websites and web tools for small businesses.
            </p>
            <div className="actions">
              <ActionLink href="/work" variant="primary">Explore my work</ActionLink>
              <ActionLink href="/contact" variant="secondary">Start a project</ActionLink>
            </div>
          </div>
          <Link className="featured-card" href={villa.href} aria-label="Read the Villa Lim Silent case study">
            <div className="featured-top"><span><i /> Featured project</span><span>001</span></div>
            <div className="featured-image">
              <Image src={villaCover} alt="Villa Lim Silent and its illuminated pool at dusk" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1312px) 39vw, 468px" placeholder="blur" preload />
            </div>
            <div className="featured-bottom">
              <div>
                <h2>{villa.name}</h2>
                <p>Vacation rental · Website &amp; enquiries</p>
              </div>
              <span className="icon-ring"><Arrow external /></span>
            </div>
          </Link>
        </section>
        <ul className="proof-strip" aria-label="Professional overview">
          <li><span>01</span> 11 years of experience</li>
          <li><span>02</span> Full-stack engineering</li>
          <li><span>03</span> Poland / Remote</li>
        </ul>

        <section className="editorial-section" aria-labelledby="home-work-title">
          <p className="eyebrow section-index">01 / Selected work</p>
          <div className="split-section split-section--image">
            <Image className="work-image" src={villaPool} alt="The pool terrace at Villa Lim Silent" sizes="(max-width: 760px) 94vw, 56vw" />
            <div>
              <h2 id="home-work-title">{villa.name}</h2>
              <p>{villa.description} Guests can explore the property, check seasonal rates, and send an enquiry for their dates.</p>
              <ActionLink href={villa.href}>Read the case study</ActionLink>
            </div>
          </div>
        </section>

        <section className="editorial-section split-section" aria-labelledby="home-experience-title">
          <div>
            <p className="eyebrow section-index">02 / Engineering experience</p>
            <h2 id="home-experience-title">More than a decade building software.</h2>
          </div>
          <div>
            <p>At Autodesk, I work on software within an established product. Working independently gives me the chance to carry that experience across an entire project, from deciding what to build through to launch.</p>
            <ActionLink href="/about">More about me</ActionLink>
          </div>
        </section>

        <section className="editorial-section" aria-labelledby="home-services-title">
          <p className="eyebrow section-index">03 / Services</p>
          <div className="section-heading">
            <h2 id="home-services-title">What I can build for you.</h2>
            <ActionLink href="/services">Explore services</ActionLink>
          </div>
          <div className="service-grid service-grid--compact">
            {services.slice(0, 3).map((service, index) => (
              <article className="service-card" key={service.title}>
                <p className="eyebrow">0{index + 1}</p>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-section split-section" aria-labelledby="home-personal-title">
          <div>
            <p className="eyebrow section-index">04 / Beyond the code</p>
            <h2 id="home-personal-title">A little more about me.</h2>
          </div>
          <div>
            <p>I play a lot of chess, take on the occasional programming competition, and look for excuses to travel or spend a few days snowboarding.</p>
            <ActionLink href="/about#outside-work">Life outside work</ActionLink>
          </div>
        </section>
      </div>
      <ContactBand />
    </>
  );
}
