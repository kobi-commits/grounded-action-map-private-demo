import Link from "next/link";

const footerLinks = [
  ["Start Here", "/start"],
  ["Living Map", "/map"],
  ["Launch Plan", "/launch"],
  ["Partner Kit", "/partner-kit"],
  ["Campus Kit", "/campus-kit"],
  ["Media Kit", "/media-kit"],
  ["Governance", "/governance"],
  ["Build Roadmap", "/build-roadmap"],
  ["Methodology", "/methodology"],
  ["Readiness", "/readiness"],
  ["Deploy", "/deploy"],
  ["Version Status", "/version"],
  ["Feedback", "/feedback"]
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
        <p className="font-medium text-ink">Methodology note</p>
        <p>
          Prototype V1. Human review required. No donation processing. No organization ranking. No direct beneficiary
          matching. No tactical operational data.
        </p>
        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer links">
          {footerLinks.map(([label, href]) => (
            <Link key={href} href={href} className="text-signal underline">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
