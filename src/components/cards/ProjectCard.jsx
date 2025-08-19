export default function ProjectCard({ title, description }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-2">{title}</h5>
        <p className="card-text text-body-secondary">{description}</p>
      </div>
    </div>
  );
}
