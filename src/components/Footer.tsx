import { Linkedin, Mail } from 'lucide-react';
import { GithubLogoIcon } from '@phosphor-icons/react/dist/ssr';
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/profile';

const iconLink =
  'text-gray-300 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300';

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-white/5 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-300">
        <p>
          © {new Date().getFullYear()} Victor Okechukwu · Sunderland, UK
        </p>
        <div className="flex items-center gap-5">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
            <GithubLogoIcon size={20} aria-hidden="true" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
            <Linkedin size={20} aria-hidden="true" />
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} aria-label={`Email ${CONTACT_EMAIL}`} className={iconLink}>
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
