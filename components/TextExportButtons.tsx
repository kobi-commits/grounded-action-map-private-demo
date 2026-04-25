"use client";

import { useState } from "react";

export function TextExportButtons({
  text,
  filename,
  copyLabel = "Copy text",
  downloadLabel = "Download Markdown"
}: {
  text: string;
  filename: string;
  copyLabel?: string;
  downloadLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyText() {
    try {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          fallbackCopy(text);
        }
      } else {
        fallbackCopy(text);
      }
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1800);
    } catch {
      setStatus("error");
    }
  }

  function downloadText() {
    const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button type="button" onClick={copyText} className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
        {status === "copied" ? "Copied" : status === "error" ? "Copy failed" : copyLabel}
      </button>
      <button type="button" onClick={downloadText} className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
        {downloadLabel}
      </button>
    </div>
  );
}

function fallbackCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.opacity = "0";
  textarea.setAttribute("readonly", "true");
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, text.length);
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
