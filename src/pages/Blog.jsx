import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import Navbar from "../components/Navbar";

function Blog() {
  return (
    <>
      <Navbar />

      <main className="w-full max-w-[900px] mx-auto px-[14px] pt-[35px] pb-[70px]">
        <header className="pb-[30px] border-b border-[#303030]">
          <h1 className="text-[38px] max-md:text-[34px] leading-[1.2] font-normal text-[#f5f5f5] mb-2.5">
            Blog
          </h1>

          <p className="max-w-[700px] text-[#eeeeee] text-[18px] max-md:text-[17px] mb-0 leading-[1.45]">
            Thoughts, technical notes, experiments and lessons
            from my journey in technology and research.
          </p>
        </header>

        {blogs.map((blog) => (
          <article className="py-7 border-b border-[#303030]" key={blog.slug}>
            <p className="text-[#b5b5b5] text-[16px] mb-[5px]">{blog.date}</p>

            <h2 className="text-[23px] leading-[1.35] font-medium mb-[9px]">
              <Link
                to={`/blog/${blog.slug}`}
                className="text-[#ff4b4b] hover:text-[#ff6666] hover:underline transition-colors"
              >
                {blog.title}
              </Link>
            </h2>

            <p className="text-[#eeeeee] text-[18px] max-md:text-[17px] leading-[1.45] mb-3">
              {blog.excerpt}
            </p>

            <Link
              to={`/blog/${blog.slug}`}
              className="text-[#ff4b4b] hover:text-[#ff6666] hover:underline text-[17px] transition-colors"
            >
              Read more →
            </Link>
          </article>
        ))}
      </main>
    </>
  );
}

export default Blog;