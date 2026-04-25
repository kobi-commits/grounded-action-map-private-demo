"use client";

export function DownloadStakeholderBriefingButton({ briefing }: { briefing: string }) {
  function downloadBriefing() {
    const blob = new Blob([briefing], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "grounded-action-map-gaza-v1-stakeholder-briefing.md";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button onClick={downloadBriefing} className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
      Download stakeholder briefing
    </button>
  );
}
