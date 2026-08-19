import { Link } from 'react-router-dom'
import { clubFoundedYear, sponsors, tournaments, tryoutInfo } from '../data/club'
import { galleryPhotos, heroPhoto, sponsorLogos } from '../data/gallery'

export default function Home() {
  const yearsRunning = new Date().getFullYear() - clubFoundedYear

  return (
    <div>
      <section className="bg-navy text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, var(--color-maize) 0, var(--color-maize) 2px, transparent 2px, transparent 40px)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-mono-num text-maize text-xs tracking-[0.2em] uppercase mb-4">
              University of Michigan &middot; Est. {clubFoundedYear}
            </p>
            <h1 className="text-white text-5xl sm:text-6xl font-semibold max-w-3xl">
              Michigan Pickleball Club
            </h1>
            <p className="mt-5 max-w-xl text-white/80 text-lg leading-relaxed normal-case font-body">
              Maize, blue, and the kitchen line. We're a student-run competitive and
              social pickleball club, {yearsRunning} years strong.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/tryouts"
                className="bg-maize text-navy font-display uppercase tracking-wide text-sm px-6 py-3 hover:bg-maize-soft transition-colors"
              >
                Tryout Info — Sep {tryoutInfo.days[0].date.split(' ')[1]}–{tryoutInfo.days[1].date.split(' ')[1]}
              </Link>
              <Link
                to="/contact"
                className="border border-white/40 text-white font-display uppercase tracking-wide text-sm px-6 py-3 hover:border-maize hover:text-maize transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-maize" aria-hidden="true" />
            <img
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              className="relative w-full aspect-4/3 object-cover border-4 border-navy"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl sm:text-3xl mb-4">Since {clubFoundedYear}</h2>
          <p className="text-ink-soft text-base leading-relaxed max-w-xl">
            Started in {clubFoundedYear} on repurposed tennis courts, we're now a
            full competitive club — tryouts every fall, teams at regional
            tournaments. We're entirely student-run, so donations go straight to
            tryouts, travel, and gear.
          </p>
          <a
            href="mailto:michiganpickleballclub@umich.edu?subject=Donation%20Inquiry"
            className="mt-6 inline-flex items-center gap-2 font-display uppercase tracking-wide text-sm text-navy border-b-2 border-maize pb-1 hover:text-navy-deep"
          >
            Ask About Donating →
          </a>
        </div>

        <div className="bg-white border border-line p-6">
          <h2 className="text-xl mb-1">On the Calendar</h2>
          <p className="font-mono-num text-xs uppercase tracking-wide text-ink-soft mb-5">
            September Tournaments
          </p>
          <ul className="flex flex-col gap-5">
            {tournaments.map((t) => (
              <li key={t.name} className="flex gap-4">
                <div className="font-mono-num text-navy text-sm font-bold shrink-0 pt-0.5 w-24">
                  {t.dateRange}
                </div>
                <div>
                  <p className="font-display text-navy text-sm uppercase tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-ink-soft text-sm mt-1">{t.blurb}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
          <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6">
            <h2 className="text-2xl sm:text-3xl">Club Partners</h2>
            <Link to="/sponsors" className="text-sm font-display uppercase tracking-wide text-navy hover:text-maize-soft underline underline-offset-4">
              All Sponsors
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {sponsors.map((s) => (
              <div key={s.name} className="border-l-2 border-maize pl-4 flex flex-col gap-3">
                <img
                  src={sponsorLogos[s.name]}
                  alt={`${s.name} logo`}
                  className="h-10 w-auto object-contain object-left"
                />
                <div>
                  <p className="font-display text-navy text-lg uppercase tracking-wide">{s.name}</p>
                  <p className="text-xs uppercase tracking-wide text-ink-soft mt-1 font-mono-num">{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl mb-8">From the Courts</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {galleryPhotos.map((photo) => (
            <figure key={photo.caption} className="group">
              <div className="overflow-hidden bg-navy">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full aspect-3/4 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <figcaption className="mt-3">
                <p className="font-display text-navy text-sm uppercase tracking-wide">{photo.caption}</p>
                {photo.detail && <p className="text-ink-soft text-xs mt-1">{photo.detail}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="bg-navy text-white px-6 py-10 sm:px-10 sm:py-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl">Ready to Try Out?</h2>
            <p className="text-white/80 mt-2 max-w-md normal-case font-body">
              {tryoutInfo.days.map((d) => d.date).join(' or ')} at {tryoutInfo.location}.
              All skill levels welcome — come have fun.
            </p>
          </div>
          <a
            href={tryoutInfo.signupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-maize text-navy font-display uppercase tracking-wide text-sm px-6 py-3 hover:bg-maize-soft transition-colors whitespace-nowrap text-center"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  )
}
