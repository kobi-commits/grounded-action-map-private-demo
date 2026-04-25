"use client";

import { useEffect, useState } from "react";

type ReliefItem = {
  id: string;
  title: string;
  date: string;
  url: string;
  source: string;
};

const fallback: ReliefItem[] = [
  {
    id: "sample-1",
    title: "Sample fallback report: Gaza humanitarian situation update",
    date: "Prototype fallback",
    url: "https://reliefweb.int/",
    source: "ReliefWeb"
  },
  {
    id: "sample-2",
    title: "Sample fallback report: Gaza sector response update",
    date: "Prototype fallback",
    url: "https://reliefweb.int/",
    source: "ReliefWeb"
  }
];

export function ReliefWebFeed() {
  const [items, setItems] = useState<ReliefItem[]>(fallback);
  const [status, setStatus] = useState("Using local fallback until live feed loads.");

  useEffect(() => {
    fetch("/api/reliefweb")
      .then((response) => response.json())
      .then((data: { items?: ReliefItem[]; fallback?: boolean }) => {
        if (data.items?.length) {
          setItems(data.items);
          setStatus(data.fallback ? "Live feed unavailable. Showing local fallback." : "Live feed loaded from server route.");
        }
      })
      .catch(() => setStatus("Live feed unavailable. Showing local fallback."));
  }, []);

  return (
    <section className="panel p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-clay">Unreviewed live feed - not yet used for published sector analysis.</p>
      <h2 className="mt-2 section-title">Latest unreviewed report feed</h2>
      <p className="mt-2 muted">{status}</p>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <a key={item.id} href={item.url} className="rounded-md border border-line bg-slatepanel p-4 hover:bg-white">
            <span className="block text-sm font-semibold text-ink">{item.title}</span>
            <span className="mt-1 block text-xs text-slate-600">{item.source} | {item.date}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
