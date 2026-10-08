"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { sendContactMessage, type ContactState } from "@/app/kontakti/actions";
import { cn } from "@/lib/utils";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "mt-2 block w-full rounded-xl border bg-paper px-4 py-3.5 text-base text-graphite outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-graphite focus:shadow-[0_0_0_3px_rgb(38_36_34/0.08)]";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, initialState);
  const [startedAt, setStartedAt] = useState(0);
  const form = useRef<HTMLFormElement>(null);
  const status = useRef<HTMLParagraphElement>(null);

  useEffect(() => setStartedAt(Date.now()), []);

  useEffect(() => {
    if (state.status === "success") {
      form.current?.reset();
      setStartedAt(Date.now());
    }
    if (state.status !== "idle") status.current?.focus();
  }, [state]);

  const err = state.errors ?? {};
  const v = state.status === "error" ? state.values : undefined;

  return (
    <form ref={form} action={action} noValidate className="space-y-5" aria-describedby="contact-status">
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Mos e plotësoni këtë fushë</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Emri
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          defaultValue={v?.name}
          key={`name-${v?.name ?? ""}`}
          aria-invalid={Boolean(err.name)}
          aria-describedby={err.name ? "name-error" : undefined}
          className={cn(fieldClass, err.name ? "border-red" : "border-line")}
        />
        {err.name && (
          <p id="name-error" className="mt-2 text-sm text-red-deep">
            {err.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email-i
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={200}
          defaultValue={v?.email}
          key={`email-${v?.email ?? ""}`}
          aria-invalid={Boolean(err.email)}
          aria-describedby={err.email ? "email-error" : undefined}
          className={cn(fieldClass, err.email ? "border-red" : "border-line")}
        />
        {err.email && (
          <p id="email-error" className="mt-2 text-sm text-red-deep">
            {err.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Mesazhi
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={5000}
          defaultValue={v?.message}
          key={`message-${v?.message?.length ?? 0}`}
          aria-invalid={Boolean(err.message)}
          aria-describedby={err.message ? "message-error" : undefined}
          className={cn(fieldClass, "resize-y", err.message ? "border-red" : "border-line")}
        />
        {err.message && (
          <p id="message-error" className="mt-2 text-sm text-red-deep">
            {err.message}
          </p>
        )}
      </div>

      <div
        id="contact-status"
        ref={status}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={cn(
          "rounded-xl text-[0.9375rem] leading-relaxed outline-none",
          state.status === "success" && "border border-[#2f6b45]/25 bg-[#2f6b45]/8 px-4 py-3.5 text-[#245536]",
          state.status === "error" && "border border-red/25 bg-red/5 px-4 py-3.5 text-red-deep",
        )}
      >
        {state.status !== "idle" ? state.message : ""}
      </div>

      <button type="submit" disabled={pending} className="btn btn-primary w-full sm:w-auto sm:min-w-52">
        {pending ? (
          <>
            <span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Duke dërguar…
          </>
        ) : (
          "Dërgo mesazhin"
        )}
      </button>

      <p className="text-xs leading-relaxed text-muted">
        Të dhënat përdoren vetëm për t’iu përgjigjur mesazhit tuaj. Shihni{" "}
        <Link href="/politika-e-privatesise" className="underline underline-offset-2">
          Politikën e Privatësisë
        </Link>
        .
      </p>
    </form>
  );
}
