function Achievements() {
  const achievements = [
    {
      year: 2026,
      text: "NPTEL National Topper in Data Structure and Algorithm in JAVA.",
    },
    {
      year: 2026,
      text: "1st Runner Up in IEEE Computer Society Project Competition.",
    },
    {
      year: 2026,
      text: "Recognized for academic and technical achievements.",
    },
  ];

  return (
    <section>
      <h2>Achievements</h2>

      {achievements.map((item, index) => (
        <div className="year-group" key={index}>
          <div className="year">{item.year}</div>
          <div className="year-content">
            <p>• {item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Achievements;