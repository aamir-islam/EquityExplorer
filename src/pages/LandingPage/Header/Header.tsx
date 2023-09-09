import { FC } from "react";
import "./Header.stylesheet.scss";
import { Link } from "react-router-dom";
import myLogo from "../../../constants/images/logo/mylogo.png";
export const Header: FC = () => {
  return (
    <div className="page-content">
      <nav className="header-content">
        <div className="logo">
          <img src={myLogo} alt="my-logo" />
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/path">
            Home
          </Link>
          <Link className="nav-link" to="/path">
            What We Do
          </Link>
          <Link className="nav-link" to="/Login">
            Service
          </Link>
          <Link className="nav-link" to="/path">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};
