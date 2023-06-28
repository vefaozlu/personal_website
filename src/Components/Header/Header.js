import "./Header.scss";
import { Link } from "react-scroll";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";

function Header() {
  return (
    <div className="header">
      <div className="top">
        <div className="welcome">
          <p className="title">Kadir Vefa Ozlu</p>
          <p className="abstract">Computer Engineering Student</p>
          <p className="content">
            Incididunt commodo voluptate quis duis anim aute magna deserunt quis
            eiusmod.
          </p>
        </div>

        <div className="navbar">
          <Link
            className="nlink"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={300}
          >
            <span className="nav-indicator"></span>
            <p>About</p>
          </Link>
          <Link
            className="nlink"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={300}
          >
            <span className="nav-indicator"></span>
            <p>Projects</p>
          </Link>
          <Link
            className="nlink"
            activeClass="active"
            to="certificates"
            spy={true}
            smooth={true}
            duration={300}
          >
            <span className="nav-indicator"></span>
            <p>Certificates</p>
          </Link>
        </div>
      </div>
      <div className="bottom">
        <ul className="contact-list">
        <li>
            <a href="https://github.com/vefaozlu" target="_blank">
              <AiFillGithub size={36} className="icon" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/kadir-vefa-özlü" target="_blank">
              <AiFillLinkedin size={36} className="icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/vefa_ozlu" target="_blank">
              <AiOutlineTwitter size={36} className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
