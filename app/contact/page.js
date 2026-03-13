import { contact } from "../data";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="sectionTitle withArt">
        <div>
          <h2>Contact</h2>
          <p>Open to AI engineering roles, computer vision projects, and collaborations.</p>
        </div>
        <div className="sectionArt">
          <img src="/section-contact.svg" alt="Contact illustration" />
        </div>
      </div>
      <div className="grid contactGrid">
        <div className="card">
          <h3>Email</h3>
          <p className="muted">{contact.email}</p>
        </div>
        <div className="card">
          <h3>Phone</h3>
          <p className="muted">{contact.phone}</p>
        </div>
        <div className="card">
          <h3>Location</h3>
          <p className="muted">{contact.location}</p>
        </div>
        <div className="card">
          <h3>LinkedIn</h3>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            {contact.linkedin}
          </a>
        </div>
        <div className="card">
          <h3>GitHub</h3>
          <a href={contact.github} target="_blank" rel="noreferrer">
            {contact.github}
          </a>
        </div>
      </div>
    </section>
  );
}
