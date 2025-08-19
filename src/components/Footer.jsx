export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
        
        {/* Left side */}
        <small>© {new Date().getFullYear()} KashmirKeWaris</small>
        
        {/* Right side - social icons */}
        <div className="d-flex gap-3">
          <a
            href="https://facebook.com/kashmirkewaris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-5"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://instagram.com/kashmirkewaris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-5"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://twitter.com/kashmirkewaris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-5"
          >
            <i className="bi bi-twitter-x"></i>
          </a>
          <a
            href="https://linkedin.com/company/kashmirkewaris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-5"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="mailto:kashmirkewaris@gmail.com"
            className="text-light fs-5"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
