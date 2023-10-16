import { NextResponse } from 'next/server'
import path from 'path';
import { promises as fs } from 'fs';
import { NextApiResponse } from 'next';

export async function GET(request: Request, res: NextApiResponse) {
    const jsonDirectory = path.join(process.cwd(), '/config/db');
    const QuranFahras = await fs.readFile(jsonDirectory + '/QuranFahras.json', 'utf8');
    const data = JSON.parse(QuranFahras)
    return NextResponse.json(data, { status: 200 })
}