"use client";

// SECTION: Contact — contact / reservation form
import { FormEvent, useState } from "react";
import { Container } from "@/components/shared/Container";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="w-full bg-background-soft py-16 md:py-24 lg:py-32">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          <p className="font-serif text-sm tracking-[0.18em] uppercase text-gold">
            Contact
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            The table is set. All that&apos;s missing is good company.
          </h2>
          <p className="font-serif text-lg text-ink-muted">
            Send a message for reservations or questions. We&apos;ll get back to you
            soon — or call us directly at{" "}
            <a
              href={site.phoneHref}
              className="text-ink underline decoration-gold/50 transition-colors duration-200 ease-out hover:decoration-gold"
            >
              {site.phone}
            </a>
            .
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 shadow-[0_16px_40px_rgba(37,34,32,0.06)] md:p-8"
          noValidate
        >
          <label className="flex flex-col gap-2 font-serif text-sm text-ink">
            Name
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              className="rounded-sm border border-border bg-background px-4 py-3 text-base text-ink transition-colors duration-200 ease-out placeholder:text-ink-muted/60 focus:border-gold"
              placeholder="Your name"
            />
          </label>

          <label className="flex flex-col gap-2 font-serif text-sm text-ink">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="rounded-sm border border-border bg-background px-4 py-3 text-base text-ink transition-colors duration-200 ease-out placeholder:text-ink-muted/60 focus:border-gold"
              placeholder="you@email.com"
            />
          </label>

          <label className="flex flex-col gap-2 font-serif text-sm text-ink">
            Phone <span className="text-ink-muted">(optional)</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              className="rounded-sm border border-border bg-background px-4 py-3 text-base text-ink transition-colors duration-200 ease-out placeholder:text-ink-muted/60 focus:border-gold"
              placeholder="+385 ..."
            />
          </label>

          <label className="flex flex-col gap-2 font-serif text-sm text-ink">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="resize-y rounded-sm border border-border bg-background px-4 py-3 text-base text-ink transition-colors duration-200 ease-out placeholder:text-ink-muted/60 focus:border-gold"
              placeholder="Date, time, number of guests..."
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 font-serif text-base text-surface transition-colors duration-200 ease-out hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-60 active:translate-y-px"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" ? (
            <p className="font-serif text-sm text-ink" role="status">
              Thank you — your message is ready. We look forward to seeing you at Bepo.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="font-serif text-sm text-danger" role="alert">
              Something went wrong. Please email us at {site.email}.
            </p>
          ) : null}
        </form>
      </Container>
    </section>
  );
}
