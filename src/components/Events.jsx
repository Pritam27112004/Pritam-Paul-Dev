function Events() {
  const events = [
    {
      title: "IEM Research Center",
      description:
        "Visited IEM Research Center at IIT KGP Research Park to see ongoing Research.",
    },
    {
      title: "Visited IN-K",
      description:
        "Visited institute of Neuroscience Kolkata, India for understanding ongoing Research in Neuroscience.",
    },
    {
      title: "Participated in Amazon ML Challenge 2026[27.09.2026]",
      description:
        "",
    },
    {
      title: "Brickwise 2026",
      description:
        "4 days data engineering and databricks Bootcamp organized by Institute of Engineering and Management Kolkata.",
    },
    {
      title: "Solution Challenge 2026",
      description:
        "Partcipated in Google Solution Challenge 2026.",
    },

    {
      title: "ET AI Hackathon 2.0 2026",
      description:
        "Partcipated in AI Hackathon by The Economics Time",
    },
    {
      title: "Campus Crew AI Innovation Challenge 2026",
      description:
        "",
    },
    {
      title: "Perceptrix 2025",
      description:
        "GenAI Bootcamp by ACM",
    },
    {
      title: "App and Web Development bootcamp by ACM India 2024",
      description:
        "",
    },
    {
      title: "AI ML workshop by GFG [02.06.2025]]",
      description:
        "",
    },
    {
      title: "Binary Brains 5.0 , Technical Quize Competition [28.01.2025]",
      description:
        "",
    },
    {
      title: "Energia 2026 , Sustainability Ideathon[29.01.2026]",
      description:
        "",
    },
    {
      title: "Tata Crubicle Campus Quize 2025 , Organised by TATA Group",
      description:
        "",
    },
    {
      title: "CYBERX 2026 , Cyber Security Bootcamp by ACM[07.02.2026]",
      description:
        "",
    },
    {
      title: "Adobe University Hackathon 2026",
      description:
        "",
    },
    {
      title: "Product Management Case Study Competition by India Institute of Management Ahmedabad 2026",
      description:
        "",
    },
    {
      title: "Bootcamp on Enterprise Cloud Security by GeeksForGeeks [26.06.2025]",
      description:
        "",
    },
    {
      title: "Industrial Visit to Indian Space Research Organization [east region] [28.09.2026]",
      description:
        "",
    },
    {
      title: "Industrial Visit to Variable Energy Cyclotron Center Kolkata[02.11.2026]",
      description:
        "",
    },
  ];

  return (
    <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
        Events Participated
      </h2>

      {events.map((item, index) => (
        <div key={index} className="mb-4">
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

export default Events;