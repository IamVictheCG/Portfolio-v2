import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/profile';

// Netlify Forms: the matching static form lives in index.html so Netlify can detect it at build time
type Status = 'idle' | 'sending' | 'sent' | 'error';

const fieldClass =
  'w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-gray-300/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus:border-purple-300';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 sm:p-8 text-left space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-200 mb-2">
            Name
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-200 mb-2">
            Email
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-200 mb-2">
          Message
        </label>
        <textarea id="contact-message" name="message" rows={5} required className={fieldClass} />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          <Send size={18} aria-hidden="true" />
          <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
        </button>

        <p className="text-sm text-gray-300">
          Or email me at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-purple-200 underline underline-offset-2 hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>

      <p role="status" aria-live="polite" className="text-sm">
        {status === 'sent' && <span className="text-emerald-300">Thanks, your message has been sent.</span>}
        {status === 'error' && (
          <span className="text-red-300">
            Something went wrong sending that. Please email me directly instead.
          </span>
        )}
      </p>
    </form>
  );
}
