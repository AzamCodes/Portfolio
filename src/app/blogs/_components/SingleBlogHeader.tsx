import React from 'react'
import Tags from './Tags'
import FormattedDate from './FormattedDate'
interface Blog {
  _id: string
  title: string
  content: string
  category: string
  slug: string
  imageUrl: string
  createdAt: string
  tags?: string[] 
  // author?: string
  // authorImg?: string
}

interface SingleBlogHeaderProps {
  blog: Blog
}

const SingleBlogHeader: React.FC<SingleBlogHeaderProps> = ({ blog })  => {
  return (
    <div className='flex flex-col py-8  gap-4 items-center  justify-center'>
      <div> 
      <span className='text-sm text-gray-300 sm:text-lg'>
  Published <FormattedDate date={blog.createdAt} />
     </span>
      </div>
      <div>
        <h1 className='text-2xl sm:text-4xl text-center font-bold'>{blog.title}</h1>
      </div>
      <div>   
      <Tags tags={blog.tags || []} />
      </div>
    </div>
  )
}

export default SingleBlogHeader