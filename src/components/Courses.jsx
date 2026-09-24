function Courses() {
  const courses = [
    {
      title: "Database Management Systems",
    },
    {
      title: "Operating Systems",
    },
    {
      title: "Data Structures and Algorithms",
    },
    {
      title: "Computer Networks",
    },
    {
      title: "Machine Learning",
    },
    {
      title: "Deep Learning",
    }
  ];

  return (
    <section id="courses" className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
        Courses Taken
      </h2>

      <div className="space-y-5">
        {courses.map((course, index) => (
          <div key={index} className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-[20px] leading-[1.4] font-medium text-[#f5f5f5] mb-1">
                {course.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;