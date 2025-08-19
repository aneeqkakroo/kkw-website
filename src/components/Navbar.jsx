import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png"; // put logo.png inside src/assets/

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Brand logo + text */}
        <Link className="navbar-brand d-flex align-items-center fw-semibold" to="/">
          <img
            src={logo}
            alt="KKW Logo"
            width="32"
            height="32"
            className="me-2"
          />
          KKW
        </Link>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#kkwNav"
          aria-controls="kkwNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="kkwNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink end to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>

            {/* Our Work dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                to="/our-work"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Work
              </NavLink>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/our-work/scholarships">Scholarships</Link></li>
                <li><Link className="dropdown-item" to="/our-work/internships">Internships</Link></li>
                <li><Link className="dropdown-item" to="/our-work/skill-programs">Skill Programs</Link></li>
                <li><Link className="dropdown-item" to="/our-work/community-projects">Community Projects</Link></li>
                <li><Link className="dropdown-item" to="/our-work/economic-development">Economic Development</Link></li>
              </ul>
            </li>

            {/* Updates dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                to="/media"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Updates
              </NavLink>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/media/news">News</Link></li>
                <li><Link className="dropdown-item" to="/media/articles">Articles</Link></li>
                <li><Link className="dropdown-item" to="/media/press-releases">Press Releases</Link></li>
                <li><Link className="dropdown-item" to="/media/gallery">Media Gallery</Link></li>
              </ul>
            </li>

            {/* Get Involved dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                to="/get-involved"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Get Involved
              </NavLink>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/get-involved/volunteer">Volunteer</Link></li>
                <li><Link className="dropdown-item" to="/get-involved/partner">Partner</Link></li>
                <li><Link className="dropdown-item" to="/get-involved/donate">Donate</Link></li>
                <li><Link className="dropdown-item" to="/get-involved/careers">Careers</Link></li>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
