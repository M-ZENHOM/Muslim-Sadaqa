import { NextResponse } from "next/server";
import Reciters from "@/config/db/reciters.json";

export function GET() {
    return NextResponse.json(Reciters);
}