import { Link } from 'react-router-dom';
import { Linkedin, Mail, Download, Code, Database, TrendingUp, ChevronRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';
import { featuredProjects } from '../data/projects';
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/profile';
import { GithubLogoIcon } from '@phosphor-icons/react/dist/ssr';

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900';

const services = [
  {
    title: 'Web & Mobile Development',
    icon: Code,
    gradient: 'from-purple-500 to-blue-500',
    text: 'Production apps in Next.js and TypeScript, with auth, databases and email handled properly. React Native and Expo when it needs to live on a phone.',
  },
  {
    title: 'Data Analysis',
    icon: Database,
    gradient: 'from-blue-500 to-emerald-500',
    text: 'Cleaning, querying and analysing data with SQL and Python, then explaining what it means in plain language.',
  },
  {
    title: 'Business Intelligence',
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-purple-500',
    text: "Power BI dashboards that answer the questions a team actually asks, built from data I've modelled myself.",
  },
];

// TODO(CG): add dates and company names for each role
const experience = [
  { role: 'Contract React Developer' },
  { role: 'Contract Data Analyst', detail: 'Power BI / SQL / Python' },
  { role: 'AI Data Annotation', detail: 'Outlier / Scale AI' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Seo
        title="Victor Okechukwu | Frontend Engineer & Data Analyst"
        description="Victor Okechukwu (CG), a frontend engineer and data analyst in Sunderland, UK. Full-stack products with Next.js, React Native and Supabase, plus Power BI, SQL and Python analysis."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-blue-800/20 to-emerald-800/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="group w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 rounded-full p-1.5 [backface-visibility:hidden]">
                    <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden">
                      <img
                        src="/images/portrait.webp"
                        alt="Victor Okechukwu"
                        width={800}
                        height={622}
                        fetchPriority="high"
                        className="w-full h-full object-cover object-[57%_35%]"
                      />
                    </div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full p-1.5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden">
                      <img
                        src="/images/avatar.webp"
                        alt="Cartoon avatar of Victor Okechukwu"
                        width={500}
                        height={792}
                        loading="lazy"
                        className="w-full h-full object-cover object-[50%_0%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Victor Okechukwu
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 mb-4">
              Frontend Engineer & Data Analyst
            </p>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              I build full-stack products with Next.js, React Native and Supabase, and I use Power BI, SQL and
              Python to make sense of the data behind them. Right now I'm building ENYEMAKA, a managed agency
              platform for startups. Based in Sunderland, UK.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <a
                href="#contact"
                className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 ${focusRing}`}
              >
                Get In Touch
              </a>
              {/* To update the CV, replace public/Victor_Okechukwu_CV.pdf (keep the filename) */}
              <a
                href="/Victor_Okechukwu_CV.pdf"
                download="Victor_Okechukwu_CV.pdf"
                type="application/pdf"
                className={`px-8 py-3 border-2 border-purple-400 text-purple-200 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 flex items-center space-x-2 ${focusRing}`}
              >
                <Download size={20} aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>

            <p className="text-sm text-gray-300 mb-10">Open to frontend and full-stack roles, UK or remote.</p>

            <div className="flex items-center justify-center space-x-6">
              <a
                href={GITHUB_URL}
                aria-label="GitHub"
                className={`text-gray-300 hover:text-white transition-colors rounded ${focusRing}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogoIcon size={24} aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN_URL}
                aria-label="LinkedIn"
                className={`text-gray-300 hover:text-white transition-colors rounded ${focusRing}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label={`Email ${CONTACT_EMAIL}`}
                className={`text-gray-300 hover:text-white transition-colors rounded ${focusRing}`}
              >
                <Mail size={24} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ title, icon: Icon, gradient, text }) => (
              <div key={title} className="text-center group">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={32} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">About</h2>
          <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 items-start">
            {/* TODO(CG): replace with real headshot */}
            <div className="mx-auto w-full max-w-xs bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 rounded-2xl p-1">
              <img
                src="/images/avatar.webp"
                alt="Cartoon avatar of Victor Okechukwu"
                width={500}
                height={792}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover object-top rounded-xl bg-slate-900"
              />
            </div>

            <div>
              <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
                <p>
                  I started in engineering, with a BEng in Mechatronics, and moved into software because I wanted
                  to build things people use every day.
                </p>
                <p>
                  Since then I've worked on contract as a React developer and a data analyst, done AI evaluation
                  work with Outlier and Scale AI, and spent the last seven months building my own products from
                  scratch. That's where most of my real learning happened: debugging Supabase security policies
                  that failed without errors, untangling auth redirect loops, and getting a mobile build through
                  EAS.
                </p>
                <p>
                  I'm now studying Masters in Business Administration (MBA) in Sunderland, because I want to understand the
                  business side as well as the code.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-white mt-10 mb-4">Experience</h3>
              <ul className="space-y-3">
                {experience.map(({ role, detail }) => (
                  <li
                    key={role}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-3"
                  >
                    <p className="text-white font-medium">{role}</p>
                    {detail && <p className="text-sm text-gray-300">{detail}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <Link
              to="/featured"
              className="shrink-0 whitespace-nowrap flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors group rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            >
              <span>View All</span>
              <ChevronRight size={20} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/5 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-gray-200 mb-10 text-lg">
              Hiring for a frontend or full-stack role, or need a product built?  me a message and I'll get
              back to you within a couple of days.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
