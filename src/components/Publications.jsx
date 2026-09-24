import { publications } from "../data/publications";

function Publications() {
  return (
    <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
        Publications
      </h2>

      {publications.map((publication, index) => (
        <article
          key={index}
          className="grid grid-cols-[85px_1fr] max-md:grid-cols-1 gap-x-[22px] max-md:gap-y-1 mb-7"
        >
          <div className="text-[18px] max-md:text-[17px] font-medium text-[#f5f5f5] leading-[1.5]">
            {publication.year}
          </div>

          <div className="min-w-0">
            <h3 className="text-[19px] font-medium text-[#f5f5f5] mb-[7px] leading-[1.4]">
              {publication.title}
            </h3>

            <p className="text-[#eeeeee] text-[18px] max-md:text-[17px] leading-[1.45] mb-1.5">
              {publication.authors}
            </p>

            <p className="text-[#b5b5b5] text-[17px] leading-[1.45] mb-1.5">
              {publication.venue}
            </p>

            <div className="flex flex-wrap gap-3.5 mt-[7px]">
              {publication.links.map((link, i) => (
                <a
                  href={link.url}
                  key={i}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#ff4b4b] hover:text-[#ff6666] text-[17px] transition-colors"
                >
                  [{link.label}]
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Publications;