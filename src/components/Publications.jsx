import { publications } from "../data/publications";

function Publications() {
  return (
    <section>
      <h2>Publications</h2>

      {publications.map((publication, index) => (
        <article className="publication" key={index}>
          <div className="year">{publication.year}</div>

          <div className="publication-content">
            <h3>{publication.title}</h3>

            <p>{publication.authors}</p>

            <p className="muted">{publication.venue}</p>

            <div className="inline-links">
              {publication.links.map((link, i) => (
                <a href={link.url} key={i}>
                  [{link.label}]
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Publications;