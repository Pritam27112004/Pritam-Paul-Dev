import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full bg-[#181818] border-b border-[#3a3a3a]">
      <div className="max-w-[900px] mx-auto px-[14px] min-h-[68px] max-md:min-h-[60px] flex items-center justify-between">
        <Link
          to="/"
          className="text-[#f5f5f5] hover:text-white text-[38px] max-md:text-[29px] leading-none font-normal transition-colors"
        >
          Pritam Paul
        </Link>

        <nav className="flex items-center gap-6 max-md:gap-3.5">
          <Link
            to="/"
            className="text-[#ff4b4b] hover:text-[#ff6666] text-[18px] max-md:text-[16px] font-normal transition-colors"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-[#ff4b4b] hover:text-[#ff6666] text-[18px] max-md:text-[16px] font-normal transition-colors"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;