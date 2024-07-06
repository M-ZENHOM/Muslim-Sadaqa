import { NextResponse } from "next/server";
import PalestineDoaa from "@/config/db/PalestineDoaa.json";

export function GET() {
    return NextResponse.json(PalestineDoaa);
}