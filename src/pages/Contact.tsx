import PageHero from '../components/PageHero'

const EMAIL = 'michiganpickleballclub@gmail.com'
const INSTAGRAM_HANDLE = '@michiganpickleballclub'
const INSTAGRAM_URL = 'https://instagram.com/michiganpickleballclub'

function EmailIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
      <rect x="4" y="9" width="32" height="22" fill="none" stroke="var(--color-navy)" strokeWidth="2" />
      <path d="M5 10.5 20 22 35 10.5" fill="none" stroke="var(--color-navy)" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
      <rect x="5" y="5" width="30" height="30" rx="9" fill="none" stroke="var(--color-navy)" strokeWidth="2" />
      <circle cx="20" cy="20" r="8" fill="none" stroke="var(--color-navy)" strokeWidth="2" />
      <circle cx="29" cy="11" r="1.8" fill="var(--color-navy)" />
    </svg>
  )
}

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        lede="Questions about the club, tryouts, results, or sponsorship — reach out any time."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          <a
            href={`mailto:${EMAIL}`}
            className="bg-white border-t-4 border-maize p-8 flex flex-col items-center text-center gap-4 hover:bg-court transition-colors"
          >
            <EmailIcon />
            <div>
              <h2 className="text-lg mb-1">Email Us</h2>
              <p className="text-navy font-medium break-all">{EMAIL}</p>
            </div>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-t-4 border-maize p-8 flex flex-col items-center text-center gap-4 hover:bg-court transition-colors"
          >
            <InstagramIcon />
            <div>
              <h2 className="text-lg mb-1">DM Us on Instagram</h2>
              <p className="text-navy font-medium">{INSTAGRAM_HANDLE}</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
