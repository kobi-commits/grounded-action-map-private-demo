const localCommands = ["npm install", "npm run build", "npm run dev"];

const githubSteps = [
  "create GitHub repository",
  "push code",
  "confirm package.json exists at repo root",
  "confirm npm run build passes locally"
];

const hostSteps = [
  "import GitHub repository",
  "select Next.js",
  "deploy",
  "open deployed URL",
  "test core routes",
  "verify live feed fallback"
];

const pagesToTest = [
  "/",
  "/start",
  "/map",
  "/sources",
  "/action",
  "/trust",
  "/learn",
  "/learn/simulation-lab",
  "/peacebuilding",
  "/foresight",
  "/demo/live",
  "/executive",
  "/briefing",
  "/methodology",
  "/readiness",
  "/launch"
];

const doNotEnable = [
  "payments",
  "donations",
  "user accounts",
  "authentication",
  "public intake forms with sensitive data",
  "direct beneficiary matching",
  "unreviewed public recommendations",
  "live AI publishing",
  "automatic sector updates from live feed"
];

const readiness = [
  "build passes",
  "routes load",
  "live feed fails gracefully",
  "mobile layout works",
  "no sensitive data",
  "no payments",
  "no user accounts",
  "no direct beneficiary matching",
  "methodology visible",
  "review labels visible",
  "prototype banner visible",
  "noindex enabled"
];

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="panel p-5">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
        {items.map((item) => <li key={item}>- {item}</li>)}
      </ul>
    </article>
  );
}

export default function DeployPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Deployment Instructions</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">How to publish the prototype safely.</p>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-700">
          Prototype V1 can be deployed publicly for review, but search indexing should remain disabled until advisory
          review and public beta readiness are complete.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="panel p-5">
          <h2 className="text-lg font-semibold text-ink">Local Test</h2>
          <pre className="mt-4 overflow-x-auto rounded-md border border-line bg-slatepanel p-4 text-sm text-ink">
            {localCommands.join("\n")}
          </pre>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            After the development server starts, open <span className="font-semibold text-ink">http://localhost:3000</span>.
          </p>
        </article>
        <ListCard title="GitHub" items={githubSteps} />
        <ListCard title="Vercel or Next.js-Compatible Host" items={hostSteps} />
        <ListCard title="Pages to Test After Deployment" items={pagesToTest} />
        <ListCard title="Do Not Enable Yet" items={doNotEnable} />
        <ListCard title="Deployment Readiness Checklist" items={readiness} />
      </section>

      <section className="panel p-5">
        <h2 className="text-xl font-semibold text-ink">Public Demo Warning</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">This is Prototype V1. Human review required before public use.</p>
      </section>
    </div>
  );
}
