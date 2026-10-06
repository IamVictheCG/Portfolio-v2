import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Seo from '../components/Seo';
import ProductBadge from '../components/ProductBadge';
import { featuredProjects } from '../data/projects';

const panel = 'bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6';
const focusRing = 'rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={panel}>
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      <div className="text-gray-200 leading-relaxed">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 marker:text-purple-300">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ProjectCaseStudy() {
  const { id } = useParams();
  const project = featuredProjects.find((p) => String(p.id) === id && p.caseStudy);

  if (!project || !project.caseStudy) {
    return (
      <div className="min-h-screen py-20">
        <Seo title="Project not found | Victor Okechukwu" description="This project could not be found." path={`/projects/${id ?? ''}`} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project not found</h1>
          <Link to="/featured" className={`text-purple-300 hover:text-purple-200 ${focusRing}`}>
            Back to featured projects
          </Link>
        </div>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <div className="min-h-screen py-20">
      <Seo
        title={`${project.title} case study | Victor Okechukwu`}
        description={project.description}
        path={`/projects/${project.id}`}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/featured"
          className={`inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 mb-8 ${focusRing}`}
        >
          <ArrowLeft size={18} aria-hidden="true" />
          <span>All featured projects</span>
        </Link>

        {/* Header Section */}
        <header className="mb-10">
          <ProductBadge className="mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">{project.title}</h1>
          {cs.overview && <p className="text-xl text-purple-200 mb-4">{cs.overview}</p>}
          <p className="text-lg text-gray-300 mb-6">{project.description}</p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-blue-300 hover:text-blue-200 ${focusRing}`}
            >
              <ExternalLink size={18} aria-hidden="true" />
              <span>Live Demo</span>
            </a>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-gray-300 hover:text-white ${focusRing}`}
              >
                <Github size={18} aria-hidden="true" />
                <span>Code</span>
              </a>
            )}
          </div>
        </header>

        <div className="aspect-video rounded-xl overflow-hidden border border-white/20 bg-slate-900/60 mb-10">
          <img
            src={project.thumbnail}
            alt={`Preview of ${project.title}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          {cs.problem && <Section title="The problem">{cs.problem}</Section>}
          {cs.role && <Section title="My role">{cs.role}</Section>}

          <Section title="Stack">
            <div className="flex flex-wrap gap-2">
              {cs.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm bg-purple-500/20 text-purple-200 rounded-md border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {cs.decisions && cs.decisions.length > 0 && (
            <Section title="Key decisions">
              <List items={cs.decisions} />
            </Section>
          )}
          {cs.challenges && cs.challenges.length > 0 && (
            <Section title="Problems I solved">
              <List items={cs.challenges} />
            </Section>
          )}
          {cs.outcome && <Section title="Outcome">{cs.outcome}</Section>}

          {cs.screenshots && cs.screenshots.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Screenshots</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {cs.screenshots.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-lg border border-white/20"
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
