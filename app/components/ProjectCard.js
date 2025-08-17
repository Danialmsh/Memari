import Link from 'next/link';
import Image from 'next/image';


export default function ProjectCard({project}) {
    return (
        <div className="project-card">
            <Link href={`/portfolio/${project.slug}`}>
                <Image
                    src={project.cover}
                    alt={project.title}
                    width={400}
                    height={300}
                    layout="responsive"
                />
            </Link>
            <h5>{project.title}</h5>
        </div>
    );
}
