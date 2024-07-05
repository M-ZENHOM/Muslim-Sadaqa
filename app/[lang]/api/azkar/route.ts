import { NextResponse } from "next/server";
import Azkar from "@/config/db/Azkar.json";

export function GET() {
    return NextResponse.json(Azkar);
}