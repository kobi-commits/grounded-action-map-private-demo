export function PrototypeBanner() {
  return (
    <aside className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-xs font-semibold text-slate-700 sm:px-6 lg:px-8">
        <span className="rounded-full border border-line bg-slatepanel px-2.5 py-1 text-ink">Prototype V1</span>
        <span>public-source synthesis</span>
        <span className="hidden text-slate-400 sm:inline">|</span>
        <span>Human review required before public use</span>
        <span className="hidden text-slate-400 sm:inline">|</span>
        <span>No donation processing</span>
        <span className="hidden text-slate-400 sm:inline">|</span>
        <span>No organization ranking</span>
        <span className="hidden text-slate-400 sm:inline">|</span>
        <span>No direct beneficiary matching</span>
      </div>
    </aside>
  );
}
