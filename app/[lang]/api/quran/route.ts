import { NextResponse } from 'next/server'
import path from 'path';
import { promises as fs } from 'fs';
import { NextApiResponse } from 'next';

export async function GET(request: Request, res: NextApiResponse) {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), '/config/db');
    //Read the json data file data.json
    const QuranFahras = await fs.readFile(jsonDirectory + '/QuranFahras.json', 'utf8');

    const data = JSON.parse(QuranFahras)
    //Return the content of the data file in json format
    return NextResponse.json(data, { status: 200 })
}