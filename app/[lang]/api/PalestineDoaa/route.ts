import { NextResponse } from 'next/server'
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: Request) {
    const jsonDirectory = path.join(process.cwd(), '/config/db');
    const PalestineDoaa = await fs.readFile(jsonDirectory + '/PalestineDoaa.json', 'utf8');
    return NextResponse.json(JSON.parse(PalestineDoaa), { status: 200 })
}


