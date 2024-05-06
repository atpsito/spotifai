import { getServerSession } from "next-auth";
import OpenAI from "openai";

import { authOptions } from "@/config/auth.config";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { AiSong } from "./types";
import { NextRequest } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const jsonExample = [
  { song: "Everybody Hurts", artist: "R.E.M." },
  { song: "Nothing Compares 2 U", artist: "Sinead O'Connor" },
  { song: "Tears in Heaven", artist: "Eric Clapton" },
  { song: "Hurt", artist: "Johnny Cash" },
  { song: "Yesterday", artist: "The Beatles" }
];

const messages = (
  count: number,
  prompt: string
): ChatCompletionMessageParam[] => [
  {
    role: "system",
    content: `You are a helpful playlist generating assistant. 
      You should generate a list of songs and their artists according to a text prompt.
      Your should return a JSON array, where each element follows this format: {"song": <song_title>, "artist": <artist_name>}`
  },
  {
    role: "user",
    content:
      "Generate a playlist of 5 songs based on this prompt: super super sad songs"
  },
  { role: "assistant", content: JSON.stringify(jsonExample) },
  {
    role: "user",
    content: `Generate a playlist of ${count} songs based on this prompt: ${prompt}`
  }
];

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(request.url);
  const prompt = searchParams.get("prompt");
  const deviceId = searchParams.get("deviceId");
  if (prompt === null) return Response.json({ message: false });
  const { country = "ES" } = request.geo ?? { country: "ES" };
  console.log({ country });
  // @ts-ignore
  const { accessToken } = session;
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages(10, prompt)
  });

  const aiSongs = JSON.parse(response.choices[0].message.content ?? "");
  const songsPromises = aiSongs.map(async (aiSong: AiSong) => {
    const { song, artist } = aiSong;
    const fetchResponse = await fetch(
      `https://api.spotify.com/v1/search?q=${song} ${artist}&type=track&limit=1&market=${country}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      }
    );
    return await fetchResponse.json();
  });

  const tracks = await Promise.all(songsPromises);
  const songs = tracks.map((song: any) => song.tracks.items[0]);

  const songsAdded = songs.map(async (song: any) => {
    const { uri } = song;
    console.log({ uri, deviceId });
    const fetchResponse = await fetch(
      `https://api.spotify.com/v1/me/player/queue?uri=${uri}&deviceId=${deviceId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      }
    );
    return fetchResponse;
  });

  await Promise.all(songsAdded);

  return Response.json(songs);
}
