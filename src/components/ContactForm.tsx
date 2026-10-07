import { FormEvent } from 'react';
import { Send } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/profile';

// No backend: submitting opens a pre-filled email in the visitor's mail app or webmail.
// The button that submitted the form picks where the draft opens.
type Provider = 'default' | 'gmail' | 'outlook' | 'yahoo';

function composeUrl(provider: Provider, subject: string, body: string) {
  const to = encodeURIComponent(CONTACT_EMAIL);
  const su = encodeURIComponent(subject);
  const bo = encodeURIComponent(body);
  switch (provider) {
    case 'gmail':
      return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${bo}`;
    case 'outlook':
      return `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}&body=${bo}`;
    case 'yahoo':
      return `https://compose.mail.yahoo.com/?to=${to}&subject=${su}&body=${bo}`;
    default:
      return `mailto:${CONTACT_EMAIL}?subject=${su}&body=${bo}`;
  }
}

const fieldClass =
  'w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-gray-300/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus:border-purple-300';

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900';

const webmail: { id: Provider; label: string }[] = [
  { id: 'gmail', label: 'Gmail' },
  { id: 'outlook', label: 'Outlook' },
  { id: 'yahoo', label: 'Yahoo' },
];

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const provider = (submitter?.value || 'default') as Provider;

    const url = composeUrl(provider, `Portfolio enquiry from ${name}`, `${message}\n\n${name}`);
    if (provider === 'default') {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 sm:p-8 text-left space-y-5"
    >
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-200 mb-2">
          Name
        </label>
        <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-200 mb-2">
          Message
        </label>
        <textarea id="contact-message" name="message" rows={5} required className={fieldClass} />
      </div>

      <div className="space-y-4">
        <button
          type="submit"
          value="default"
          className={`inline-flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 ${focusRing}`}
        >
          <Send size={18} aria-hidden="true" />
          <span>Send Message</span>
        </button>

        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
          <span>Or open the draft in</span>
          {webmail.map(({ id, label }) => (
            <button
              key={id}
              type="submit"
              value={id}
              className={`px-3 py-1.5 rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors ${focusRing}`}
            >
              {label}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-300">
          Your email opens with the message already filled in, so you just press send. Prefer to write it
          yourself? Email me at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-purple-200 underline underline-offset-2 hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
