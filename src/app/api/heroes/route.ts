import { NextResponse } from "next/server";

// Busca as rotas e informações que o Mockapi  criou
export async function GET() {
  const res = await fetch(`${process.env.API_URL}/api/heroes`);
  const data = await res.json();

  return NextResponse.json({ data });
}
