function Leadership() {
  const leadership = [
    {
      year: "2026",
      role: "IEEE Student Activities",
      description:
        "Contributed to student technical activities, workshops, outreach programs and community initiatives.",
    },
    {
      year: "2026",
      role: "Technical & Conference Activities",
      description:
        "Contributed to technical planning and development activities for academic conferences and student initiatives.",
    },
  ];

  return (
    <section>
      <h2>Leadership</h2>

      {leadership.map((item, index) => (
        <article className="timeline-entry" key={index}>
          <div className="year">{item.year}</div>

          <div>
            <h3>{item.role}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Leadership;