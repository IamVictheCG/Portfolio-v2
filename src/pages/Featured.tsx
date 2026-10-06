import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import { featuredProjects } from '../data/projects';

export default function Featured() {
  return (
    <div className="min-h-screen py-20">
      <Seo
        title="Featured Projects | Victor Okechukwu"
        description="SpeedNova, ResultIQ and ENYEMAKA: full-stack products Victor Okechukwu has built with Next.js, React Native and Supabase."
        path="/featured"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Products I've built from scratch, from the database up. Open a project to read how it was put
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
