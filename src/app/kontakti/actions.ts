"use server";

import { school } from "@/data/school";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; message: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_MS = 3000;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "");
  const startedAt = Number(formData.get("startedAt") ?? 0);
  const values = { name, email, message };

  // The honeypot field is invisible to people, so only bots fill it; they get a silent no-op.
  if (honeypot) return { status: "idle" };

  if (!startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "error", message: "Mesazhi u dërgua shumë shpejt. Ju lutemi provoni përsëri.", values };
  }

  const errors: ContactState["errors"] = {};
  if (name.length < 2 || name.length > 100) errors.name = "Shkruani emrin tuaj (2–100 karaktere).";
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = "Shkruani një adresë email-i të vlefshme.";
  if (message.length < 10 || message.length > 5000) errors.message = "Mesazhi duhet të ketë 10–5000 karaktere.";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Ju lutemi korrigjoni fushat e shënuara.", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("[contact] Missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL");
    return {
      status: "error",
      message: `Formulari nuk është aktiv për momentin. Na shkruani drejtpërdrejt në ${school.contact.email}.`,
      values,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Mesazh nga faqja: ${name}`,
        text: `Emri: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Emri:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("[contact] Email provider responded with", res.status);
      throw new Error("send failed");
    }
  } catch {
    return {
      status: "error",
      message: `Mesazhi nuk u dërgua. Provoni përsëri ose na shkruani në ${school.contact.email}.`,
      values,
    };
  }

  return { status: "success", message: "Faleminderit! Mesazhi juaj u dërgua." };
}
