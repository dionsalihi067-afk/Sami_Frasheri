"use client";

import Link from "next/link";
import { StatusPage } from "@/components/ui/StatusPage";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <StatusPage
      code="Gabim"
      title="Diçka nuk shkoi siç duhet."
      text="Ju lutemi provoni përsëri. Nëse problemi vazhdon, kthehuni pas pak."
    >
      <button type="button" onClick={reset} className="btn btn-primary">
        Provo përsëri
      </button>
      <Link href="/" className="btn btn-outline">
        Ballina
      </Link>
    </StatusPage>
  );
}
