// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const FeaturedSection = () => {
//   const posts = [
//     {
//       id: 1,
//       title: "First Featured Post",
//       category: "Technology",
//       date: "March 2024",
//       img: "" // If empty, we’ll use a fallback below.
//     },
//     {
//       id: 2,
//       title: "Second Featured Post",
//       category: "Design",
//       date: "March 2024",
//       img: "https://images.unsplash.com/photo-1741866987680-5e3d7f052b87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//       id: 3,
//       title: "Third Featured Post",
//       category: "Development",
//       date: "March 2024",
//       img: "https://images.unsplash.com/photo-1741866987680-5e3d7f052b87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//       id: 4,
//       title: "Fourth Featured Post",
//       category: "AI",
//       date: "March 2024",
//       img: "https://images.unsplash.com/photo-1741866987680-5e3d7f052b87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
//     }
//   ];

//   return (

 
//     <div className="flex flex-col mx-auto max-w-6xl  gap-8 mt-8 mb-16 lg:flex-row">
//       {/* First Post */}
//       <div className="flex flex-col w-full gap-4 lg:w-1/2">
//         {posts[0] && (
//           <Image
//             alt="demo"
//             src={posts[0].img || "https://images.unsplash.com/photo-1741866987680-5e3d7f052b87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"}
//             className="object-cover rounded-3xl"
//             width={895}
//             height={600} // adjust as needed
//           />
//         )}
//         {/* <div className="flex items-center gap-4">
//           <h1 className="font-semibold lg:text-lg">01.</h1>
//           <Link href="/">
//             <span className="text-blue-800 lg:text-lg">{posts[0].category}</span>
//           </Link>
//           <span className="text-gray-500">{posts[0].date}</span>
//         </div>
//         <Link href={`/post/${posts[0].id}`}>
//           <span className="text-xl font-semibold lg:text-3xl lgspanfont-bold">
//             {posts[0].title}
//           </span>
//         </Link>
//       </div> */}
//        <div className="flex flex-col gap-4">
//   <div className="flex items-center justify-between">
//       <span className="text-sm bg-purple-500 bg-opacity-25 px-2 rounded-full text-purple-600">{'category'}</span>
//     </div>
//     <div>

//     <h2 className="text-xl font-semibold">{'This is the Title'}</h2>
//     <p className="text-gray-500 text-sm mt-2 line-clamp-3">{' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus dolorum molestias ad suscipit recusandae! Blanditiis fugiat dolores voluptas. Facere maiores repellat dicta at.'}</p>
//     </div>
//     <div className='flex gap-2 items-center'>
//     <span className="text-sm text-gray-400">{'Date'}</span>
//     <span className='rounded-full w-1 h-1 bg-gray-600'></span>
//     <span className="text-sm text-gray-400">{'28min ago'}</span>
//     </div>
//   </div>
//   </div>

//       {/* Other Posts */}
//       <div className="flex flex-col w-full gap-4 lg:w-1/2">
//         {/* Second Post */}
//         {posts[1] && (
//           <div className="flex justify-between gap-4 lg:h-1/3">
//             {posts[1].img && (
//               <div className="w-1/3 aspect-video">
//                 <Image
//                   alt="demo"
//                   src={posts[1].img}
//                   className="object-cover w-full h-full rounded-3xl"
//                   width={300}
//                   height={200}
//                 />
//               </div>
//             )}
//           <div className="w-2/3 flex flex-col gap-4">
//   <div className="flex items-center justify-between">
//     <span className="text-sm bg-purple-500 bg-opacity-25 px-2 rounded-full text-purple-600">
//       {posts[2].category}
//     </span>
//   </div>

//   <div>
//     <h2 className="text-xl font-semibold line-clamp-2">
//       {posts[2].title}
//     </h2>
//     <p className="text-gray-500 text-sm mt-2 line-clamp-3">
//       {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae ea tempore odio cumque adipisci quam quaerat minus architecto obcaecati? Impedit, nihil eligendi."}
//     </p>
//   </div>

//   <div className="flex gap-2 items-center">
//     <span className="text-sm text-gray-400">{posts[2].date}</span>
//     <span className="rounded-full w-1 h-1 bg-gray-600"></span>
//     <span className="text-sm text-gray-400">28 min ago</span>
//   </div>
// </div>

//           </div>
//         )}

//         {/* Third Post */}
//         {posts[2] && (
//           <div className="flex justify-between gap-4 lg:h-1/3">
//             {posts[2].img && (
//               <div className="w-1/3 aspect-video">
//                 <Image
//                   alt="demo"
//                   src={posts[2].img}
//                   className="object-cover w-full h-full rounded-3xl"
//                   width={300}
//                   height={200}
//                 />
//               </div>
//             )}
//         <div className="w-2/3 flex flex-col gap-4">
//   <div className="flex items-center justify-between">
//     <span className="text-sm bg-purple-500 bg-opacity-25 px-2 rounded-full text-purple-600">
//       {posts[2].category}
//     </span>
//   </div>

//   <div>
//     <h2 className="text-xl font-semibold line-clamp-2">
//       {posts[2].title}
//     </h2>
//     <p className="text-gray-500 text-sm mt-2 line-clamp-3">
//       {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae ea tempore odio cumque adipisci quam quaerat minus architecto obcaecati? Impedit, nihil eligendi."}
//     </p>
//   </div>

//   <div className="flex gap-2 items-center">
//     <span className="text-sm text-gray-400">{posts[2].date}</span>
//     <span className="rounded-full w-1 h-1 bg-gray-600"></span>
//     <span className="text-sm text-gray-400">28 min ago</span>
//   </div>
// </div>

//           </div>
//         )}

//         {/* Fourth Post */}
//         {posts[3] && (
//           <div className="flex justify-between gap-4 lg:h-1/3">
//             {posts[3].img && (
//               <div className="w-1/3 aspect-video">
//                 <Image
//                   alt="demo"
//                   src={posts[3].img}
//                   className="object-cover w-full h-full rounded-3xl"
//                   width={300}
//                   height={200}
//                 />
//               </div>
//             )}
//          <div className="w-2/3 flex flex-col gap-4">
//   <div className="flex items-center justify-between">
//     <span className="text-sm bg-purple-500 bg-opacity-25 px-2 rounded-full text-purple-600">
//       {posts[2].category}
//     </span>
//   </div>

//   <div>
//     <h2 className="text-xl font-semibold line-clamp-2">
//       {posts[2].title}
//     </h2>
//     <p className="text-gray-500 text-sm mt-2 line-clamp-3">
//       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus dolorum molestias ad suscipit recusandae! Blanditiis fugiat dolores voluptas. Facere maiores repellat dicta at.
//     </p>
//   </div>

//   <div className="flex gap-2 items-center">
//     <span className="text-sm text-gray-400">{posts[2].date}</span>
//     <span className="rounded-full w-1 h-1 bg-gray-600"></span>
//     <span className="text-sm text-gray-400">28 min ago</span>
//   </div>
// </div>

//           </div>
//         )}
//       </div>
//     </div>

//   );
// };

// export default FeaturedSection;


'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'timeago.js'
import FormattedDate from './FormattedDate'
import { format as timeAgo } from 'timeago.js'


interface FeaturedBlog {
  _id: string
  title?: string
  content: string
  category?: string
  date?: string
  description?: string
  slug: string
  imageUrl?: string
  createdAt: string
  isFeatured?: boolean
}

const defaultImage =
  "https://images.unsplash.com/photo-1741866987680-5e3d7f052b87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"

const FeaturedSection = ({ blog }: { blog: FeaturedBlog[] }) => {
  if (!blog || blog.length === 0) {
    return <p className="text-center text-gray-400 mt-10">No featured blogs found.</p>
  }

  return (
    <div className="flex flex-col font-satoshi mx-auto max-w-6xl px-4 gap-8 mt-8 mb-16 lg:flex-row">
      {/* First Post (Large) */}
      <div className="flex flex-col w-full gap-4 lg:w-1/2">
        {blog[0] && (
          <>
            <Link href={`/blogs/${blog[0].slug}`}>
              <Image
                alt={blog[0].title || 'Featured Image'}
                src={blog[0].imageUrl || defaultImage}
                className="object-cover rounded-3xl hover:opacity-90 transition-all duration-300"
                width={895}
                height={600}
              />
            </Link>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm bg-purple-500 bg-opacity-25 px-2 rounded-full text-purple-600">
                  {blog[0].category || 'Uncategorized'}
                </span>
              </div>
              <div>
                <Link href={`/blogs/${blog[0].slug}`}>
                  <h2 className="text-xl line-clamp-2 font-semibold text-white hover:text-purple-500 transition-colors duration-75 ease-in-out hover:underline cursor-pointer">
                    {blog[0].title || 'This is a featured post title'}
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                  {blog[0].description || 'This is a placeholder for the featured blog description.'}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-sm text-gray-400">
                  {format(blog[0].createdAt)}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Other Posts */}
      <div className="flex flex-col w-full gap-4 lg:w-1/2">
        {blog.slice(1).map((post) => (
          <div key={post._id} className="flex justify-between gap-4 lg:h-1/3">
            <div className="w-[50%] sm:w-1/3 aspect-video">
              <Link href={`/blogs/${post.slug}`}>
                <Image
                  alt={post.title || 'Post image'}
                  src={post.imageUrl || defaultImage}
                  className="object-cover w-full h-full rounded-3xl hover:opacity-90 transition-all duration-300"
                  width={300}
                  height={200}
                />
              </Link>
            </div>
            <div className="w-2/3 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm bg-purple-500 bg-opacity-25 px-2 rounded-full text-purple-600">
                  {post.category || 'Uncategorized'}
                </span>
              </div>
              <div>
                <Link href={`/blogs/${post.slug}`}>
                  <h2 className="text-xl font-semibold line-clamp-2  text-white hover:text-purple-500 transition-colors duration-75 ease-in-out hover:underline cursor-pointer">
                    {post.title || 'This is a post title'}
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                  {post.description || 'This is a placeholder for the blog description.'}
                </p>
              </div>
              <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-400"><FormattedDate date={post.createdAt} /></span>
          <span className="rounded-full w-1 h-1 bg-gray-600"></span>
          <span className="text-sm text-gray-400">{timeAgo(post.createdAt)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedSection
