import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import Navbar from "../components/Navbar";

function Blog() {
  return (
    <>
      <Navbar />

      <main className="container blog-page">
        <header className="blog-header">
          <h1>Blog</h1>

          <p>
            Thoughts, technical notes, experiments and lessons
            from my journey in technology and research.
          </p>
        </header>

        {blogs.map((blog) => (
          <article className="blog-card" key={blog.slug}>
            <p className="blog-date">{blog.date}</p>

            <h2>
              <Link to={`/blog/${blog.slug}`}>
                {blog.title}
              </Link>
            </h2>

            <p>{blog.excerpt}</p>

            <Link to={`/blog/${blog.slug}`}>
              Read more →
            </Link>
          </article>
        ))}
      </main>
    </>
  );
}

export default Blog;