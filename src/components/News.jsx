import { news } from "../data/news";

function News() {
  return (
    <section>
      <h2>News</h2>

      {news.map((group) => (
        <div className="year-group" key={group.year}>
          <div className="year">{group.year}</div>

          <div className="year-content">
            {group.items.map((item, index) => (
              <p key={index}>• {item}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default News;