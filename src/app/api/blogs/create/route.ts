// // app/api/blog/create/route.ts

// import { NextResponse } from "next/server";
// // import { connectDB } from "@/lib/db"; // Adjust the import based on your file structure
import { Blog } from "../../../../../models/BlogModel"; // Your Blog model
import { connectDB } from "../../../../../lib/db";
import cloudinary from "../../../../../lib/cloudinary";


// export async function POST(request: Request) {
//   try {
//     // Connect to the database
//     await connectDB();

//     // Parse the incoming blog data from the request body
//     const blogData = await request.json();

//     // If an image is provided as a base64-encoded string, upload it to Cloudinary.
//     // Otherwise, assume blogData.imageUrl is already a URL.
//     if (blogData.imageUrl && blogData.imageUrl.startsWith("data:")) {
//       const uploadResult = await cloudinary.uploader.upload(blogData.imageUrl, {
//         folder: "myportfolio/blogs", // adjust folder as needed
//       });
//       // Replace the base64 string with the secure URL from Cloudinary
//       blogData.imageUrl = uploadResult.secure_url;
//     }

//     // Create a new blog document
//     const newBlog = new Blog({
//       title: blogData.title,
//       slug: blogData.slug,
//       category: blogData.category,
//       tags: blogData.tags, // expect an array or process a comma-separated string as needed
//       imageUrl: blogData.imageUrl,
//       content: blogData.content,
//       // Include other fields as necessary (e.g., author, publishedAt, etc.)
//     });

//     // Save the blog to the database
//     await newBlog.save();

//     return NextResponse.json(
//       { message: "Blog created successfully", blog: newBlog },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     console.error("Error creating blog:", error);
//     return NextResponse.json(
//       { message: "Error creating blog", error: error.message },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";
// import { Blog } from "@/models/BlogModel";
// import cloudinary from "@/lib/cloudinary";

// Define an interface for the incoming blog data
interface IBlogData {
  title: string;
  slug: string;
  category: string;
  tags: string[]; // Expect an array of strings
  imageUrl: string;
  content: string;
  isFeatured:Boolean;
}

export async function POST(request: Request) {
  try {
    // Connect to MongoDB
    await connectDB();

    // Parse the incoming blog data from the request body
    const blogData: IBlogData = await request.json();
    console.log("Received blogData:", blogData);

    // If an image is provided as a base64-encoded string, upload it to Cloudinary.
    // Otherwise, assume blogData.imageUrl is already a valid URL.
    // if (blogData.imageUrl && blogData.imageUrl.startsWith("data:")) {
    //   const uploadResult = await cloudinary.uploader.upload(blogData.imageUrl, {
    //     folder: "myportfolio/blogs", // Adjust folder as needed
    //   });
    //   // Replace the base64 string with the secure URL from Cloudinary
    //   blogData.imageUrl = uploadResult.secure_url;
    // }

    if (blogData.imageUrl && blogData.imageUrl.startsWith("data:")) {
      // Upload base64 image
      const uploadResult = await cloudinary.uploader.upload(blogData.imageUrl, {
        folder: "myportfolio/blogs",
      });
      blogData.imageUrl = uploadResult.secure_url;
    } else if (
      blogData.imageUrl &&
      !blogData.imageUrl.startsWith("http")
    ) {
      // You can throw an error or log it — this might be a mistake
      throw new Error("Invalid image URL format");
    }
    

    // Create a new blog document using the Blog model
    const newBlog = new Blog({
      title: blogData.title,
      slug: blogData.slug,
      category: blogData.category,
      tags: blogData.tags,
      imageUrl: blogData.imageUrl,
      isFeatured:blogData.isFeatured,
      content: blogData.content,
    });

    // Save the new blog to the database
    await newBlog.save();

    return NextResponse.json(
      { message: "Blog created successfully", blog: newBlog },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { message: "Error creating blog", error: error.message },
      { status: 500 }
    );
  }
}
