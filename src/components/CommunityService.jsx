import { communityService } from "../data/communityService";
function CommunityService() {
  

  return (
    <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
        Community Service
      </h2>

      {communityService.map((item, index) => (
        <article
          key={index}
          className="grid grid-cols-[85px_1fr] max-md:grid-cols-1 gap-x-[0px] max-md:gap-y-1 mb-7"
        >
          <div className="text-[18px] max-md:text-[17px] font-medium text-[#f5f5f5] leading-[1.5]"></div>

          <div>
            <h3 className="text-[20px] leading-[1.4] font-medium text-[#ff4b4b] mb-[5px]">
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

export default CommunityService;