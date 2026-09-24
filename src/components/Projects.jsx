import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
        Projects
      </h2>

      {projects.map((project, index) => (
        <article
          key={index}
          className="grid grid-cols-[85px_1fr] max-md:grid-cols-1 gap-x-[22px] max-md:gap-y-1 mb-[27px]"
        >
          <div className="text-[18px] max-md:text-[17px] font-medium text-[#f5f5f5] leading-[1.5]">
            {project.year}
          </div>

          <div className="min-w-0">
            <h3 className=" text-[20px] leading-[1.4] font-medium text-[#f5f5f5] mb-[7px]">
              {project.title}
            </h3>

            <p className="text-[#eeeeee] text-[18px] max-md:text-[17px] leading-[1.45] mb-3">
              {project.description}
            </p>

            <p className="text-[#b5b5b5] text-[17px] leading-[1.45] mt-1 mb-3">
              {project.technologies}
            </p>

            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-[#ff4b4b] hover:text-[#ff6666] text-[17px] transition-colors"
              >
                [Project]
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}

export default Projects;