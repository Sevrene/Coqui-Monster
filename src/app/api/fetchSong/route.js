export const runtime = 'edge';

import { NextResponse } from 'next/server';

/**
 * Handles the GET request for fetching a song.
 * @param {Request} nextReq - The incoming request object.
 * @returns {Response} - The response object containing the song file or an error message.
 */
export async function GET(nextReq) {
  const referer = nextReq.headers.get('Referer');

  if (!referer || !referer.startsWith(process.env.NEXT_PUBLIC_BASE_URL)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const filename = nextReq.nextUrl.searchParams.get('filename');
  const fileKey = `music/${filename}`;

  const file = await MUSIC_KV.get(fileKey, { type: 'arrayBuffer' });

  if (!file) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  const head = {
    'Content-Length': file.byteLength,
    'Content-Type': 'audio/mpeg',
  };

  return new Response(file, { status: 200, headers: head });
}
