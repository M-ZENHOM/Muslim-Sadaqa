import { NextResponse } from "next/server";
import DeadDoaa from "@/config/db/DeadDoaa.json";
export function GET() {
    return NextResponse.json(DeadDoaa);
}