import { ContactBand, PageIntro } from "../_components/sections";
import { pageMetadata, services } from "../_lib/site";

export const metadata = pageMetadata("Services", "Business websites, booking and enquiry workflows, custom web tools, and website improvements.", "/services");

const steps = [
  ["Discuss", "We talk about your goals, your audience, and what the site or tool needs to do."],
  ["Define", "We agree on scope, functionality, and what a successful first version looks like."],
  ["Build", "I develop the site or tool, share progress, and refine it with your feedback."],
  ["Launch", "We bring it online and discuss any support or improvements you need afterward."],
];

export default function Services() {
  return (
    <>
      <div className="container">
        <PageIntro label="Services" title="Websites that look good and work hard.">
          <p>I work with small businesses and independent teams on websites, enquiry flows, and the tools they use to run their business.</p>
        </PageIntro>
        <div className="service-grid">
          {services.map((service, index) => (
            <section className="service-card" key={service.title}>
              <p className="eyebrow">0{index + 1}</p>
              <h2>{service.title}</h2>
              <p>{service.summary} {service.detail}</p>
            </section>
          ))}
        </div>
        <section className="editorial-section" aria-labelledby="process-title">
          <p className="eyebrow section-index">The process</p>
          <h2 id="process-title">How we’ll work together.</h2>
          <ol className="process-list">
            {steps.map(([title, text], index) => (
              <li key={title}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
      <ContactBand title="Let’s discuss your project." copy="A few sentences about what you have in mind are enough to get started." />
    </>
  );
}
