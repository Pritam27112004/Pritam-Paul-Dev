function Events() {
  const events = [
    {
      title: "CII Eastern Region Hackathon",
      description:
        "Participated in the hackathon and gained exposure to industry perspectives and problem-solving approaches.",
    },
    {
      title: "Institute of Neurosciences Kolkata Visit",
      description:
        "Participated in an industry/institutional visit and learned about applications of technology in healthcare.",
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