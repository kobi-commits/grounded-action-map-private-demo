import { BriefingDocument } from "@/components/BriefingDocument";
import { CopyStakeholderBriefingButton } from "@/components/CopyStakeholderBriefingButton";
import { DownloadStakeholderBriefingButton } from "@/components/DownloadStakeholderBriefingButton";
import { generateStakeholderBriefing } from "@/lib/generateStakeholderBriefing";

export default function BriefingPage() {
  const briefing = generateStakeholderBriefing();

  return (
    <div className="page-shell space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-ink">Stakeholder Briefing</h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
          A Google Docs-ready overview of Grounded Action Map: Gaza V1.
        </p>
      </section>
      <section className="panel p-5">
        <p className="text-sm leading-6 text-slate-700">
          This briefing is generated from prototype data and should be reviewed before external circulation.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <CopyStakeholderBriefingButton briefing={briefing} />
          <DownloadStakeholderBriefingButton briefing={briefing} />
        </div>
      </section>
      <BriefingDocument markdown={briefing} />
    </div>
  );
}
