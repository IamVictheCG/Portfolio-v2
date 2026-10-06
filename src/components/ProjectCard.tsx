import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';
import ProductBadge from './ProductBadge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const maxTech = project.category === 'featured' ? 6 : 3;
  const shownTech = project.tech.slice(0, maxTech);
  const hiddenCount = project.tech.length - shownTech.length;

  return (
    <div className="group relative h-full flex flex-col bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden bg-slate-900/60 shrink-0">
        {project.category === 'featured' && <ProductBadge className="absolute top-3 left-3 z-10" />}
        <img
          src={project.thumbnail}
          alt={`Preview of ${project.title}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-200 transition-colors">
          {project.caseStudy ? (
            <Link
              to={`/projects/${project.id}`}
              className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>

        <p className="text-gray-300 text-sm mb-3 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {shownTech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-purple-500/20 text-purple-200 rounded-md border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className="self-center text-gray-300 text-xs">+{hiddenCount} more</span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          {project.caseStudy && (
            <Link
              to={`/projects/${project.id}`}
              className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            >
              <BookOpen size={16} aria-hidden="true" />
              <span className="text-sm">Case Study</span>
            </Link>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
          >
            <ExternalLink size={16} aria-hidden="true" />
            <span className="text-sm">Live Demo</span>
          </a>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            >
              <Github size={16} aria-hidden="true" />
              <span className="text-sm">Code</span>
            </a>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
