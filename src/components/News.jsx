import { news } from "../data/news";

function News() {
  return (
    <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
        News
      </h2>

      {news.map((group) => (
        <div
          key={group.year}
          className="grid grid-cols-[85px_1fr] max-md:grid-cols-1 gap-x-[22px] max-md:gap-y-1 mb-6"
        >
          <div className="text-[18px] max-md:text-[17px] font-medium text-[#f5f5f5] leading-[1.5]">
            {group.year}
          </div>

          <div className="min-w-0">
            {group.items.map((item, index) => (
              <p key={index} className="text-[#eeeeee] text-[18px] max-md:text-[17px] leading-[1.45] mb-2">
                • {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default News;