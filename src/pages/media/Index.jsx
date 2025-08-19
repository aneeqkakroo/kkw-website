import { Link } from "react-router-dom";

export default function MediaIndex() {
  return (
    <>
      <title>KKW — Media</title>
      <meta name="description" content="News & updates, articles, press releases, and the media gallery." />

      <section className="container py-5">
        <h1 className="h2 fw-bold">Blog / News / Media</h1>
        <ul className="mt-3">
          <li><Link to="/media/news">News & Updates</Link></li>
          <li><Link to="/media/articles">Articles & Opinion</Link></li>
          <li><Link to="/media/press-releases">Press Releases</Link></li>
          <li><Link to="/media/gallery">Media Gallery</Link></li>
        </ul>
      </section>
    </>
  );
}
