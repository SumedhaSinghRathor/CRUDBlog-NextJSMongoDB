import connectDB from "@/utils/connectDb";
import { NextResponse } from "next/server";
import Post from "@/models/Post";

export async function POST(request) {
  await connectDB();
  const data = await request.json();

  try {
    const post = await Post.create(data);
    return new NextResponse(JSON.stringify({ post }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}

export async function GET() {
  await connectDB();
  try {
    const posts = await Post.find();
    return new NextResponse(JSON.stringify({ posts }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
