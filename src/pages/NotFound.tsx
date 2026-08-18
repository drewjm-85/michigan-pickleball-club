import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 text-center">
      <p className="font-mono-num text-navy text-sm mb-2 border-b-2 border-maize inline-block pb-1">404</p>
      <h1 className="text-3xl mb-4">Out of Bounds</h1>
      <p className="text-ink-soft mb-8">That page doesn't exist — let's get you back on the court.</p>
      <Link
        to="/"
        className="inline-block bg-navy text-white font-display uppercase tracking-wide text-sm px-6 py-3 hover:bg-navy-deep transition-colors"
      >
        Back Home
      </Link>
    </div>
  )
}
