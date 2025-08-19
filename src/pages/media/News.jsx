import { useEffect, useState } from "react";
import { fetchNews } from "../../lib/api";

export default function News() {
  const [items, setItems] = useState([]);
  useEffect(() => { fetchNews().then(setItems).catch(() => setItems([])); }, []);

  return (
    <>
      <title>KKW — News & Updates</title>
      <meta name="description" content="Latest news and updates from KKW." />

      <section className="container py-5">
        <h1 className="h2 fw-bold">News & Updates</h1>
        <div className="row g-3 mt-2">
          {items.map(n => (
            <div className="col-12 col-md-6" key={n.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{n.title}</h5>
                  <p className="card-text"><small className="text-body-secondary">{n.date}</small></p>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && <p className="text-body-secondary">No news yet.</p>}
        </div>
      </section>
    </>
  );
}
