import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { execTeam } from '../data/club'
import { execPhotos } from '../data/gallery'

export default function Exec() {
  return (
    <div>
      <PageHero
        eyebrow="Leadership"
        title="Exec Board"
        lede="Six students who run the club day to day — tournaments, sponsorships, tryouts, and everything in between."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {execTeam.map((member) => (
            <div key={member.name} className="bg-white border border-line flex flex-col">
              <img
                src={execPhotos[member.name]}
                alt={member.name}
                loading="lazy"
                className="w-full aspect-square object-cover border-b-4 border-maize"
              />
              <div className="p-6">
                <p className="font-display text-navy text-lg uppercase tracking-wide leading-snug">
                  {member.name}
                </p>
                <p className="text-ink-soft text-sm mt-1">{member.role}</p>
                <p className="font-mono-num text-xs uppercase tracking-wide text-ink-soft/70 mt-2">
                  {member.grad}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-l-2 border-maize pl-5 max-w-2xl">
          <h2 className="text-lg mb-2">Want to Get in Touch With Exec?</h2>
          <p className="text-ink-soft text-sm leading-relaxed">
            Whether it's a question about tryouts, an idea for the club, or a
            sponsorship inquiry, the fastest way to reach the exec board is
            through our{' '}
            <Link to="/contact" className="underline underline-offset-2 text-navy">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
