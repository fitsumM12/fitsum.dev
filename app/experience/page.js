import { experience } from "../data";

export default function ExperiencePage() {
  return (
    <section className="section">
      <div className="sectionTitle withArt">
        <div>
          <h2>Experience</h2>
          <p>Recent roles delivering AI-powered products and full-stack platforms.</p>
        </div>
        <div className="sectionArt">
          <img src="/section-experience.svg" alt="Experience timeline illustration" />
        </div>
      </div>
      <div className="stack timeline">
        {experience.map((role) => (
          <div key={role.role} className="card timelineItem">
            <div className="timelineContent">
              <div className="orgRow">
                {role.logo ? (
                  <img className="orgLogo" src={role.logo} alt={`${role.company} logo`} />
                ) : null}
                <div>
                  <h3>{role.role}</h3>
                  <p className="subtitle">{role.company}</p>
                </div>
              </div>
              <p className="timelineDate">{role.date}</p>
              <p className="timelineLocation">
                <span aria-hidden="true">📍</span> {role.location}
              </p>
              <ul>
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
