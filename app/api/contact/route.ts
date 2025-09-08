import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  // Aquí puedes integrar Resend / Vercel Forms / webhook propio
  console.log("Contacto:", Object.fromEntries(form.entries()));
  return NextResponse.json({ ok: true });
}
