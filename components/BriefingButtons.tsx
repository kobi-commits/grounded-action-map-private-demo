"use client";

import { useState } from "react";

export function CopyBriefingButton({ markdown }: { markdown: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button onClick={copy} className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
      {copied ? "Copied" : "Copy Google Docs-ready briefing"}
    </button>
  );
}

export function DownloadBriefingButton({ markdown }: { markdown: string }) {
  function download() {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "grounded-action-map-gaza-v1-briefing.md";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button onClick={download} className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
      Download briefing as Markdown
    </button>
  );
}
