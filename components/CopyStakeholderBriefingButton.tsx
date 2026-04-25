"use client";

import { useState } from "react";

export function CopyStakeholderBriefingButton({ briefing }: { briefing: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyBriefing() {
    try {
      await navigator.clipboard.writeText(briefing);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1800);
    } catch {
      setStatus("error");
    }
  }

  return (
    <button onClick={copyBriefing} className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
      {status === "copied" ? "Briefing copied" : status === "error" ? "Copy failed" : "Copy stakeholder briefing"}
    </button>
  );
}
