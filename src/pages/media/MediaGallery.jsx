export default function MediaGallery() {
  return (
    <>
      <title>KKW — Media Gallery</title>
      <meta name="description" content="Photos and videos from KKW projects and events." />

      <section className="container py-5">
        <h1 className="h2 fw-bold">Media Gallery</h1>
        <div className="row g-2 mt-2">
          {[...Array(8)].map((_, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="ratio ratio-4x3 bg-light border rounded"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
