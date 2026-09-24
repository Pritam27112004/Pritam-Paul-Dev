function Events() {
  const events = [
    {
      year: 2026,
      title: "CII Eastern Region Hackathon",
      description:
        "Participated in the hackathon and gained exposure to industry perspectives and problem-solving approaches.",
    },
    {
      year: 2026,
      title: "Institute of Neurosciences Kolkata Visit",
      description:
        "Participated in an industry/institutional visit and learned about applications of technology in healthcare.",
    },
  ];

  return (
    <section>
      <h2>Events Participated</h2>

      {events.map((event, index) => (
        <article className="timeline-entry" key={index}>
          <div className="year">{event.year}</div>

          <div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Events;