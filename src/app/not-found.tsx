import type { Metadata } from "next";
import Link from "next/link";
import { StatusPage } from "@/components/ui/StatusPage";

export const metadata: Metadata = { title: "Faqja nuk u gjet" };

export default function NotFound() {
  return (
    <StatusPage code="Gabim 404" title="Kjo faqe nuk ekziston." text="Adresa mund të jetë ndryshuar ose është shkruar gabim.">
      <Link href="/" className="btn btn-primary">
        Kthehu në ballinë
      </Link>
      <Link href="/kontakti" className="btn btn-outline">
        Na kontaktoni
      </Link>
    </StatusPage>
  );
}
