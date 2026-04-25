export function BriefingDocument({ markdown }: { markdown: string }) {
  return (
    <article className="panel bg-white p-6 sm:p-8">
      <div className="max-w-4xl space-y-4">
        {markdown.split("\n").map((line, index) => {
          if (line.startsWith("# ")) {
            return <h1 key={index} className="text-3xl font-semibold leading-tight text-ink">{line.replace("# ", "")}</h1>;
          }
          if (line.startsWith("## ")) {
            return <h2 key={index} className="pt-4 text-xl font-semibold text-ink">{line.replace("## ", "")}</h2>;
          }
          if (line.startsWith("- ")) {
            return <p key={index} className="pl-5 text-sm leading-6 text-slate-700">• {line.replace("- ", "")}</p>;
          }
          if (/^\d+\.\s/.test(line)) {
            return <p key={index} className="pl-5 text-sm leading-6 text-slate-700">{line}</p>;
          }
          if (line.trim() === "") {
            return <div key={index} className="h-1" />;
          }
          return <p key={index} className="text-sm leading-7 text-slate-700">{line}</p>;
        })}
      </div>
    </article>
  );
}
