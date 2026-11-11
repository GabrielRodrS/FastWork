import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-white">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      </span>
      <span className="text-xl font-extrabold tracking-tight text-zinc-900">
        Fast<span className="text-orange-500">Work</span>
      </span>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="flex items-center gap-2 sm:gap-6">
          <Link
            href="/como-funciona"
            className="hidden text-sm font-medium text-zinc-700 transition-colors hover:text-orange-500 sm:block"
          >
            Como funciona?
          </Link>

          <Link
            href="/seja-um-profissional"
            className="hidden text-sm font-medium text-zinc-700 transition-colors hover:text-orange-500 sm:block"
          >
            Seja um profissional
          </Link>

          <Link
            href="/login"
            className="rounded-full border border-orange-500 px-5 py-2 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-500 hover:text-white"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
