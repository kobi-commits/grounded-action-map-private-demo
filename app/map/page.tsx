import {
  BigPictureMap,
  ChooseYourView,
  TraceOnePath,
  WhatMakesDifferent
} from "@/components/CoherenceComponents";
import { JourneyRail } from "@/components/JourneyRail";
import { pathTraces, userJourneyViews } from "@/lib/data";

export default function LivingMapPage() {
  return (
    <div className="page-shell space-y-10">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">The Coherence Engine</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">The Living Map</h1>
        <p className="mt-2 text-lg text-slate-700">
          See how urgent needs, evidence, learning, trust, action, peacebuilding, and future capacity connect.
        </p>
        <p className="mt-5 max-w-4xl text-base leading-7 text-slate-700">
          Grounded Action Map helps people move from concern to understanding, from understanding to learning, from
          learning to responsible action, and from action to long-term recovery and peace capacity.
        </p>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
          This prototype uses sample connections. Every public claim, action pathway, and capacity hypothesis requires human review.
        </p>
      </section>

      <JourneyRail />
      <BigPictureMap />
      <TraceOnePath traces={pathTraces} />
      <ChooseYourView views={userJourneyViews} />
      <WhatMakesDifferent />
    </div>
  );
}
