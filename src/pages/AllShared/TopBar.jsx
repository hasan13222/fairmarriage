import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__left">
          <div className="item">
            <CiMail />
            <p>fair@marriage.com</p>
          </div>
          <div className="item">
            <IoCallOutline />
            <p>880-1889-8858</p>
          </div>
        </div>
        <div className="topbar__right">
          <a href="https://www.facebook.com/jamil.butex42">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/jamil-butex42">
            <FaLinkedin />
          </a>
          <a href="https://medium.com/@jamil8305">
            <BsMedium />
          </a>
          <a href="https://www.instagram.com/jamil6393">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
