import Image from 'next/image'
import React from 'react'
import BlogCard from './BlogCard'

interface Blog {
  _id: string
  title: string
  content: string
  category: string
  slug: string
  imageUrl: string
  createdAt: string
  isFeatured:boolean
  // author: string
  // authorImg?: string
}

const BlogList = ({ blog }: { blog: Blog[] | undefined }) => {
  if (!blog || blog.length === 0) {
    return <p className='text-center font-satoshi text-gray-400 mt-10'>No blog found.</p>
  }
  return (
    <>
 <div className="flex mx-auto uppercase font-bold font-satoshi max-w-6xl text-4xl px-4 pl-3 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
  All blogs
</div>

    <div className="grid grid-cols-1 font-satoshi place-items-center md:grid-cols-2 lg:grid-cols-3 px-4 xl:px-0 pb-8 mx-auto max-w-6xl gap-6">

        {/* <div className='flex flex-col max-w-[360px] h-fit bg-slate-500'>
            <div className='w-[] h-full'>
            <Image objectFit='cover' src={'https://images.unsplash.com/photo-1742995186561-38d69a6d4f99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D'} fill alt='Demo'/>
            </div>
            <div className='flex flex-col gap-2'>
                <div>
                    Category
                </div>
                <div>Title</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, similique corrupti ratione totam magnam inventore modi, sequi et cupiditate aperiam iure hic. Possimus, quisquam!</div>
            </div>
        </div> */}
          {blog.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}




    </div>
   </>
  )
}

export default BlogList
