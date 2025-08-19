import { Link } from "react-router-dom";

export default function OurWorkIndex() {
  return (
    <>
      <title>KKW — Our Work</title>
      <meta name="description" content="Scholarships, Internships, Skill Programs, Community Projects, Economic Development." />

      <section className="container py-5">
        <h1 className="h2 fw-bold">Our Work</h1>
        <ul className="mt-3">
          <li><Link to="/our-work/scholarships">Scholarships</Link></li>
          <li><Link to="/our-work/internships">Internships</Link></li>
          <li><Link to="/our-work/skill-programs">Skill Development Programs</Link></li>
          <li><Link to="/our-work/community-projects">Community Projects</Link></li>
          <li><Link to="/our-work/economic-development">Economic Development Initiatives</Link></li>
        </ul>
      </section>
    </>
  );
}
