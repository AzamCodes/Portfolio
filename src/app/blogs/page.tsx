// "use client"
// import React from 'react'
// import BlogHead from './_components/BlogHead'
// import Image from 'next/image'
// import FeaturedSection from './_components/FeaturedSection'
// import BlogList from './_components/BlogList'
// import SearchBar from './_components/SearchBar'

// const BlogPage = () => {
//   const handleSearch = (query: string) => {
//     // Implement your search logic here, e.g., filter blog posts or perform an API call.
//     console.log("Searching for:", query);
//   };
//   return (
//     <>
//     <div className='px-[24px] '>
//         <BlogHead/>
//         <SearchBar onSearch={handleSearch} />
//         <FeaturedSection/>
//         <BlogList/>
//     </div>
//     </>
//   )
// }

// export default BlogPage




// 'use client'

// import React, { useEffect, useState } from 'react'
// import BlogHead from './_components/BlogHead'
// import FeaturedSection from './_components/FeaturedSection'
// import BlogList from './_components/BlogList'
// import SearchBar from './_components/SearchBar'
// import axios from 'axios'
// import type { GetServerSideProps } from 'next'

// interface Blog {
//   _id: string
//   title: string
//   description: string
//   content:string
//   category: string
//   slug: string
//   imageUrl: string
//   isFeatured:boolean
//   createdAt: string
//   author: string
//   authorImg?: string
// }

// const BlogPage = () => {
//   const [blogs, setBlogs] = useState<Blog[]>([])
//   const [loading, setLoading] = useState(true)
//   const [searchQuery, setSearchQuery] = useState('')

//   const fetchBlogs = async (query = '') => {
//     try {
//       setLoading(true)
//       // If query is provided, include it in the request
//       const res = await axios.get(`/api/blogs`, {
//         params: { query },
//       })
//       // console.log(res.data.blogs)
//       setBlogs(res.data.blogs)
//     } catch (err) {
//       console.error('Failed to fetch blogs:', err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchBlogs() // Fetch all blogs on component mount
//   }, [])

//   const handleSearch = (query: string) => {
//     setSearchQuery(query)
//     fetchBlogs(query) // Fetch blogs with search query
//   }

//   return (
//     <div className='px-[24px]'>
//       <BlogHead />
//       <SearchBar onSearch={handleSearch} />
//       <FeaturedSection blog={blogs.filter((blog) => blog.isFeatured)} />
//       {loading ? (
//         <p className='text-center text-gray-500 mt-10'>Loading blogs...</p>
//       ) : (
//         <BlogList blogs={blogs} />
//       )}
//     </div>
//   )
// }

// export default BlogPage



// export const getStaticProps: GetStaticProps = async () => {
//   // fetch all blogs at build time
//   const res = await axios.get(`http://localhost:3000/api/blogs`)
//   return {
//     props: { initialBlogs: res.data.blogs },
//     revalidate: 60,  // ISR: rebuild every 60s
//   }
// }

// type Props = {
//   initialBlogs: Blog[]
// }

// export default function BlogPage({ initialBlogs }: Props) {
//   const [blogs, setBlogs] = useState<Blog[]>(initialBlogs)
//   const [featured] = useState(initialBlogs.filter(b => b.isFeatured))

//   const handleSearch = async (q: string) => {
//     if (!q) {
//       setBlogs(initialBlogs)
//       return
//     }
//     const { data } = await axios.get(`/api/blogs`, { params: { query: q } })
//     setBlogs(data.blogs)
//   }

//   return (
//     <>
//       <BlogHead />
//       <SearchBar onSearch={handleSearch} />
//       <FeaturedSection blog={featured} />
//       <BlogList blogs={blogs} />
//     </>
//   )
// }
import BlogHead from './_components/BlogHead'
import FeaturedSection from './_components/FeaturedSection'
import BlogList from './_components/BlogList'
import SearchBar from './_components/SearchBar'
import { connectDB } from '../../../lib/db'
import { Blog } from '../../../models/BlogModel'


export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams: { q?: string }
}

interface Blog {
  _id: string
  title: string
  description: string
  content: string
  category: string
  slug: string
  imageUrl: string
  isFeatured: boolean
  createdAt: string
  // author: string
  // authorImg?: string
}

export default async function BlogsPage({ searchParams }: PageProps) {
  const q = (searchParams.q || '').trim()

  await connectDB()

  const filter: Record<string, any> = {}
  if (q) {
    filter.$or = [
      { title: { $regex: q, $options: 'i' } },
      { description: { $regex: q, $options: 'i' } },
    ]
  }

  const blogsFromDb = await Blog.find(filter).sort({ createdAt: -1 }).lean()

    // Map to exactly your Blog interface
    const blogs: Blog[] = (blogsFromDb as any[]).map(b => ({
      _id:         b._id.toString(),
      title:       b.title,
      description: b.description,
      content:     b.content,
      category:    b.category,
      slug:        b.slug,
      imageUrl:    b.imageUrl,
      isFeatured:  b.isFeatured,
      createdAt:   (b.createdAt as Date).toISOString(),
      // author:      b.author,
      // authorImg:   b.authorImg,
    }));
  

  const featured = blogs.filter(b => b.isFeatured)

  return (
    <>
      <BlogHead />
      <form
        method="get"
        action="/blogs"
        role="search"
        className="flex items-center px-4 w-full md:max-w-lg mx-auto my-6"
      >
        <SearchBar initialQuery={q} />
        <button
          type="submit"
          className="px-3 md:px-6 py-2 fancy-btn  rounded-r-md  transition"
        >
          <span>
          Search
          </span>
        </button>
      </form>
      <FeaturedSection blog={featured} />
      <BlogList blog={blogs} />
    </>
  )
}
