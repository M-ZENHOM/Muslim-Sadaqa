import { NextResponse } from 'next/server';
import { AyahType } from '@/types';
import { unstable_cache } from 'next/cache';

const TOTAL_AYAHS = 6236;
const CACHE_TAG = 'random_ayah';
const REVALIDATE_TIME = 24 * 60 * 60;

async function fetchRandomAyah(): Promise<AyahType> {
    const randomAyah = Math.floor(Math.random() * TOTAL_AYAHS) + 1;
    const response = await fetch(`${process.env.API_URL}/ayah/${randomAyah}/ar.alafasy`);

    if (!response.ok) {
        throw new Error('Failed to fetch ayah');
    }

    return response.json();
}

const getCachedAyah = unstable_cache(
    async () => fetchRandomAyah(),
    [CACHE_TAG],
    { revalidate: REVALIDATE_TIME }
);

export async function GET() {
    try {
        const ayah = await getCachedAyah();
        return NextResponse.json(ayah);
    } catch (error) {
        console.error('Error fetching ayah:', error);
        return NextResponse.json({ error: 'Failed to fetch ayah' }, { status: 500 });
    }
}