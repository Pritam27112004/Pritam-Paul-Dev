function Experience() {
  const experiences = [
    {
      year: "March, 2026 - July, 2026 [Kolkata, India]",
      role: "Research Intern",
      organization: "IEM-IEDC Lab",
      description:
        "Developed a complete EEG-based stress classification pipeline involving signal quality assessment, preprocessing (baseline correction, Butterworth band-pass filtering, notch filtering, bipolar montage, ICA), window segmentation, handcrafted time-domain, Hjorth, and frequency-domain feature extraction, Z-score normalization, PCA/SVD-based dimensionality reduction, binary stress labeling, train- test splitting, and SVM (RBF kernel) classification for low/high stress prediction, followed by comprehensive performance evaluation. Tech: Python, MNE-Python, SciPy, NumPy, Pandas, Scikit-learn, Matplotlib.",
    },
    {
      year: "May, 2025 - Nov, 2025 [Remote, Singapore]",
      role: "Quality Assurance Engineer",
      organization: "empwr.edNEXT",
      description:
        "Conducted comprehensive manual testing of web applications, designed and executed structured test cases and test plans, identified and reported critical defects, and collaborated closely with developers to track and resolve issues, improving overall software quality,reliability, and platform performance. Tech: Manual Testing, Test Case Design"
    },
  ];

  return (
    <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
        Experience
      </h2>

      {experiences.map((item, index) => (
        <article
          key={index}
          className="grid grid-cols-[85px_1fr] max-md:grid-cols-1 gap-x-[22px] max-md:gap-y-1 mb-7"
        >
          <div className="text-[18px] max-md:text-[17px] font-medium text-[#f5f5f5] leading-[1.5]">
            {item.year}
          </div>

          <div>
            <h3 className="text-[20px] leading-[1.4] font-medium text-[#f5f5f5] mb-[5px]">
              {item.role}
            </h3>
            <p className="text-[#ff4b4b] text-[18px] max-md:text-[17px] leading-[1.45] mb-2">
              {item.organization}
            </p>
            <p className="text-[#eeeeee] text-[18px] max-md:text-[17px] leading-[1.45] mb-2">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Experience;