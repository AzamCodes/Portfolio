// import Image from 'next/image'
// import React from 'react'

// interface Blog {
//   _id: string
//   title: string
//   description: string
//   category: string
//   slug: string
//   imageUrl: string
//   createdAt: string
//   // author: string
//   // authorImg?: string
// }

// const BlogCard = ({ blog }: { blog: Blog }) => {
//   return (
//     <div className="w-full flex flex-col lg:w-[350px] lg:min-h-[400px] h-auto max-w-sm rounded-2xl shadow-lg">
//       <div>
//         <Image
//           src={blog.imageUrl || 'https://images.unsplash.com/photo-1742995186561-38d69a6d4f99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D'}
//           alt={blog.title}
//           className="w-full h-60 rounded-2xl object-cover"
//           width={400}
//           height={225}
//         />
//       </div>
//       <div className="flex flex-col gap-3 py-3">
//         <div className="flex items-center justify-between">
//           <span className="text-sm bg-purple-500 bg-opacity-25 px-2 rounded-full text-purple-600">{blog.category}</span>
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold">{blog.title}</h2>
//           <p className="text-gray-500 text-sm mt-2 line-clamp-3">{blog.description}</p>
//         </div>
//         <div className="flex gap-2 items-center">
//           <span className="text-sm text-gray-400">{new Date(blog.createdAt).toLocaleDateString()}</span>
//           <span className="rounded-full w-1 h-1 bg-gray-600"></span>
//           <span className="text-sm text-gray-400">28min ago</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BlogCard


// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// interface Blog {
//   _id: string
//   title: string
//   description: string
//   category: string
//   slug: string
//   imgUrl: string
//   createdAt: string
//   // author: string
//   // authorImg?: string
// }

// const BlogCard = ({ blog }: { blog: Blog }) => {
//   return (
//     <div className='border p-4 rounded-lg shadow-sm'>
//       <Link href={`/blog/${blog.slug}`}>
//         <div className='flex flex-col md:flex-row gap-4'>
//           <Image
//             src={blog.imgUrl}
//             alt={blog.title}
//             width={300}
//             height={200}
//             className='rounded-lg object-cover'
//           />
//           <div>
//             <h3 className='text-xl font-semibold'>{blog.title}</h3>
//             <p className='text-gray-500 mt-2 line-clamp-3'>{blog.description}</p>
//             <div className='mt-4 text-sm text-gray-400'>
//               {blog.category} • {new Date(blog.createdAt).toLocaleDateString()}
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   )
// }

// export default BlogCard

'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { format as timeAgo } from 'timeago.js'
import FormattedDate from './FormattedDate'

interface Blog {
  _id: string
  title: string
  content: string
  category: string
  slug: string
  imageUrl: string
  createdAt: string
}

// Optional: helper to remove HTML tags
const stripHtml = (html: string) => {
  return html.replace(/<[^>]+>/g, '')
}

const BlogCard = ({ blog }: { blog: Blog }) => {


  return (
    <div className="w-full flex flex-col gap-6 font-satoshi lg:w-[320px] xl:w-[350px] lg:min-h-[450px] h-auto max-h-[450px] max-w-sm rounded-2xl shadow-lg">
      <div>
        <Image
          src={
            blog.imageUrl ||
            'https://images.unsplash.com/photo-1741462166411-b94730c55171?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt={blog.title}
          className="w-full h-60 rounded-2xl object-cover"
          width={400}
          height={225}
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm bg-purple-500 bg-opacity-25 px-2 rounded-full text-purple-600">
            {blog.category}
          </span>
        </div>

        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="text-xl line-clamp-2 font-semibold text-white hover:text-purple-500 transition-colors duration-75 ease-in-out hover:underline cursor-pointer">
            {blog.title}
          </h2>
        </Link>

        <p className="text-gray-500 text-sm line-clamp-2">
          {stripHtml(blog.content)}
        </p>

        <div className="flex gap-2 items-center">
        <span className="text-sm text-gray-400"><FormattedDate date={blog.createdAt} /></span>
          <span className="rounded-full w-1 h-1 bg-gray-600"></span>
          <span className="text-sm text-gray-400">{timeAgo(blog.createdAt)}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

