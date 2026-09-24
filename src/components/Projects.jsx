import { projects } from "../data/projects";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <article className="project" key={index}>
          <div className="year">{project.year}</div>

          <div className="project-content">
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p className="muted">{project.technologies}</p>

            {project.link !== "#" && (
              <a href={project.link} target="_blank">
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