function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <h2>Certifications</h2>

      <div className="certification-item">
        <div className="certification-header">
          <div>
            <h3>Data Structures and Algorithms in Java</h3>
            <p className="certification-issuer">NPTEL</p>
          </div>

          <span className="certification-year">2025</span>
        </div>

        <p className="certification-description">
          Completed the NPTEL certification course on Data Structures and
          Algorithms using Java.
        </p>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="certification-link"
        >
          View Certificate →
        </a>
      </div>

      <div className="certification-item">
        <div className="certification-header">
          <div>
            <h3>Student Abroad Program</h3>
            <p className="certification-issuer">Institute of Engineering and Management</p>
          </div>

          <span className="certification-year">2025</span>
        </div>

        <p className="certification-description">
          Successfully completed the Student Abroad Program and received the
          corresponding certification.
        </p>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="certification-link"
        >
          View Certificate →
        </a>
      </div>
    </section>
  );
}

export default Certifications;