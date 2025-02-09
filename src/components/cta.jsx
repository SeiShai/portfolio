import fb from "../assets/images/svg/fb.svg";
import ig from "../assets/images/svg/ig.svg";
import linkedin from "../assets/images/svg/linkedin.svg";
import github from "../assets/images/svg/github.svg";

const socialLinks = [
  { href: "https://www.facebook.com/shaifrederick.base.39", img: fb, alt: "Facebook" },
  { href: "https://www.instagram.com/http.shachi/", img: ig, alt: "Instagram" },
  { href: "https://www.linkedin.com/in/base-shai-frederick-r-a58a01297/", img: linkedin, alt: "LinkedIn" },
  { href: "https://github.com/SeiShai", img: github, alt: "GitHub" }
];

function Cta() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          <img
            src={link.img}
            alt={link.alt}
            className="w-12 h-12 transition-transform transform hover:scale-110 hover:rotate-12 cursor-pointer"
          />
        </a>
      ))}
    </div>
  );
}

export default Cta;
