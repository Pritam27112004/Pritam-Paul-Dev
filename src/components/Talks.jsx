function Talks() {
  const talks = [
    {
      year: 2026,
      title: "Technical Workshops & Knowledge Sessions",
      description:
        "Participated in and contributed to technical learning sessions covering programming, software development and emerging technologies.",
    },
  ];

  return (
    <section>
      <h2>Talks</h2>

      {talks.map((talk, index) => (
        <article className="timeline-entry" key={index}>
          <div className="year">{talk.year}</div>

          <div>
            <h3>{talk.title}</h3>
            <p>{talk.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Talks;