function Books() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Development",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      category: "Productivity",
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      category: "Technology",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming",
    },
  ];

  return (
    <section id="books" className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
        Books I Love
      </h2>

      <div className="space-y-5">
        {books.map((book, index) => (
          <div key={index} className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-[20px] leading-[1.4] font-medium text-[#f5f5f5] mb-1">
                {book.title}
              </h3>
              <p className="text-[#b5b5b5] text-[17px] leading-[1.45] mb-0">
                {book.author}
              </p>
            </div>

            <span className="text-[18px] max-md:text-[17px] font-medium text-[#f5f5f5] leading-[1.5] shrink-0">
              {book.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Books;