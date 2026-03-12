import { projects } from "../data";

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="sectionTitle">
        <h2>Projects</h2>
        <p>Selected AI and full-stack initiatives across healthcare and enterprise.</p>
      </div>
      <div className="stack timeline">
        {projects.map((project) => (
          <div key={project.name} className="card projectCard timelineItem">
            <div className="timelineContent">
              <div>
                <h3>{project.name}</h3>
                <p className="subtitle">{project.role}</p>
              </div>
              <p className="timelineDate">{project.date}</p>
              <p>{project.summary}</p>
              <ul>
                {project.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="techStack">
                {project.environment.split(",").map((item) => (
                  <span key={item.trim()} className="techPill">
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
