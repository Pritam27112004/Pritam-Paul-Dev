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

        <main className="container">
          <h1>Blog Not Found</h1>
          <Link to="/blog">← Back to Blog</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="container blog-post">
        <p className="blog-date">{blog.date}</p>

        <h1>{blog.title}</h1>

        <div className="blog-content">
          {blog.content.split("\n").map((line, index) => {
            if (line.startsWith("# ")) {
              return <h1 key={index}>{line.replace("# ", "")}</h1>;
            }

            if (line.startsWith("## ")) {
              return <h2 key={index}>{line.replace("## ", "")}</h2>;
            }

            if (line.startsWith("- ")) {
              return <li key={index}>{line.replace("- ", "")}</li>;
            }

            if (line.trim() === "") {
              return <br key={index} />;
            }

            return <p key={index}>{line}</p>;
          })}
        </div>

        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}

export default BlogPost;