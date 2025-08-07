import projects from '../data/projects';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  const project = projects.slice(0, 4);

  return (
    <>
      <section className="text-center my-5">
        <h1 className="display-6 fw-bold">معماری الهام‌بخش زندگی</h1>
        <p className="lead">در UPSaze رؤیاهای شما را می‌سازیم.</p>
      </section>

      <section>
        <h2 className="h4 mb-3">پروژه‌های شاخص</h2>
        <div className="meshkatFlex">
          {project.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
