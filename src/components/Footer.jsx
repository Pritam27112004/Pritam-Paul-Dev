function Footer() {
  return (
    <footer className="py-[30px] pb-10 flex justify-between gap-5 text-[#999999] text-[14px] max-md:flex-col max-md:gap-[5px]">
      <p className="m-0">
        © {new Date().getFullYear()} Pritam Paul
      </p>

      <p className="m-0">
        Built with React · Vite
      </p>
    </footer>
  );
}

export default Footer;