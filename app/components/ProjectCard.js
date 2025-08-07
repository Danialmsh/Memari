import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <Link href={`/portfolio/${project.slug}`}>
        <img src={project.cover} alt={project.title} />
      </Link>
      <h5>{project.title}</h5>
    </div>
  );
}
