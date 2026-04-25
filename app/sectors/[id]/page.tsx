import { notFound } from "next/navigation";
import { SectorDetail } from "@/components/SectorDetail";
import { getSector, sectors } from "@/lib/data";

export function generateStaticParams() {
  return [
    ...sectors.map((sector) => ({ id: sector.id })),
    { id: "protection-women-youth" }
  ];
}

export default async function SectorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sector = getSector(id);
  if (!sector) notFound();
  return (
    <div className="page-shell">
      <SectorDetail sector={sector} />
    </div>
  );
}
