// File: src/app/api/blogs/featured/route.ts

    import { NextRequest, NextResponse } from "next/server";
    import { connectDB } from "../../../../lib/db";
    import { Blog } from "../../../../models/BlogModel";

    export async function GET(req: NextRequest) {
      
            try {
              await connectDB();
          
              const featuredBlogs = await Blog.find({ isFeatured: true }).sort({ createdAt: -1 });
              console.log(featuredBlogs)
          
              return NextResponse.json({ featured: featuredBlogs });
            } catch (error: any) {
              console.error("Error fetching featured blogs:", error);
              return NextResponse.json(
                { message: "Failed to fetch featured blogs", error: error.message },
                { status: 500 }
              );
            }

          
    }
