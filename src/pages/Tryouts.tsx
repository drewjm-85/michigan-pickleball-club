import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { tryoutInfo } from '../data/club'
import { tryoutsPagePhoto } from '../data/gallery'

const tryoutPhoto = tryoutsPagePhoto

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-3 border-b border-line last:border-0">
      <span className="font-display text-xs uppercase tracking-wide text-ink-soft">{label}</span>
      <span className="text-right font-medium text-navy">{value}</span>
    </div>
  )
}

export default function Tryouts() {
  return (
    <div>
      <PageHero eyebrow="Fall Tryouts" title="Tryouts" />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="bg-white border border-line p-6 sm:p-8">
          <h2 className="text-xl mb-5">The Details</h2>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {tryoutInfo.days.map((d) => (
              <div key={d.date} className="bg-court border border-line px-4 py-4 text-center">
                <p className="font-mono-num text-navy text-2xl font-bold">{d.date}</p>
                <p className="text-ink-soft text-sm mt-1">{d.time}</p>
              </div>
            ))}
          </div>

          <div>
            <InfoRow label="Cost" value={tryoutInfo.cost} />
            <InfoRow label="Location" value={tryoutInfo.location} />
            <InfoRow label="Choose" value="One session — Sep 8 or Sep 9" />
            <InfoRow
              label="Callbacks"
              value={`${tryoutInfo.callback.date}, ${tryoutInfo.callback.time}`}
            />
          </div>

          <p className="text-ink-soft text-sm leading-relaxed mt-6">
            {tryoutInfo.ridesNote}
          </p>

          <a
            href={tryoutInfo.signupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-center bg-navy text-white font-display uppercase tracking-wide text-sm px-6 py-3 hover:bg-navy-deep transition-colors"
          >
            Sign Up for Tryouts
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <img
            src={tryoutPhoto.src}
            alt={tryoutPhoto.alt}
            className="w-full aspect-4/3 object-cover object-top border-4 border-maize"
          />
          <div className="border-l-2 border-maize pl-5">
            <h3 className="text-lg mb-2">All Skill Levels Welcome</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              Never picked up a paddle? Played competitively for years? Both are
              welcome.
            </p>
          </div>
          <div className="border-l-2 border-maize pl-5">
            <h3 className="text-lg mb-2">Need a Ride?</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              Let us know on the signup form if you need a ride and we'll
              coordinate one for you.
            </p>
          </div>
          <div className="border-l-2 border-maize pl-5">
            <h3 className="text-lg mb-2">What Happens Next</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              After your tryout session, callbacks are {tryoutInfo.callback.date}{' '}
              from {tryoutInfo.callback.time}. Watch your email for details after
              you sign up.
            </p>
          </div>
          <div className="bg-navy text-white p-5">
            <p className="font-display text-maize text-xs uppercase tracking-wide mb-2">
              Questions?
            </p>
            <p className="text-white/80 text-sm leading-relaxed normal-case font-body">
              See the{' '}
              <Link to="/contact" className="underline underline-offset-2">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
