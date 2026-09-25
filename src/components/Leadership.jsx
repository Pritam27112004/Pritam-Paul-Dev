function Leadership() {
  const leadership = [
    {
      role: "WebMaster",
      description:
        "IEEE Computer Society University of Engineering and Management Kolkata Student Branch Chapter [April 2026 - present].",
    },
    {
      role: "WebMaster",
      description:
        "IEDC Lab Department of Cyber Security [September 2026 to present]",
    },
    {
      role: "Project Contributor",
      description:
        "IEDC Lab [Feb 2026 to present]",
    },
    {
      role: "Web Developer",
      description:
        "Computer society India University of Engineering and Management Kolkata Chapter [July 2025 - Aprit 2026]",
    },
    {
      role: "Web Developer",
      description:
        "IEEE MTTS University of Engineering and Management Kolkata Student Chapter [jan 2025 - April 2026]",
    },
    {
      role: "Operational Management",
      description:
        "IEEE MTTS University of Engineering and Management Kolkata Student Chapter [jan 2025 - April 2026]",
    },
    {
      role: "Coordinator and Event Management",
      description:
        "Innofusion 4.0 Haachatjon 2026",
    },
    {
      role: "Student Body Advisor",
      description:
        "IEEE MTTS University of Engineering and Management Kolkata Student Chapter [may 2026 to July 2026]",
    },
    {
      role: "Event operation and Management",
      description:
        "Driveblaze 2025 hackathon",
    },
    {
      role: "Event Organiser",
      description:
        "CodePulse 2026, Ucode 13 2026, Smart India Hackathon 2026 University level, UMTTS Summit 2026, Cyber-Ops 2026 bootcamp, summer od code 2026 dsa bootcamp, hands on java bootcamp 2026, crexion 2025 , pitch imperfect 2026, Connecttech 2025",
    },
    {
      role: "Tech Contributor",
      description:
        "Geeks for geeks Student Branch Chapter",
    },
    {
      role: "Student Member",
      description:
        "IEEE,  IEEE Computer Society, IEEE MTTS [jan 2025 to present]",
    },
    
  ];

  return (
    <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
        Leadership
      </h2>

      {leadership.map((item, index) => (
        <article
          key={index}
          className="grid grid-cols-[85px_1fr] max-md:grid-cols-1 gap-x-[22px] max-md:gap-y-1 mb-7"
        >
          <div className="text-[18px] max-md:text-[17px] font-medium text-[#f5f5f5] leading-[1.5]">
            
          </div>

          <div>
            <h3 className="text-[#ff4b4b] text-[20px] leading-[1.4] font-medium text-[#f5f5f5] mb-[5px]">
              {item.role}
            </h3>
            <p className="text-[#eeeeee] text-[18px] max-md:text-[17px] leading-[1.45] mb-2">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Leadership;