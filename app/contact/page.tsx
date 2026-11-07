import { ActionLink } from "../_components/link-with-arrow";
import { PageIntro } from "../_components/sections";
import { email, githubUrl, linkedinUrl, pageMetadata } from "../_lib/site";

export const metadata = pageMetadata("Contact", "Get in touch with Vlad Polishchuk about a website, a web application, or an idea you’d like to build.", "/contact");

export default function Contact() {
  return (
    <div className="container contact-page">
      <PageIntro label="Contact" title="Have something in mind?">
        <p>Whether you’re starting from scratch or improving an existing site, tell me a little about what you want to build. A few sentences are enough to get started.</p>
      </PageIntro>
      <div className="contact-details">
        {email && (
          <div>
            <h2>Start a project</h2>
            <p><a href={`mailto:${email}?subject=Project%20enquiry`}>{email}</a></p>
          </div>
        )}
        <div>
          <h2>Find me online</h2>
          <div className="actions">
            {linkedinUrl && <ActionLink href={linkedinUrl} external>LinkedIn</ActionLink>}
            <ActionLink href={githubUrl} external>GitHub</ActionLink>
          </div>
        </div>
      </div>
    </div>
  );
}
