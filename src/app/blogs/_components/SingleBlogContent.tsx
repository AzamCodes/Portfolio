  import Image from 'next/image'
  import React from 'react'
  import SocialIcon from './SocialIcon'

  interface Blog {
    _id: string
    title: string
    content: string
    category: string
    slug: string
    imageUrl: string
    createdAt: string
    // author?: string
    // authorImg?: string
  }

  interface SingleBlogContentProps {
    blog: Blog
  }
  // const blogUrl = typeof window !== 'undefined'
  // ? window.location.href
  // : `http://localhost:3000/blogs/${blog.slug}`

  const SingleBlogContent: React.FC<SingleBlogContentProps> = ({ blog }) => {
    return (
   <div className="flex flex-col py-0 sm:py-8 gap-8 items-center justify-center mx-auto">
  {/* Featured image */}
  <div className="mx-auto w-full">
    <Image
      alt={blog.title}
      src={
        blog.imageUrl ||
        "https://images.unsplash.com/photo-1741866987680-5e3d7f052b87?w=500&auto=format&fit=crop&q=60"
      }
      className="object-cover rounded-3xl w-full"
      width={895}
      height={600}
      loading="lazy"
    />
  </div>

  {/* Blog content and sidebar */}
  <div className="flex flex-col-reverse md:flex-row gap-8 w-full max-w-6xl">
    {/* Main content */}
    <div className="w-full md:w-[90%]">
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>

    {/* Sidebar with social icons */}
   <div className="w-full md:w-[15%]">
      <div className="sticky top-28 flex flex-col items-center gap-4">
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Share</h3>
        <SocialIcon url={`http://localhost:3000/blogs/${blog.slug}`} title={blog.title} />
      </div>
    </div>
  </div>
</div>

    )
  }

  export default SingleBlogContent
