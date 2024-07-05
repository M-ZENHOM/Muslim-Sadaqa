import { NextResponse } from "next/server";
import QuranChapters from "@/config/db/QuranChapters.json";
export function GET() {
    return NextResponse.json(QuranChapters);
}