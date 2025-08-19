import { Link } from "react-router-dom";

export default function GetInvolvedIndex() {
  return (
    <>
      <title>KKW — Get Involved</title>
      <meta name="description" content="Volunteer, partner, donate, or explore careers with KKW." />

      <section className="container py-5">
        <h1 className="h2 fw-bold">Get Involved</h1>
        <ul className="mt-3">
          <li><Link to="/get-involved/volunteer">Volunteer with Us</Link></li>
          <li><Link to="/get-involved/partner">Partner with Us</Link></li>
          <li><Link to="/get-involved/donate">Donate / Support</Link></li>
          <li><Link to="/get-involved/careers">Careers</Link></li>
        </ul>
      </section>
    </>
  );
}
