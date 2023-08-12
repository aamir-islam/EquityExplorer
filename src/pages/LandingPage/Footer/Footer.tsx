import { FC } from "react";
import { Link } from "react-router-dom";
import "./Footer.stylesheet.scss";
import myLogo from "../../../constants/images/logo/mylogo.png";
export const Footer: FC = () => {
  return (
    <div className="header-content">
      <div className="grid-item">
        <img src={myLogo} alt="my-logo" />
        <div className="footer-item">
          <p>
            Leading digital agency with solid design <br /> and development
            expertise. We build <br /> readymade websites, mobile applications,{" "}
            <br />
            and elaborate online business services.
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h2>What We Do</h2>
          <div className="footer-item">
            <Link className="nav-link" to="/path">
              Web Design
            </Link>
            <Link className="nav-link" to="/path">
              App Design
            </Link>
            <Link className="nav-link" to="/path">
              Social Media Manager
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <h2>Company</h2>
          <div className="footer-item">
            <Link className="nav-link" to="/path">
              About Us
            </Link>
            <Link className="nav-link" to="/path">
              Career
            </Link>
            <Link className="nav-link" to="/path">
              Become Investor
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <h2>Support</h2>
          <div className="footer-item">
            <Link className="nav-link" to="/path">
              FAQ
            </Link>
            <Link className="nav-link" to="/path">
              Policy
            </Link>
            <Link className="nav-link" to="/path">
              Business
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <h2>Contact</h2>
          <div className="footer-item">
            <Link className="nav-link" to="/path">
              WhatsApp
            </Link>
            <Link className="nav-link" to="/path">
              Support 24
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
