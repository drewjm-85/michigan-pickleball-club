import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { sponsors } from '../data/club'

export default function Sponsors() {
  return (
    <div>
      <PageHero
        eyebrow="Club Partners"
        title="Sponsors"
        lede="The brands that outfit the club and help us compete."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {sponsors.map((s) => (
            <div key={s.name} className="bg-white border-t-4 border-maize p-6">
              <p className="font-display text-navy text-2xl uppercase tracking-wide">{s.name}</p>
              <p className="font-mono-num text-xs uppercase tracking-wide text-ink-soft mt-2">
                {s.role}
              </p>
              <p className="text-ink-soft text-sm leading-relaxed mt-4">{s.blurb}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-navy text-white px-6 py-10 sm:px-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl">Interested in Sponsoring the Club?</h2>
            <p className="text-white/80 mt-2 max-w-md normal-case font-body">
              We'd love to talk. Reach out to our VP of Sponsorship through the
              contact page.
            </p>
          </div>
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
