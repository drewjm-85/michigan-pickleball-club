export default function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: string
  lede?: string
}) {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <p className="font-mono-num text-maize text-xs tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
        <h1 className="text-white text-4xl sm:text-5xl font-semibold">{title}</h1>
        {lede && (
          <p className="mt-4 max-w-2xl text-white/80 text-lg leading-relaxed normal-case font-body">
            {lede}
          </p>
        )}
      </div>
    </div>
  )
}
