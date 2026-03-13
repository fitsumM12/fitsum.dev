import { publications } from "../data";

export default function ResearchPage() {
  return (
    <section className="section">
      <div className="sectionTitle withArt">
        <div>
          <h2>Research Exposure</h2>
          <p>Selected publications and research work in medical imaging AI.</p>
        </div>
        <div className="sectionArt">
          <img src="/section-research.svg" alt="Research illustration" />
        </div>
      </div>
      <div className="stack timeline">
        {publications.map((pub) => (
          <div key={pub.title} className="card timelineItem">
            <div className="timelineContent">
              <h3>{pub.title}</h3>
              <p className="subtitle">{pub.venue}</p>
              <p className="timelineDate">{pub.date}</p>
              {pub.doi ? (
                <a
                  className="doiLink"
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  DOI: {pub.doi}
                </a>
              ) : null}
              <p>{pub.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
