import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connectDB from "@/utils/connectDb";

export async function GET(request, { params }) {
  const { id } = params;
  await connectDB();

  try {
    const post = await Post.findByid(id);
    return new NextResponse(JSON.stringify({ post }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();
  await connectDB();

  try {
    const post = await Post.findByIdAndUpdate(id, data, { new: true });
    return new NextResponse(JSON.stringify({ post }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectDB();

  try {
    const post = await Post.findByIdAndDelete(id);
    return new NextResponse(JSON.stringify({ message: "Post deleted" }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
