import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const handleClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={handleClick}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Tien Phuc{" "}
            <span className="sm:block hidden">| Fullstack Developer</span>
          </p>
          <ul className="list-none hidden sm:flex flex-grow gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
