import {
  FaGithub,
  FaFileAlt,
  FaLinkedin,
  FaTwitter,
  FaResearchgate,
  FaGoogle,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

import { MdEmail, MdCode } from "react-icons/md";

function Hero() {
  const linkStyle = {
    color: "#ff4b4b",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    textDecorationThickness: "1px",
  };

  const iconStyle = {
    display: "inline",
    verticalAlign: "middle",
    marginRight: "4px",
  };

  return (
    <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
      <div className="flex justify-between items-center gap-[40px] max-md:flex-col max-md:items-start">

        {/* LEFT SIDE - TEXT */}
        <div className="flex-1 min-w-0">

          <h2 className="text-[29px] max-md:text-[27px] leading-[1.25] font-semibold text-[#f5f5f5] mb-[25px]">
            About Me
          </h2>

          <p className="text-[#eeeeee] text-[18px] max-md:text-[17px] leading-[1.45] mb-4">
            Kolkata, India
          </p>

          <p className="text-[#eeeeee] text-[18px] max-md:text-[17px] leading-[1.55]">
            Hi, I am Pritam Paul, I am passionate about Problem Solving and
            Engineering. I am currently learning Software Development and Data
            Science. My domain hovers around Software Engineering, Data
            Engineering, Machine Learning and Deep Learning. I previously
            worked at IEM IEDC Lab, empwr.edNEXT. Apart from this I enjoy
            teaching and learning new things in tech everyday.

            <span className="text-[#ff4b4b]"> #ProblemSolving</span>{" "}
            <span className="text-[#ff4b4b]">#AlwaysLearning</span>{" "}
            <span className="text-[#ff4b4b]">#Tech</span>
          </p>

          {/* SOCIAL LINKS */}
          <div className="mt-5 leading-[2]">
            <span>

              {/* GitHub */}
              <a
                href="https://github.com/Pritam27112004"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                <FaGithub size={17} style={iconStyle} />
                GitHub
              </a>

              &nbsp;&nbsp;&nbsp;&nbsp;

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/1HNK148VHFSKAU2gw69C1AXqAIWbCxoQj/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                <FaFileAlt size={17} style={iconStyle} />
                Resume
              </a>

              &nbsp;&nbsp;&nbsp;&nbsp;

              {/* CV */}
              <a
                href="https://drive.google.com/file/d/1nh1x2qVs3oioEjS3ApKKzHZSF7zeK0IF/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                <FaFileAlt size={17} style={iconStyle} />
                CV
              </a>

              &nbsp;&nbsp;&nbsp;&nbsp;

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/Pr27-2004Paul/"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                <SiLeetcode size={17} style={iconStyle} />
                Leetcode
              </a>

              &nbsp;&nbsp;&nbsp;&nbsp;

              {/* GeeksForGeeks */}
              <a
                href="https://www.geeksforgeeks.org/profile/paulpriynf6"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                <SiGeeksforgeeks size={17} style={iconStyle} />
                GeeksForGeeks
              </a>

              &nbsp;&nbsp;&nbsp;&nbsp;
               <br />
              {/* Coding / Codolio */}
              <a
                href="https://codolio.com/profile/pritampp"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                <MdCode size={18} style={iconStyle} />
                Coding
              </a>

              &nbsp;&nbsp;&nbsp;&nbsp;

              {/* ResearchGate */}
              <a
                href="https://www.researchgate.net/profile/Pritam-Paul-12"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                <FaResearchgate size={17} style={iconStyle} />
                Research Gate
              </a>

              &nbsp;&nbsp;&nbsp;&nbsp;

              {/* Google Scholar */}
              <a
                href="https://scholar.google.com/citations?user=dH8uodsAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                <FaGoogle size={17} style={iconStyle} />
                Google Scholar
              </a>

              &nbsp;&nbsp;&nbsp;&nbsp;

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pritam-paul-530660306/"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                <FaLinkedin size={17} style={iconStyle} />
                LinkedIn
              </a>

              &nbsp;&nbsp;&nbsp;&nbsp;
              <br />

              {/* Twitter / X */}
              <a
                href="https://x.com/pritam_pau73310"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                <FaTwitter size={17} style={iconStyle} />
                Twitter(X)
              </a>

            </span>
          </div>

          {/* CONTACT */}
          <h3 className="text-[#eeeeee] text-[18px] max-md:text-[17px] mt-5">
            Contact Me :{" "}
            <span
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationThickness: "1px",
              }}
            >
              <MdEmail
                size={18}
                style={{
                  display: "inline",
                  verticalAlign: "middle",
                  marginRight: "4px",
                }}
              />
              paulpritam417@gmail.com
            </span>
          </h3>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="w-[220px] h-[330px] flex-shrink-0 ml-auto max-md:w-[180px] max-md:h-[270px] max-md:ml-0">
          <img
            src="/profile.jpeg"
            alt="Pritam Paul"
            className="w-full h-full object-cover rounded-[16px] block"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;