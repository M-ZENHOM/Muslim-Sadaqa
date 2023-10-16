import { NextResponse } from 'next/server'
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: Request) {
    if (request.method === 'GET') {
        const jsonDirectory = path.join(process.cwd(), '/config/db');
        const DeadDoaa = await fs.readFile(jsonDirectory + '/DeadDoaa.json', 'utf8');
        return NextResponse.json(JSON.parse(DeadDoaa), { status: 200 })
    } else {
        return NextResponse.json("method not allowed", { status: 405 })
    }
}