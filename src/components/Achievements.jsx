function Achievements() {
  const achievements = [
    {
      title: "Secured Department Rank 1 in Second Year[2026]",
      description: "Secured Department Rank 1 based on my 2nd year cgpa i.e 9.48.",
    },
    {
      title: "Finalist at CII Eastern Region Hackathon[2026]",
      description: "Finalist of Confederation of Indian Industry Eastern Region Hackathon.",
    },
    {
      title: "Tech-Trivia 1st Runners up[2026]",
      description: "Got 2nd position in tech quize competition.",
    },
    {
      title: "Smart India Hackathon Collage Qualified[2026]",
      description: "Selected for SIH2026 out of 200+ teams.",
    },
    {
      title: "Finalist at DoubleSlash 4.0",
      description: "Finalist at DoubleSlash 4.0 (40-hour Hackathon) organized by Jadavpur University.",
    },
    {
      title: "NPTEL Course Topper[2025]",
      description: "NPTEL National topper of course Data Structure and Algorithms[IIT KGP].",
    },
    {
      title: "Vice Chancellor’s Award[2025]",
      description: "Awarded the Vice Chancellor’s Award for Overall Academic Excellence and extracurricular activities.",
    },
    {
      title: "Secured Department Rank 1 in First Year[2025]",
      description: "Secured Department Rank 1 based on my 1st year cgpa i.e 9.69.",
    },
    
  ];

  return (
  <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
    <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
      Achievements
    </h2>

    {achievements.map((item, index) => (
      <div
        key={index}
        className="mb-4"
      >
        <p className="text-[#eeeeee] text-[18px] max-md:text-[17px] leading-[1.45]">
          •{" "}
          <span className="text-[#ff4b4b] font-medium">
            {item.title}
          </span>
          : {item.description}
        </p>
      </div>
    ))}
  </section>
);
}

export default Achievements;