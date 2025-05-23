

// File: src/app/api/blogs/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/db";
import { Blog } from "../../../../../models/BlogModel";


export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug: params.slug });
    
    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(blog);
 } catch (error: unknown) {
  console.error("Error fetching blog:", error);

  if (error instanceof Error) {
    return NextResponse.json(
      { message: "Failed to fetch blog", error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Failed to fetch blog", error: "Unknown error" },
    { status: 500 }
  );
}
}