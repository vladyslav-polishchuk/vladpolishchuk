import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "../../_components/link-with-arrow";
import { ContactBand, PageIntro } from "../../_components/sections";
import { pageMetadata, villa } from "../../_lib/site";
import villaCover from "../../../public/villa-lim-silent.jpg";
import villaPool from "../../../public/villa-pool.jpg";

export const metadata = pageMetadata(villa.name, villa.description, villa.href);

export default function VillaCaseStudy() {
  return (
    <>
      <article className="container">
        <div className="case-top">
          <Link className="back-link" href="/work">← All work</Link>
          <PageIntro label="Project 001 / Hospitality" title={villa.name}>
            <p>A dedicated digital home for a Croatian holiday villa.</p>
            <ActionLink href={villa.url} external>Visit the live website</ActionLink>
          </PageIntro>
        </div>
        <figure className="case-figure">
          <Image className="work-image" src={villaCover} alt="The villa’s pool and terrace illuminated at dusk" sizes="(max-width: 1240px) 94vw, 1200px" preload />
          <figcaption>Villa Lim Silent · Matohanci, Croatia</figcaption>
        </figure>
        <div className="case-layout">
          <dl className="case-facts">
            <div><dt>Role</dt><dd>Independent full-stack development</dd></div>
            <div><dt>Scope</dt><dd>Website, enquiries, email, administration</dd></div>
            <div><dt>Languages</dt><dd>English, Croatian, German</dd></div>
          </dl>
          <div className="case-story">
            <section>
              <p className="eyebrow section-index">01 / The goal</p>
              <h2>Give guests a direct way to enquire.</h2>
              <p>A dedicated site gives the property room to tell its own story. Guests needed a place to browse photos, understand what’s included, and get in touch about a stay.</p>
            </section>
            <section>
              <p className="eyebrow section-index">02 / The guest experience</p>
              <h2>From exploring the villa to choosing dates.</h2>
              <p>I built the public site in three languages. Guests can browse the rooms and gallery, see seasonal rates and availability, and request a stay by selecting dates and entering their details.</p>
              <figure className="case-figure">
                <Image className="work-image" src={villaPool} alt="A view of Villa Lim Silent’s outdoor pool area" sizes="(max-width: 760px) 94vw, 760px" />
                <figcaption>Property photography featured on the guest-facing site.</figcaption>
              </figure>
            </section>
            <section>
              <p className="eyebrow section-index">03 / Behind the scenes</p>
              <h2>Tools to handle what happens next.</h2>
              <p>I built an administration interface and automated email communication to support the enquiry workflow. I also set up Google Search Console as part of the project’s technical search work.</p>
              <p>The site is live and gives Villa Lim Silent a place to share the property and receive direct enquiries.</p>
            </section>
          </div>
        </div>
      </article>
      <ContactBand title="Have a similar project?" copy="Tell me what your website needs to do for you and your customers." />
    </>
  );
}
