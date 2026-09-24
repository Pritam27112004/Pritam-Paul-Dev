function Certifications() {
  const certifications = [
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Coursera",
      
    },
    {
      title: "Oracle Java Foundations",
      issuer: "Coursera",
      
    },
    {
      title: "Programming in Java",
      issuer: "IIT KGP[NPTEL]",
      
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "IIT KGP[NPTEL]",
      
    },
    {
      title: "Database Management Systems",
      issuer: "IIT KGP[NPTEL]",
      
    },
  ];

  return (
    <section id="certifications" className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
        Certifications
      </h2>

      <div className="space-y-6">
        {certifications.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[20px] leading-[1.4] font-medium text-[#f5f5f5] mb-1">
                  {item.title}
                </h3>
                <p className="text-[#b5b5b5] text-[17px] leading-[1.45] mb-0">
                  {item.issuer}
                </p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;