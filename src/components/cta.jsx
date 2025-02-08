import { useState } from "react";
import fb from "../assets/images/svg/fb.svg";
import ig from "../assets/images/svg/ig.svg";
import linkedin from "../assets/images/svg/linkedin.svg";
import github from "../assets/images/svg/github.svg";

function Cta() {
    return (
        <>
            <a href="https://www.facebook.com/shaifrederick.base.39"><img src={fb} alt="Facebook" className="w-12 h-12 transition transform hover:scale-110 hover:rotate-12 cursor-pointer" /></a>
            <a href="https://www.instagram.com/http.shachi/"><img src={ig} alt="Instagram" className="w-12 h-12 transition transform hover:scale-110 hover:-rotate-12 cursor-pointer" /></a>
            <a href="https://www.linkedin.com/in/base-shai-frederick-r-a58a01297/"><img src={linkedin} alt="LinkedIn" className="w-12 h-12 transition transform hover:scale-110 hover:rotate-12 cursor-pointer" /></a>
            <a href="https://github.com/SeiShai"><img src={github} alt="Github" className="w-12 h-12 transition transform hover:scale-110 hover:-rotate-12 cursor-pointer" /></a>
        </>
    );
}

export default Cta;