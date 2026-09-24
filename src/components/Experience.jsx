function Experience() {
  const experiences = [
    {
      year: "2026",
      role: "Student Developer / Technical Contributor",
      organization: "Institute of Engineering and Management",
      description:
        "Worked on academic, research and software development projects involving web technologies, AI and geospatial systems.",
    },
  ];

  return (
    <section>
      <h2>Experience</h2>

      {experiences.map((item, index) => (
        <article className="timeline-entry" key={index}>
          <div className="year">{item.year}</div>

          <div>
            <h3>{item.role}</h3>
            <p>{item.organization}</p>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Experience;