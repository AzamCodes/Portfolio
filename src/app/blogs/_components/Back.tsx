import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Back = () => {
  return (
    <>
    <Link href={'/blogs'}>
    <div className='flex items-center hover:opacity-90  bg-white/10 backdrop-filter backdrop-blur-sm gap-1 border-[0.65px] border-gray-800 w-fit py-[4px] px-1 sm:py-[6px] opacity-100 rounded-md'>
  <ChevronLeft size={18} />
  <span className='text-[10px] md:text-[12px] font-bold'>Back to Blogs</span>
</div>
    </Link>
    </>
  )
}

export default Back