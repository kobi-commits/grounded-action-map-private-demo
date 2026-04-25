"use client";

import { useState } from "react";
import type { LearningPathway } from "@/types";
import { pathwayFilename, pathwayMarkdown } from "@/lib/learning";

export function PathwayExportButtons({ pathway }: { pathway: LearningPathway }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const markdown = pathwayMarkdown(pathway);

  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(markdown);
        } catch {
          fallbackCopy(markdown);
        }
      } else {
        fallbackCopy(markdown);
      }
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setStatus("error");
    }
  }

  function download() {
    const url = URL.createObjectURL(new Blob([markdown], { type: "text/markdown;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = pathwayFilename(pathway);
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button onClick={copy} className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
        {status === "copied" ? "Pathway copied" : status === "error" ? "Copy failed" : "Copy pathway"}
      </button>
      <button onClick={download} className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
        Download pathway
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
