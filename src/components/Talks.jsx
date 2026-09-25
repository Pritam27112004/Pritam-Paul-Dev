function Talks() {
  const talks = [
    {
      year: 2026,
      title: "Summer of Code [Taught DSA]",
      description:
        "4 day DSA Bootcamp organised by IEEE Computer Society UEMK Chapter, taught foundation of DSA and introduction to graph and DP.",
    },
    {
      year: 2025,
      title: "Teaching on YouTube:",
      description:
        "@Pritam Paul is the channel name where i teach tech content",
    },
  ];

  return (
    <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
        Talks
      </h2>

      {talks.map((talk, index) => (
        <article
          key={index}
          className="grid grid-cols-[85px_1fr] max-md:grid-cols-1 gap-x-[22px] max-md:gap-y-1 mb-7"
        >
          <div className="text-[18px] max-md:text-[17px] font-medium text-[#f5f5f5] leading-[1.5]">
            {talk.year}
          </div>

          <div>
            <h3 className="text-[#ff4b4b] text-[20px] leading-[1.4] font-medium text-[#f5f5f5] mb-[5px]">
              {talk.title}
            </h3>
            <p className="text-[#eeeeee] text-[18px] max-md:text-[17px] leading-[1.45] mb-2">
              {talk.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Talks;