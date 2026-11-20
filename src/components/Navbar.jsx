
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

          <a
            href="https://drive.google.com/file/d/1KOL1IsYzR82NZWerf8ArWq0vxZNV0CJx/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff4b4b] hover:text-[#ff6666] text-[18px] max-md:text-[16px] font-normal transition-colors"
          >
            Resume
          </a>

          <a
            href="https://drive.google.com/file/d/17Ankc_t_dYd2amoUp0N4A-YkXR6Owr2g/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff4b4b] hover:text-[#ff6666] text-[18px] max-md:text-[16px] font-normal transition-colors"
          >
            CV
          </a>

          <a
            href="https://drive.google.com/file/d/1trZFq7J_zy7zMf4Ap1ZqSOOts2elXt7M/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff4b4b] hover:text-[#ff6666] text-[18px] max-md:text-[16px] font-normal transition-colors"
          >
            Research-CV
          </a>


          {/* My Zone Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-[#ff4b4b] hover:text-[#ff6666] text-[18px] max-md:text-[16px] font-normal transition-colors"
            >
              My Zone
              <span className="text-[12px]">▼</span>
            </button>

            <div className="absolute right-0 top-full pt-2 hidden group-hover:block group-focus-within:block min-w-[140px] z-50">
              <div className="bg-[#222222] border border-[#3a3a3a] rounded-md shadow-lg overflow-hidden">
                <Link
                  to="/books"
                  className="block px-4 py-2.5 text-[#ff4b4b] hover:bg-[#333333] hover:text-[#ff6666] text-[16px] transition-colors"
                >
                  Books
                </Link>

                <Link
                  to="/hobbies"
                  className="block px-4 py-2.5 text-[#ff4b4b] hover:bg-[#333333] hover:text-[#ff6666] text-[16px] transition-colors"
                >
                  Hobbies
                </Link>
              </div>
            </div>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;
