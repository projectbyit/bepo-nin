import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  // Placeholder delivery log — connect Resend/Formspree later for production mail.
  console.info("[contact]", {
    to: site.email,
    name,
    email,
    phone,
    message,
  });

  return NextResponse.json({ ok: true });
}
