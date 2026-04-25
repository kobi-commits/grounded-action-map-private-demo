import Link from "next/link";

const links = [
  ["Start", "/start"],
  ["Map", "/map"],
  ["Act", "/action"],
  ["Learn", "/learn"],
  ["Peacebuilding", "/peacebuilding"],
  ["Future", "/foresight"],
  ["Sources", "/sources"],
  ["Demo", "/demo/live"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/" className="text-lg font-semibold text-ink">
            Grounded Action Map
          </Link>
          <span className="rounded-full border border-line bg-slatepanel px-2.5 py-1 text-xs font-semibold text-slate-700">
            Prototype V1
          </span>
          <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-900">
            Human Review Required
          </span>
        </div>
        <nav className="flex flex-wrap gap-2 text-sm text-slate-700" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md border border-line bg-white px-3 py-2 font-semibold hover:bg-slatepanel hover:text-signal">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
