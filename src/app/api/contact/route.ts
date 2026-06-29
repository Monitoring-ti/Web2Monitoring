import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  role?: string;
  industry?: string;
  requirementType: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;

    if (!data.name || !data.company || !data.email || !data.phone || !data.requirementType) {
      return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      return NextResponse.json({ error: "Correo inválido." }, { status: 400 });
    }

    // Punto de integración: CRM, correo transaccional o webhook interno.
    console.info("[contact]", {
      ...data,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "No se pudo procesar la solicitud." }, { status: 500 });
  }
}
