import projects from '../../../data/projects';
import ImageCarousel from '../../components/ImageCarousel';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return <p>پروژه‌ای یافت نشد.</p>;

  return (
    <>
      <h1 className="h3 mb-4">{project.title}</h1>
      <ImageCarousel images={project.gallery} />
      <p className="mt-3">
        <strong>دسته:</strong>{' '}
        {project.category === 'residential'
          ? 'مسکونی'
          : project.category === 'commercial'
          ? 'اداری'
          : 'شهری'}
      </p>
      <p style={{ lineHeight: 1.8 }}>{project.description}</p>
      <a href="/contact" className="btn btn-outline-primary mt-2">
        ارتباط با ما
      </a>
    </>
  );
}
