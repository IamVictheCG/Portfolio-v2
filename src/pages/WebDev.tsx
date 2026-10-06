import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import { webDevProjects, featuredProjects } from '../data/projects';
import { Code, Rocket, Smartphone, Zap } from 'lucide-react';

const skills = [
  { label: 'Frontend', detail: 'React, Next.js, TypeScript, Tailwind', icon: Code, color: 'text-purple-300' },
  { label: 'Backend', detail: 'Supabase, PostgreSQL, Row-Level Security, Resend', icon: Zap, color: 'text-blue-300' },
  { label: 'Mobile', detail: 'React Native, Expo, EAS', icon: Smartphone, color: 'text-emerald-400' },
  { label: 'Deployment', detail: 'Vercel, Netlify, custom domains', icon: Rocket, color: 'text-pink-400' },
];

export default function WebDev() {
  const allWebProjects = [...webDevProjects, ...featuredProjects.filter(p => p.category === 'featured')];

  return (
    <div className="min-h-screen py-20">
      <Seo
        title="Web Developer | Victor Okechukwu"
        description="Web and mobile products built end to end with Next.js, React Native, Supabase and PostgreSQL, deployed on Vercel and Netlify."
        path="/web-developer"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Code className="text-white" size={40} aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Web Developer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            I build web and mobile products end to end: the interface, the database rules behind it, and the
            deployment that keeps it running.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {skills.map(({ label, detail, icon: Icon, color }) => (
              <div key={label} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                <Icon className={`${color} mx-auto mb-2`} size={24} aria-hidden="true" />
                <p className="text-white text-sm font-medium">{label}</p>
                <p className="text-gray-300 text-xs">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allWebProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
