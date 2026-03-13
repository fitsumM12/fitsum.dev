import { education } from "../data";

export default function EducationPage() {
  return (
    <section className="section">
      <div className="sectionTitle withArt">
        <div>
          <h2>Education</h2>
          <p>Academic foundation in computer science and engineering.</p>
        </div>
        <div className="sectionArt">
          <img src="/section-education.svg" alt="Education illustration" />
        </div>
      </div>
      <div className="stack timeline">
        {education.map((item) => (
          <div key={item.degree} className="card timelineItem">
            <div className="timelineContent">
              <div className="orgRow">
                {item.logo ? (
                  <img className="orgLogo" src={item.logo} alt={`${item.school} logo`} />
                ) : null}
                <div>
                  <h3>{item.school}</h3>
                  <p className="subtitle">{item.degree}</p>
                </div>
              </div>
              <p className="timelineDate">{item.date}</p>
              <p className="timelineLocation">
                <span aria-hidden="true">📍</span> {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
