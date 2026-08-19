import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { sponsors } from '../data/club'
import { sponsorLogos } from '../data/gallery'

export default function Sponsors() {
  return (
    <div>
      <PageHero eyebrow="Club Partners" title="Sponsors" />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {sponsors.map((s) => (
            <div key={s.name} className="bg-white border-t-4 border-maize p-6 flex flex-col">
              <img
                src={sponsorLogos[s.name]}
                alt={`${s.name} logo`}
                className="h-14 w-auto object-contain object-left mb-5"
              />
              <p className="font-display text-navy text-2xl uppercase tracking-wide">{s.name}</p>
              <p className="font-mono-num text-xs uppercase tracking-wide text-ink-soft mt-2">
                {s.role}
              </p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 font-display uppercase tracking-wide text-xs text-navy border-b-2 border-maize pb-1 self-start hover:text-navy-deep"
              >
                Visit Site ↗
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-navy text-white px-6 py-10 sm:px-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <h2 className="text-white text-2xl">Interested in Sponsoring the Club?</h2>
          <Link
            to="/contact"
            className="bg-maize text-navy font-display uppercase tracking-wide text-sm px-6 py-3 hover:bg-maize-soft transition-colors whitespace-nowrap text-center"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
