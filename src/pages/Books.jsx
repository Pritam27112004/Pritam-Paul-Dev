
const books = [
  {
    id: 1,
    title: "Atomic Habits",
    cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
  },
  {
    id: 2,
    title: "Deep Work",
    cover: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    cover: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
  },
  {
    id: 4,
    title: "Thinking, Fast and Slow",
    cover: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
  },
  {
    id: 5,
    title: "The Pragmatic Programmer",
    cover: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",
  },
  {
    id: 6,
    title: "Zero to One",
    cover: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
  },
  {
    id: 7,
    title: "The Power of Your Subconscious Mind by Joseph Murphy",
    cover: "https://covers.openlibrary.org/b/olid/OL27948099M-L.jpg",
  },
   {
  id: 8,
  title: "Life's Amazing Secrets",
  cover: "https://covers.openlibrary.org/b/olid/OL32180582M-L.jpg",
},
{
  id: 9,
  title: "Win Your Inner Battles",
  cover: "https://covers.openlibrary.org/b/olid/OL40789483M-L.jpg",
},
{
  id: 10,
  title: "Do It Today",
  cover: "https://covers.openlibrary.org/b/olid/OL47084017M-L.jpg",
},
{
  id: 11,
  title: "Ikigai: The Japanese Secret to a Long and Happy Life",
  cover: "https://covers.openlibrary.org/b/olid/OL27306019M-L.jpg",
},
{
  id: 12,
  title: "The Ikigai Journey",
  cover: "https://covers.openlibrary.org/b/olid/OL29456676M-L.jpg",
},

];

function Books() {
  return (
    <div className="min-h-screen bg-[#181818] text-[#f5f5f5] px-5 py-16">
      <div className="max-w-[900px] mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#ff4b4b] text-sm uppercase tracking-[4px] mb-3">
            My Personal Library
          </p>

          <h1 className="text-5xl max-md:text-4xl font-semibold mb-5">
            Books<span className="text-[#ff4b4b]">.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-[650px] leading-relaxed">
            A collection of books that shape my thinking,
            expand my knowledge, and inspire me to explore
            new perspectives.
          </p>
        </div>

        {/* Book Gallery */}
        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="group bg-[#202020] border border-[#333333] rounded-lg overflow-hidden hover:border-[#ff4b4b] transition-all duration-300"
            >
              <div className="h-[260px] max-md:h-[220px] bg-[#222222] flex items-center justify-center p-5">
                <img
                  src={book.cover}
                  alt={book.title}
                  loading="lazy"
                  className="h-full max-w-full object-contain shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center text-lg font-medium mt-4 px-4">
                {book.title}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-[#333] text-center">
          

          <p className="text-[#ff4b4b] text-xs mt-3 tracking-widest">
            #AlwaysLearning........
          </p>
        </div>

      </div>
    </div>
  );
}

export default Books;
