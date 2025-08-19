import ProjectCard from "../components/cards/ProjectCard";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg1.jpg";

export default function Home() {
  return (
    <>
      <title>KKW — Home</title>
      <meta name="description" content="KashmirKeWaris — Empowering Kashmiri identity & economic development." />

      <section
      className="border-bottom py-5 text-light position-relative"
      style={{
        backgroundImage: "url('src/assets/bg1.jpg')", // put hero-bg.jpg in public/assets or src/assets
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
        {/* Dark overlay with adjustable opacity */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
          style={{ opacity: 0.6, zIndex: 1 }}  // 👈 change this value (0.3, 0.5, 0.8, etc.)
        ></div>
        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-5 fw-bold">KashmirKeWaris</h1>
          <p className="lead mt-3">
          Empowering Kashmiri identity & economic development through education, skills, and community projects.
          </p>
          <Link to="/our-work" className="btn btn-primary mt-2">
            Explore Our Work
          </Link>
        </div>
      </section>



      <section className="container py-5">
        <h2 className="h3 fw-semibold">Featured Initiatives</h2>
        <div className="row g-4 mt-1">
          {[
            { t: "Scholarships", d: "Need-based & merit scholarships for students." },
            { t: "Internships", d: "Career exposure and mentorship." },
            { t: "Skill Programs", d: "Hands-on training to boost employability." },
          ].map((x,i) => (
            <div className="col-12 col-md-4" key={i}>
              <ProjectCard title={x.t} description={x.d} />
            </div>
          ))}
        </div>
        <div className="mt-3">
          <Link to="/media/news" className="link-primary">See latest news →</Link>
        </div>
      </section>
    </>
  );
}
