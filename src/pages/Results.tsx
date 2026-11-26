import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { seasons } from '../data/club'
import { tournamentPhotos } from '../data/gallery'

export default function Results() {
  return (
    <div>
      <PageHero eyebrow="Scoreboard" title="Results" />

      <section className="mx-auto max-w-6xl px-4 sm:px-4 sm:px-6 py-14 flex flex-col gap-10">
        {seasons.map((s) => (
          <div key={s.season} className="bg-white border border-line overflow-hidden">
            <div className="bg-court px-4 sm:px-6 py-4 border-b border-line flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-lg m-0">{s.season} Season</h2>
              <span className="font-mono-num text-xs uppercase tracking-wide text-ink-soft">
                {s.summary}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left border-b border-line">
                    <th className="px-4 sm:px-6 py-3 font-display uppercase tracking-wide text-xs text-ink-soft">
                      Tournament
                    </th>
                    <th className="hidden sm:table-cell px-4 sm:px-6 py-3 font-display uppercase tracking-wide text-xs text-ink-soft">
                      Location
                    </th>
                    <th className="px-4 sm:px-6 py-3 font-display uppercase tracking-wide text-xs text-ink-soft">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {s.results.map((r) => (
                    <tr key={r.name} className="border-b border-line last:border-0 align-top">
                      <td className="px-4 sm:px-6 py-4">
                        <p className="font-medium text-navy">{r.name}</p>
                        {r.location && (
                          <p className="sm:hidden font-mono-num text-xs text-ink-soft mt-1">
                            {r.location}
                          </p>
                        )}
                        {r.date && (
                          <p className="font-mono-num text-xs text-ink-soft mt-1">{r.date}</p>
                        )}
                      </td>
                      <td className="hidden sm:table-cell px-4 sm:px-6 py-4 font-mono-num text-ink-soft">{r.location || '—'}</td>
                      <td className="px-4 sm:px-6 py-4 text-ink-soft">
                        <p className="text-navy font-medium">{r.result}</p>
                        {r.note && <p className="mt-1">{r.note}</p>}
                        <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                          {r.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline underline-offset-2 text-navy"
                            >
                              {link.label} ↗
                            </a>
                          ))}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div>
          <h2 className="text-2xl sm:text-3xl mb-6">Recent Tournaments</h2>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {tournamentPhotos.map((photo, i) => (
              <figure
                key={photo.caption}
                className={`group ${i === 0 ? 'col-span-2 lg:row-span-2' : ''}`}
              >
                <div className="overflow-hidden bg-navy h-full relative">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      i === 0 ? 'aspect-4/5 lg:aspect-auto lg:absolute lg:inset-0 lg:h-full object-bottom' : 'aspect-square'
                    }`}
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>

        <p className="text-ink-soft text-sm max-w-xl">
          We'll post scores and standings here as tournaments wrap up. Follow the
          club or reach out on the{' '}
          <Link to="/contact" className="underline underline-offset-2 text-navy">
            contact page
          </Link>{' '}
          for the fastest updates.
        </p>
      </section>
    </div>
  )
}
