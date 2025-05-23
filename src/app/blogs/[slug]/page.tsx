// File: src/app/blogs/[slug]/page.tsx
// import React from "react";
// import Back from "../_components/Back";
// import SingleBlogHeader from "../_components/SingleBlogHeader";
// import SingleBlogContent from "../_components/SingleBlogContent";
// import { TracingBeam } from "@/components/ui/tracing-beam";

// interface Blog {
//   _id: string;
//   title: string;
//   content: string;
//   category: string;
//   slug: string;
//   imageUrl: string;
//   createdAt: string;
// }

// async function getBlogData(slug: string): Promise<Blog> {
//   const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch blog data");
//   }
//   return res.json();
// }


// interface SingleBlogPageProps {
//   params: { slug: string };
// }

// const SingleBlogPost = async ({ params }: SingleBlogPageProps) => {
//   const blogData = await getBlogData(params.slug);

//   // Build your content; pass blogData to header and content components as needed
//   const content = (
//     <div className="max-w-6xl mx-auto">
//       <Back />
//       <SingleBlogHeader blog={blogData} />
//       <SingleBlogContent blog={blogData} />
//     </div>
//   );

//   return (
//     <div className="bg-black px-4 sm:px-[10px] md:px-[18px] lg:px-[22px] xl:px-[28px] w-full min-h-[100vh] 2xl:px-24">
//       {/* Use TracingBeam on medium screens and above */}
//       <div className="hidden md:block">
//         <TracingBeam className="md:px-6">{content}</TracingBeam>
//       </div>
//       {/* Direct content on small screens */}
//       <div className="block md:hidden">{content}</div>
//     </div>
//   );
// };

// export default SingleBlogPost;
import React from "react";
import Back from "../_components/Back";
import SingleBlogHeader from "../_components/SingleBlogHeader";
import SingleBlogContent from "../_components/SingleBlogContent";
import { TracingBeam } from "@/components/ui/tracing-beam";
import type { Metadata } from "next";

interface Blog {
  _id: string;
  title: string;
  content: string;
  category: string;
  slug: string;
  imageUrl: string;
  createdAt: string;
  tags?: string[] 
}

async function getBlogData(slug: string): Promise<Blog> {
  const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return res.json();
}

// ✅ DYNAMIC SEO METADATA
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const blog = await getBlogData(params.slug);

  return {
    title: `${blog.title} | My Awesome Blog`,
    description: blog.content.slice(0, 160), // SEO snippet
    openGraph: {
      title: blog.title,
      description: blog.content.slice(0, 160),
      images: [blog.imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.content.slice(0, 160),
      images: [blog.imageUrl],
    },
  };
}

interface SingleBlogPageProps {
  params: { slug: string };
}

const SingleBlogPost = async ({ params }: SingleBlogPageProps) => {
  const blogData = await getBlogData(params.slug);

  const content = (
    <div className="max-w-6xl font-satoshi mx-auto">
      <Back />
      <SingleBlogHeader blog={blogData} />
      <SingleBlogContent blog={blogData} />
    </div>
  );

  return (
    <div className="bg-black px-4 sm:px-[10px] font-satoshi py-12 md:px-[18px] lg:px-[22px] xl:px-[28px] w-full min-h-[100vh] 2xl:px-24">
      <div className="hidden md:block">
        <TracingBeam className="md:px-6">{content}</TracingBeam>
      </div>
      <div className="block md:hidden">{content}</div>
    </div>
  );
};

export default SingleBlogPost;
