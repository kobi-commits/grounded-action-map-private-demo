"use client";

import { useEffect, useState } from "react";
import fallbackReportsJson from "@/data/liveReportFallback.json";

type LiveReport = {
  id: string;
  title: string;
  sourceName: string;
  date: string;
  url: string;
  format: string;
  country?: string;
  snippet?: string;
};

type ReliefWebResponse =
  | { ok: true; reports: LiveReport[] }
  | { ok: false; error: string };

const fallbackReports = fallbackReportsJson as LiveReport[];

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

export function LiveReportFeed() {
  const [reports, setReports] = useState<LiveReport[]>(fallbackReports);
  const [isFallback, setIsFallback] = useState(true);
  const [status, setStatus] = useState("Fallback sample data — live feed unavailable.");

  useEffect(() => {
    let active = true;

    fetch("/api/reliefweb")
      .then(async (response) => {
        const data = (await response.json()) as ReliefWebResponse;
        if (!response.ok || !data.ok) {
          throw new Error(data.ok ? "ReliefWeb request failed." : data.error);
        }
        return data.reports;
      })
      .then((liveReports) => {
        if (!active) return;
        if (liveReports.length === 0) {
          setReports(fallbackReports);
          setIsFallback(true);
          setStatus("Fallback sample data — live feed unavailable.");
          return;
        }
        setReports(liveReports);
        setIsFallback(false);
        setStatus("Live public reports loaded from ReliefWeb.");
      })
      .catch(() => {
        if (!active) return;
        setReports(fallbackReports);
        setIsFallback(true);
        setStatus("Fallback sample data — live feed unavailable.");
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="live-report-feed" className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="section-title">Latest Unreviewed Report Feed</h2>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
            These reports are pulled from a live public source. They are not yet reviewed and are not automatically used
            in sector analysis.
          </p>
          <p className="mt-2 text-sm font-semibold text-ink">
            Live reports are unreviewed and not automatically used in sector analysis.
          </p>
        </div>
        <span className="rounded-full border border-line bg-slatepanel px-3 py-1 text-xs font-semibold text-slate-700">
          {isFallback ? "Fallback sample data — live feed unavailable." : "Live public source"}
        </span>
      </div>

      <p className="mt-4 rounded-md border border-line bg-slatepanel p-3 text-sm font-semibold text-slate-700">
        {status}
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {reports.map((report) => (
          <article key={report.id} className="rounded-md border border-line bg-white p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                Unreviewed live feed
              </span>
              <span className="rounded-full border border-line bg-slatepanel px-2.5 py-1 text-xs font-medium text-slate-700">
                {report.format || "Format unavailable"}
              </span>
            </div>
            <h3 className="mt-3 text-base font-semibold leading-6 text-ink">{report.title}</h3>
            <dl className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-ink">Source</dt>
                <dd className="mt-1">{report.sourceName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Date</dt>
                <dd className="mt-1">{formatDate(report.date)}</dd>
              </div>
              {report.country && (
                <div className="sm:col-span-2">
                  <dt className="font-semibold text-ink">Country</dt>
                  <dd className="mt-1">{report.country}</dd>
                </div>
              )}
            </dl>
            {report.snippet && <p className="mt-3 text-sm leading-6 text-slate-700">{report.snippet}</p>}
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={report.url} className="rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
                External link
              </a>
              <button disabled className="cursor-not-allowed rounded-md border border-line bg-slatepanel px-3 py-2 text-sm font-semibold text-slate-500">
                Mark for review
              </button>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-5 rounded-md border border-line bg-slatepanel p-4 text-sm leading-6 text-slate-700">
        Live reports enter the knowledge system as raw inputs. A human review process is required before any claim
        becomes part of a sector update, action card, or public recommendation.
      </p>
    </section>
  );
}
