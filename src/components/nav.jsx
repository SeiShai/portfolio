import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import logo from "../assets/images/svg/logo.svg";

function Nav() {
  const { scrollY } = useScroll(); 
  const [bgOpacity, setBgOpacity] = useState(0); 

  useEffect(() => {
    const updateOpacity = () => {
      setBgOpacity(0.75); 
    };

    const unsubscribe = scrollY.on("change", updateOpacity);
    return () => unsubscribe();
  }, [scrollY]);

  const links = [
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
  ];

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 flex items-center justify-between pl-9 pr-9 pt-4 pb-4 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(30, 29, 31, ${bgOpacity})`,
        backdropFilter: "blur(10px)", 
      }}
    >
      <img src={logo} alt="logo" className="h-14 cursor-pointer" />
      <div className="text-white flex items-center space-x-32 text-xl">
        <div className="flex space-x-32">
          {links.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="relative cursor-pointer px-4 py-2 text-white transition-colors duration-[400ms] hover:text-[#D8A7B1] group"
            >
              {link.text}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#D8A7B1] transition-all duration-100 group-hover:w-full"></span>
              <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#D8A7B1] transition-all delay-100 duration-100 group-hover:h-full"></span>
              <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#D8A7B1] transition-all delay-200 duration-100 group-hover:w-full"></span>
              <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#D8A7B1] transition-all delay-300 duration-100 group-hover:h-full"></span>
            </a>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/base-shai-frederick-r-a58a01297/"
          className="relative overflow-hidden text-[#D8A7B1] border border-[#D8A7B1] rounded-lg cursor-pointer bg-[#1E1D1F] w-52 h-12 flex items-center justify-center group"
        >
          <span className="absolute bottom-[-150%] right-[-100%] w-full h-full bg-white rounded-full transition-all duration-300 ease-in-out group-hover:bottom-0 group-hover:right-0 scale-150"></span>
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            Let's Connect!
          </span>
        </a>
      </div>
    </motion.div>
  );
}

export default Nav;
