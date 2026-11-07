import { ContactBand, PageIntro } from "../_components/sections";
import { githubUrl, pageMetadata } from "../_lib/site";
import { ActionLink } from "../_components/link-with-arrow";

export const metadata = pageMetadata("About", "Meet Vladyslav Polishchuk, a full-stack engineer at Autodesk and independent developer based in Poland.", "/about");

const interests = [
  ["Chess", "I’ve reached roughly the top 1.5% of players on Chess.com. There’s always another position to figure out."],
  ["Competitive programming", "I enjoy algorithmic problems and once placed in roughly the top 1.5% at Google Hash Code."],
  ["Snowboarding", "In winter, I like getting into the mountains and finding a few runs to get better at."],
  ["Travel", "I enjoy exploring new places, learning how people live, and seeing what I notice outside my usual routine."],
];

export default function About() {
  return (
    <>
      <div className="container">
        <PageIntro label="About" title="Engineer by profession. Builder by instinct.">
          <p>Hi, I’m Vladyslav Polishchuk. Most people call me Vlad. I’m a full-stack engineer with 11 years of experience, currently working as a Senior Software Engineer at Autodesk.</p>
        </PageIntro>
        <section className="editorial-section split-section">
          <div>
            <p className="eyebrow section-index">01 / Professional work</p>
            <h2>Software engineering.</h2>
          </div>
          <div>
            <p>I’ve spent more than a decade building and improving software. I enjoy working across the stack and paying attention to the decisions that make an application easier to use and maintain.</p>
            <ActionLink href={githubUrl} external>Find me on GitHub</ActionLink>
          </div>
        </section>
        <section className="editorial-section split-section">
          <div>
            <p className="eyebrow section-index">02 / Independent work</p>
            <h2>Why I build independently.</h2>
          </div>
          <div>
            <p>I like being able to follow an idea all the way through, from figuring out what people need to seeing them use what I built. Independent projects let me work on the design, the code, and the practical details of getting something online.</p>
            <ActionLink href="/work">Explore my work</ActionLink>
          </div>
        </section>
        <section id="outside-work" className="editorial-section">
          <p className="eyebrow section-index">03 / Outside work</p>
          <h2>A little more about me.</h2>
          <div className="service-grid">
            {interests.map(([title, text]) => (
              <article className="service-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      <ContactBand title="Let’s connect." copy="I’m always up for a conversation about software or an idea you’d like to build." />
    </>
  );
}
