// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "../../../../lib/db";
// import { Blog } from "../../../../models/BlogModel";

// export async function GET(req: NextRequest) {
//   try {
//     await connectDB();

//     const { searchParams } = new URL(req.url);
//     const page = parseInt(searchParams.get("page") || "1");
//     const limit = parseInt(searchParams.get("limit") || "10");
//     const query = searchParams.get("query") || "";
//     const isFeatured = searchParams.get("isFeatured");

//     const filter: any = {};

//     if (query) {
//       filter.$or = [
//         { title: { $regex: query, $options: "i" } },
//         { content: { $regex: query, $options: "i" } },
//       ];
//     }

//     if (isFeatured === "true") {
//       filter.isFeatured = true;
//     }

//     const blogs = await Blog.find(filter)
//       .sort({ createdAt: -1 })
//       .skip((page - 1) * limit)
//       .limit(limit);

//     const total = await Blog.countDocuments(filter);

//     return NextResponse.json({
//       blogs,
//       pagination: {
//         page,
//         limit,
//         total,
//         totalPages: Math.ceil(total / limit),
//       },
//     });
//   } catch (error: any) {
//     console.error("Error fetching blogs:", error);
//     return NextResponse.json(
//       { message: "Failed to fetch blogs", error: error.message },
//       { status: 500 }
//     );
//   }
// }


//****************** */
import {  NextResponse } from 'next/server'
import { connectDB } from '../../../../lib/db'
import { Blog } from '../../../../models/BlogModel'

// // export async function GET(req: NextRequest) {
// //   try {
// //     await connectDB()

// //     const { searchParams } = new URL(req.url)
// //     const query = searchParams.get('query') || '' // Optional search query

// //     const filter: any = {}

// //     if (query) {
// //       filter.$or = [
// //         { title: { $regex: query, $options: 'i' } },
// //         { description: { $regex: query, $options: 'i' } },
// //       ]
// //     }

// //     const blogs = await Blog.find(filter).sort({ createdAt: -1 })

// //     return NextResponse.json({
// //       blogs,
// //     })
// //   } catch (error: any) {
// //     console.error('Error fetching blogs:', error)
// //     return NextResponse.json(
// //       { message: 'Failed to fetch blogs', error: error.message },
// //       { status: 500 }
// //     )
// //   }
// // }
// // app/api/blogs/route.ts
// // import { NextRequest, NextResponse } from 'next/server'
// // import { connectDB } from '@/lib/db'
// // import { Blog } from '@/models/BlogModel'

// // export async function GET(req: NextRequest) {
// //   try {
// //     // 1) Connect to Mongo
// //     await connectDB()

// //     // 2) Pull 'query' from the URL, defaulting to ''
// //     const { searchParams } = new URL(req.url)
// //     const q = (searchParams.get('query') || '').trim()

// //     // 3) Build filter: if q, search title OR description
// //     const filter: Record<string, any> = {}
// //     if (q) {
// //       filter.$or = [
// //         { title:       { $regex: q, $options: 'i' } },
// //         { description: { $regex: q, $options: 'i' } },
// //       ]
// //     }

// //     // 4) Fetch all matching blogs, newest first
// //     const blogs = await Blog.find(filter).sort({ createdAt: -1 })

// //     // 5) If there's a query, also slice out lightweight suggestions
// //     if (q) {
// //       const suggestions = blogs
// //         .slice(0, 5)
// //         .map(({ slug, title }) => ({ slug, title }))

// //       return NextResponse.json({ blogs, suggestions })
// //     }

// //     // 6) No query → just return full list
// //     return NextResponse.json({ blogs })
// //   } catch (err: any) {
// //     console.error('Error fetching blogs:', err)
// //     return NextResponse.json(
// //       { message: 'Failed to fetch blogs', error: err.message },
// //       { status: 500 }
// //     )
// //   }
// // }

// // pages/api/blogs.ts
// import type { NextApiRequest, NextApiResponse } from 'next'
// // import { connectDB } from '@/lib/db'
// // import { Blog } from '@/models/BlogModel'


// export async function GET(req: Request) {
//   await connectDB()

//   const { searchParams } = new URL(req.url)
//   const q = (searchParams.get('query') || '').trim()

//   const filter: any = {}

//   if (q) {
//     filter.$or = [
//       { title: { $regex: q, $options: 'i' } },
//       { description: { $regex: q, $options: 'i' } },
//     ]
//   }

//   const blogs = await Blog.find(filter).sort({ createdAt: -1 })

//   const suggestions = blogs.slice(0, 5).map(b => ({
//     slug: b.slug,
//     title: b.title,
//   }))

//   return NextResponse.json({ blogs, suggestions })
// }


// import { NextResponse } from 'next/server';
// import { connectDB } from '@/lib/db';
// import { Blog } from '@/models/BlogModel';

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const q = (searchParams.get('query') || '').trim();

    const filter: Record<string, unknown> = {};
    if (q) {
      filter.$or = [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
      ];
    }

    const blogs = await Blog.find(filter).sort({ createdAt: -1 });

    const suggestions = q
      ? blogs.slice(0, 5).map(({ slug, title }) => ({ slug, title }))
      : undefined;

    return NextResponse.json({ blogs, ...(suggestions && { suggestions }) });
  } catch (err: unknown) {
    console.error('Error fetching blogs:', err);

    if (err instanceof Error) {
      return NextResponse.json(
        { message: 'Failed to fetch blogs', error: err.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Failed to fetch blogs', error: 'Unknown error' },
      { status: 500 }
    );
  }
}
