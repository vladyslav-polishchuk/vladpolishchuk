import Image from "next/image";
import { ActionLink } from "../_components/link-with-arrow";
import { ContactBand, PageIntro } from "../_components/sections";
import { pageMetadata, villa } from "../_lib/site";
import villaCover from "../../public/villa-lim-silent.jpg";

export const metadata = pageMetadata("Selected work", "Independent projects and professional engineering by Vlad Polishchuk.", "/work");

export default function Work() {
  return (
    <>
      <div className="container">
        <PageIntro label="Selected work" title="Real projects. Thoughtful solutions.">
          <p>Independent work that shows how I take a project from an idea to something people can use.</p>
        </PageIntro>
        <article className="work-feature">
          <Image className="work-image" src={villaCover} alt="Villa Lim Silent and its pool at dusk" sizes="(max-width: 1240px) 94vw, 1200px" preload />
          <div className="split-section work-feature-info">
            <div>
              <p className="eyebrow">001 / Hospitality</p>
              <h2>{villa.name}</h2>
              <p className="subheading">A dedicated website for a Croatian vacation rental.</p>
            </div>
            <div>
              <p>{villa.description}</p>
              <div className="actions">
                <ActionLink href={villa.href} variant="primary">Read the case study</ActionLink>
                <ActionLink href={villa.url} external>Visit live website</ActionLink>
              </div>
            </div>
          </div>
        </article>
        <section className="editorial-section split-section">
          <div>
            <p className="eyebrow section-index">Professional engineering</p>
            <h2>Building software at Autodesk.</h2>
          </div>
          <div>
            <p>I bring 11 years of software engineering experience to my independent projects. My professional work includes building and improving web applications as part of established software products.</p>
            <ActionLink href="/about">About my background</ActionLink>
          </div>
        </section>
      </div>
      <ContactBand />
    </>
  );
}
