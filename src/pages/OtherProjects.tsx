import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import { vibeCoding } from '../data/projects';

export default function OtherProjects() {
  return (
    <div className="min-h-screen py-20">
      <Seo
        title="Other Projects (2022 - 2025) | Victor Okechukwu"
        description="Smaller browser projects and coding exercises Victor Okechukwu built between 2022 and 2025."
        path="/other-projects"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Other Projects <span className="text-gray-300 font-semibold">(2022 - 2025)</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Smaller projects and exercises from my years learning to build for the web, including work for The
            Odin Project and Frontend Mentor challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vibeCoding.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
