import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { tournaments } from '../data/club'

export default function Results() {
  return (
    <div>
      <PageHero eyebrow="Scoreboard" title="Results" />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="bg-white border border-line overflow-hidden">
          <div className="bg-court px-6 py-4 border-b border-line flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-lg m-0">2026 Season</h2>
            <span className="font-mono-num text-xs uppercase tracking-wide text-ink-soft">
              No results posted yet
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left border-b border-line">
                  <th className="px-6 py-3 font-display uppercase tracking-wide text-xs text-ink-soft">
                    Tournament
                  </th>
                  <th className="px-6 py-3 font-display uppercase tracking-wide text-xs text-ink-soft">
                    Dates
                  </th>
                  <th className="px-6 py-3 font-display uppercase tracking-wide text-xs text-ink-soft">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody>
                {tournaments.map((t) => (
                  <tr key={t.name} className="border-b border-line last:border-0">
                    <td className="px-6 py-4 font-medium text-navy">{t.name}</td>
                    <td className="px-6 py-4 font-mono-num text-ink-soft">{t.dateRange}</td>
                    <td className="px-6 py-4 text-ink-soft italic">Pending — check back after the event</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 text-ink-soft text-sm max-w-xl">
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
