import { skills } from "../data";

export default function SkillsPage() {
  return (
    <section className="section">
      <div className="sectionTitle withArt">
        <div>
          <h2>Technical Expertise</h2>
          <p>Focused strengths across AI, software engineering, and scalable data systems.</p>
        </div>
        <div className="sectionArt">
          <img src="/section-skills.svg" alt="Skills overview illustration" />
        </div>
      </div>
      <div className="skillsGrid">
        {skills.map((group) => (
          <div key={group.title} className="skillCard">
            <div className="skillHeader">
              <span className="skillIcon" aria-hidden="true">
                {group.icon === "ai" && (
                  <svg viewBox="0 0 24 24">
                    <path d="M7 3h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2v2h-2v-2H9v2H7v-2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2v2h2V3h2v2h2V3h2v2h2V5h2v10H5V5h2V3zm2 6h6v2H9V9zm0 4h6v2H9v-2z" />
                  </svg>
                )}
                {group.icon === "code" && (
                  <svg viewBox="0 0 24 24">
                    <path d="M8.5 7.5 3 12l5.5 4.5 1.5-1.8L6.9 12 10 9.3 8.5 7.5zm7 0-1.5 1.8 3.1 2.7-3.1 2.7 1.5 1.8L21 12l-5.5-4.5zM13 4l-4 16h2l4-16h-2z" />
                  </svg>
                )}
                {group.icon === "data" && (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3zm8 6v4c0 1.66-3.58 3-8 3s-8-1.34-8-3V9c1.72 1.2 5.1 2 8 2s6.28-.8 8-2zm0 6v4c0 1.66-3.58 3-8 3s-8-1.34-8-3v-4c1.72 1.2 5.1 2 8 2s6.28-.8 8-2z" />
                  </svg>
                )}
                {group.icon === "tools" && (
                  <svg viewBox="0 0 24 24">
                    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.4-2.4 2.1-2.1z" />
                  </svg>
                )}
              </span>
              <div>
                <p className="skillLabel">Core Track</p>
                <h3>{group.title}</h3>
              </div>
            </div>
            <div className="skillPills">
              {group.items.map((item) => (
                <span key={item} className="pillItem">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
