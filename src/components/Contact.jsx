import { useState } from 'react'
import Eyebrow from './ui/Eyebrow'
import Reveal from './ui/Reveal'
import MagneticButton from './ui/MagneticButton'
import { FIRM } from '../lib/content'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = () => {
    // Wire this to your backend / email service. For now it opens a prefilled email.
    const subject = encodeURIComponent(`Consultation request — ${form.name || 'New enquiry'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    )
    window.location.href = `mailto:${FIRM.emails[0]}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const waText = encodeURIComponent(
    "Hello A I Modi & Co, I'd like to book a consultation."
  )

  return (
    <section id="contact" className="grain relative overflow-hidden bg-navy-900 py-24 md:py-32">
      <div className="absolute inset-0 grid-lines opacity-50" />
      <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-[130px]" />

      <div className="container-wide relative grid gap-12 lg:grid-cols-2">
        {/* left: pitch + contact rails */}
        <Reveal>
          <Eyebrow dark>Let&apos;s talk</Eyebrow>
          <h2 className="headline mt-5 text-4xl font-bold text-white md:text-5xl">
            Book a consultation with{' '}
            <span className="serif-accent font-normal text-gold-soft">people</span>{' '}
            who get your business.
          </h2>
          <p className="mt-5 max-w-md text-white/55">
            Tell us where you are and where you want to be. We&apos;ll show you
            exactly how we can help — no jargon, no obligation.
          </p>

          <div className="mt-9 space-y-3">
            <a
              href={`https://wa.me/${FIRM.phoneE164.replace('+', '')}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-emerald-400/40"
            >
              <span className="flex items-center gap-3 text-white/85">
                <Dot className="bg-emerald-400" /> WhatsApp us
              </span>
              <span className="text-white/40">→</span>
            </a>
            <a
              href={`tel:${FIRM.phoneE164}`}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-gold/40"
            >
              <span className="flex items-center gap-3 text-white/85">
                <Dot className="bg-gold" /> Call {FIRM.phoneDisplay}
              </span>
              <span className="text-white/40">→</span>
            </a>
            <a
              href={`mailto:${FIRM.emails[0]}`}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-gold/40"
            >
              <span className="flex items-center gap-3 text-white/85">
                <Dot className="bg-white/60" /> {FIRM.emails[0]}
              </span>
              <span className="text-white/40">→</span>
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 p-5">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
              Visit the office
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{FIRM.address}</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Modi+Plaza+Laxminarayan+Chowk+Swargate+Pune+411037"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-soft"
            >
              Open in Maps <span>→</span>
            </a>
          </div>
        </Reveal>

        {/* right: form */}
        <Reveal delay={0.1}>
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:p-9">
            {sent ? (
              <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-400/15 text-2xl text-emerald-300">
                  ✓
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">Almost there</h3>
                <p className="mt-2 max-w-xs text-sm text-white/55">
                  Your email client should have opened with the details ready to
                  send. We&apos;ll get back to you within one working day.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <Field label="Full name">
                  <input
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className="ca-input"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                    className="ca-input"
                  />
                </Field>
                <Field label="Service needed">
                  <select value={form.service} onChange={update('service')} className="ca-input">
                    <option value="">Select a service</option>
                    <option>Accounting</option>
                    <option>Audit &amp; Assurance</option>
                    <option>Income Tax Returns</option>
                    <option>GST Compliance</option>
                    <option>Tax Planning</option>
                    <option>Business Consultancy</option>
                    <option>Startup Advisory</option>
                  </select>
                </Field>
                <Field label="How can we help?">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="A few lines about your business and what you need…"
                    className="ca-input resize-none"
                  />
                </Field>
                <MagneticButton onClick={submit} variant="gold" className="w-full">
                  Request consultation →
                </MagneticButton>
                <p className="text-center text-[0.72rem] text-white/35">
                  We typically respond within one working day.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white/45">
        {label}
      </span>
      {children}
    </label>
  )
}

function Dot({ className }) {
  return <span className={`h-2 w-2 rounded-full ${className}`} />
}
