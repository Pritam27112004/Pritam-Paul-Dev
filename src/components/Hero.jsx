function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-text">

          <h1>Pritam Paul</h1>

          <p className="hero-role">
            Computer Science Student · Developer · Researcher
          </p>

          <p>
            I am a Computer Science student interested in
            software development, artificial intelligence,
            machine learning, data engineering and research.
          </p>

          <div className="social-links">

            <a
              href="https://github.com/Pritam27112004"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="/resume.pdf" target="_blank">
              Resume
            </a>

          </div>

        </div>

        <div className="hero-image">
          <img
            src="/profile.jpeg"
            alt="Pritam Paul"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;