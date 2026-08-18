import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const inputClasses =
  'w-full bg-court border border-line px-4 py-3 text-ink focus:border-navy outline-none transition-colors'

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        lede="Questions about the club, tryouts, results, or sponsorship — send us a note and someone from exec will get back to you."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <form action={FORMSPREE_ENDPOINT} method="POST" className="bg-white border border-line p-6 sm:p-8 flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block font-display text-xs uppercase tracking-wide text-ink-soft mb-2">
              Name
            </label>
            <input id="name" name="name" type="text" required className={inputClasses} />
          </div>

          <div>
            <label htmlFor="email" className="block font-display text-xs uppercase tracking-wide text-ink-soft mb-2">
              Email
            </label>
            <input id="email" name="email" type="email" required className={inputClasses} />
          </div>

          <div>
            <label htmlFor="topic" className="block font-display text-xs uppercase tracking-wide text-ink-soft mb-2">
              What's this about?
            </label>
            <select id="topic" name="topic" defaultValue="General" className={inputClasses}>
              <option>General</option>
              <option>Tryouts</option>
              <option>Sponsorship</option>
              <option>Results / Media</option>
              <option>Donations</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-display text-xs uppercase tracking-wide text-ink-soft mb-2">
              Message
            </label>
            <textarea id="message" name="message" required rows={5} className={inputClasses} />
          </div>

          <button
            type="submit"
            className="mt-2 bg-navy text-white font-display uppercase tracking-wide text-sm px-6 py-3 hover:bg-navy-deep transition-colors"
          >
            Send Message
          </button>

          <p className="text-xs text-ink-soft/70">
            This form is handled by Formspree — we'll never share your info.
          </p>
        </form>

        <div className="flex flex-col gap-6">
          <div className="border-l-2 border-maize pl-5">
            <h3 className="text-lg mb-2">Tryout Questions</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              For anything about the September 8/9 tryouts — including rides —
              use the form and select "Tryouts," or check the{' '}
              <Link to="/tryouts" className="underline underline-offset-2 text-navy">
                tryouts page
              </Link>{' '}
              first.
            </p>
          </div>
          <div className="border-l-2 border-maize pl-5">
            <h3 className="text-lg mb-2">Sponsorship</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              Interested in sponsoring the club? Select "Sponsorship" in the form
              and our VP of Sponsorship will follow up.
            </p>
          </div>
          <div className="border-l-2 border-maize pl-5">
            <h3 className="text-lg mb-2">Donations</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              We're entirely student-run and rely on donations to keep tryouts
              and tournament travel accessible. Select "Donations" and we'll
              reach out with details.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
