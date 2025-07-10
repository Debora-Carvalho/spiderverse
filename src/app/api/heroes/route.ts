import { NextResponse } from "next/server";
import JSONData from "./heroes.json";

export async function GET() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/heroes`);

    if (!res.ok) {
      // fallback para o JSON local
      return NextResponse.json({ data: JSONData });
    }

    const data = await res.json();
    return NextResponse.json({ data });
  } catch (err) {
    // em caso de erro de rede, também cai aqui
    return NextResponse.json({ data: JSONData });
  }
}
