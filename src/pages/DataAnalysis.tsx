import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import { dataAnalysisProjects, featuredProjects } from '../data/projects';
import { BarChart3, Database, TrendingUp, Layers } from 'lucide-react';

const skills = [
  { label: 'Querying', detail: 'SQL', icon: Database, color: 'text-blue-300' },
  { label: 'Analysis', detail: 'Python', icon: BarChart3, color: 'text-purple-300' },
  { label: 'Dashboards', detail: 'Power BI', icon: TrendingUp, color: 'text-emerald-400' },
  { label: 'Modelling', detail: 'Power BI data models', icon: Layers, color: 'text-pink-400' },
];

export default function DataAnalysis() {
  const allDataProjects = [...dataAnalysisProjects, ...featuredProjects.filter(p => p.tech.some(tech => ['Python', 'TensorFlow', 'D3.js'].includes(tech)))];

  return (
    <div className="min-h-screen py-20">
      <Seo
        title="Data Analyst | Victor Okechukwu"
        description="Data analysis with SQL, Python and Power BI: cleaning and querying data, building dashboards, and explaining the results in plain language."
        path="/data-analyst"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="text-white" size={40} aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Data Analyst
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Cleaning, querying and analysing data with SQL and Python, and building Power BI dashboards that
            answer the questions a team actually asks.
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
        {allDataProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDataProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300">Data projects are on the way.</p>
        )}
      </div>
    </div>
  );
}
