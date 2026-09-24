import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { blogs } from "../data/blogs";

function BlogPost() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <>
        <Navbar />

        <main className="w-full max-w-[900px] mx-auto px-[14px] py-10">
          <h1 className="text-[38px] text-[#f5f5f5] mb-4">Blog Not Found</h1>
          <Link
            to="/blog"
            className="text-[#ff4b4b] hover:text-[#ff6666] text-[18px] transition-colors"
          >
            ← Back to Blog
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="w-full max-w-[900px] mx-auto px-[14px] pt-10 pb-20">
        <p className="text-[#b5b5b5] text-[16px] mb-[5px]">{blog.date}</p>

        <h1 className="max-w-[800px] mt-2 mb-[35px] text-[#f5f5f5] text-[38px] max-md:text-[32px] leading-[1.25] font-normal">
          {blog.title}
        </h1>

        <div className="max-w-[760px]">
          {blog.content.split("\n").map((line, index) => {
            if (line.startsWith("# ")) {
              return (
                <h1
                  key={index}
                  className="text-[28px] font-medium text-[#f5f5f5] mt-[42px] mb-4"
                >
                  {line.replace("# ", "")}
                </h1>
              );
            }

            if (line.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-[23px] font-medium text-[#f5f5f5] mt-9 mb-3.5"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }

            if (line.startsWith("- ")) {
              return (
                <li
                  key={index}
                  className="text-[#eeeeee] text-[18px] max-md:text-[17px] mb-[7px] list-disc ml-5"
                >
                  {line.replace("- ", "")}
                </li>
              );
            }

            if (line.trim() === "") {
              return <br key={index} />;
            }

            return (
              <p
                key={index}
                className="text-[#eeeeee] text-[18px] max-md:text-[17px] leading-[1.65] mb-[18px]"
              >
                {line}
              </p>
            );
          })}
        </div>

        <Link
          to="/blog"
          className="inline-block mt-10 text-[#ff4b4b] hover:text-[#ff6666] text-[18px] transition-colors"
        >
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}

export default BlogPost;