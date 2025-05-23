// import React from 'react'
// import { BsLinkedin, BsTwitterX } from 'react-icons/bs'
// import { FaFacebook, FaWhatsapp } from 'react-icons/fa'

// const SocialIcon = () => {
//   return (
//     <div className='flex md:flex-col items-center gap-6'>
//             <BsLinkedin size={26}/>
//             <FaFacebook size={26}/>
//             <BsTwitterX size={26}/>
//             <FaWhatsapp size={26} />
//     </div>
//   )
// }

// export default SocialIcon
'use client'

import React from 'react'
import { BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiCopy } from 'react-icons/fi'
import toast from 'react-hot-toast'

interface SocialIconProps {
  url: string
  title: string
}

const SocialIcon: React.FC<SocialIconProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        toast.success("Link copied to clipboard!")
      }).catch(() => {
        toast.error("Failed to copy link")
      })
    } else {
      toast.error("Clipboard not supported")
    }
  }

  return (
    <div className="flex md:flex-col items-center gap-6">
 <a
  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-indigo-600 transition"
>
  <BsLinkedin size={26} />
</a>

<a
  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-indigo-600 transition"
>
  <FaFacebook size={26} />
</a>

<a
  href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-indigo-600 transition"
>
  <BsTwitterX size={26} />
</a>

<a
  href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-indigo-600 transition"
>
  <FaWhatsapp size={26} />
</a>


      {/* Copy Link Button */}
      <button
        onClick={handleCopyLink}
        aria-label="Copy link"
        className="text-gray-600 hover:text-indigo-600 transition"
        type="button"
        title="Copy link"
      >
        <FiCopy size={26} />
      </button>
    </div>
  )
}

export default SocialIcon
