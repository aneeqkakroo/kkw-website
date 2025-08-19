import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: await api.post('/api/contact/', form);
    alert("Thanks! We received your message.");
  };

  return (
    <>
      <title>KKW — Contact</title>
      <meta name="description" content="Contact KashmirKeWaris (KKW) — reach out for partnerships, volunteering, and queries." />

      <section className="container py-5" style={{maxWidth: 720}}>
        <h1 className="h2 fw-bold">Contact</h1>
        <form onSubmit={onSubmit} className="mt-3">
          <div className="mb-3">
            <label className="form-label">Your name</label>
            <input className="form-control" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Your email</label>
            <input className="form-control" type="email" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows={5} value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })} />
          </div>
          <button className="btn btn-dark">Send</button>
        </form>
      </section>
    </>
  );
}
