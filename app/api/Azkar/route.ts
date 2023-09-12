import { NextResponse } from 'next/server'
import path from 'path';
import { promises as fs } from 'fs';
import { NextApiResponse } from 'next';

export async function GET(request: Request, res: NextApiResponse) {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), '/config/static');
    //Read the json data file data.json
    const azkarFetch = await fs.readFile(jsonDirectory + '/MorningAzkar.json', 'utf8');
    //Return the content of the data file in json format
    return NextResponse.json(azkarFetch, { status: 200 })
}