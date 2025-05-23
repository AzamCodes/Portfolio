// "use client"
// import React, { useState, FormEvent, ChangeEvent } from "react";

// interface SearchBarProps {
//   onSearch: (query: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   const [query, setQuery] = useState<string>("");

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex items-center max-w-lg mx-auto my-6">
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Search blog posts..."
//         className="flex-1 px-4 py-2 hover:bg-transparent bg-gray-900 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:bg-inherit focus:ring-purple-500 transition-colors duration-200"
//       />
//       <button
//         type="submit"
//         className="px-6 py-[10px] bg-purple-500 text-white rounded-r-md hover:bg-purple-600 transition-colors duration-200"
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchBar;
// components/SearchBar.tsx
// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import axios from 'axios'
// import debounce from 'lodash.debounce'

// type Suggestion = { slug: string; title: string }

// interface Props { onSearch: (q: string) => void }

// export default function SearchBar({ onSearch }: Props) {
//   const [query, setQuery] = useState('')
//   const [suggestions, setSuggestions] = useState<Suggestion[]>([])
//   const [open, setOpen] = useState(false)
//   const containerRef = useRef<HTMLDivElement>(null)

//   // Debounced suggestion fetch
//   const fetchSuggestions = debounce(async (q: string) => {
//     if (!q) { setSuggestions([]); return }
//     const { data } = await axios.get('/api/blogs', { params: { query: q } })
//     setSuggestions(data.suggestions)
//   }, 200)

//   // whenever query changes
//   useEffect(() => {
//     fetchSuggestions(query)
//     return () => { fetchSuggestions.cancel() }
//   }, [query])

//   // close on outside click
//   useEffect(() => {
//     const onClick = (e: MouseEvent) => {
//       if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
//     }
//     document.addEventListener('click', onClick)
//     return () => document.removeEventListener('click', onClick)
//   }, [])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value)
//     setOpen(true)
//     onSearch(e.target.value)      // update list below
//   }

//   const choose = (slug: string, title: string) => {
//     setQuery(title)
//     setOpen(false)
//     onSearch(title)
//     window.location.href = `/blog/${slug}`
//   }

//   return (
//     <div ref={containerRef} className="relative max-w-lg mx-auto my-6">
//       <input
//         type="search"
//         value={query}
//         onChange={handleChange}
//         onFocus={() => setOpen(true)}
//         placeholder="Search blog posts..."
//         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//       />
//       {open && suggestions.length > 0 && (
//         <ul className="absolute z-10 w-full bg-white border rounded-md mt-1 overflow-hidden">
//           {suggestions.map(s => (
//             <li
//               key={s.slug}
//               onClick={() => choose(s.slug, s.title)}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               {s.title}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import axios from 'axios'
// import debounce from 'lodash.debounce'

// type Suggestion = { slug: string; title: string }

// interface Props {
//   /** prefill the input with the current `?q=…` */
//   initialQuery: string
// }

// export default function SearchBar({ initialQuery }: Props) {
//   const [query, setQuery] = useState(initialQuery)
//   const [suggestions, setSuggestions] = useState<Suggestion[]>([])
//   const [open, setOpen] = useState(false)
//   const ref = useRef<HTMLDivElement>(null)

//   const fetchSuggestions = debounce(async (q: string) => {
//     if (!q) {
//       setSuggestions([])
//       return
//     }
//     const { data } = await axios.get('/api/blogs', {
//       params: { query: q },
//     })
//     setSuggestions(data.suggestions || [])
//   }, 200)

//   useEffect(() => {
//     fetchSuggestions(query)
//     return () => fetchSuggestions.cancel()
//   }, [query])

//   // close dropdown on outside click
//   useEffect(() => {
//     const onClick = (e: MouseEvent) => {
//       if (!ref.current?.contains(e.target as Node)) setOpen(false)
//     }
//     document.addEventListener('click', onClick)
//     return () => document.removeEventListener('click', onClick)
//   }, [])

//   const choose = (slug: string, title: string) => {
//     window.location.href = `/blog/${slug}`
//   }

//   return (
//     <div ref={ref} className="relative flex-1">
//       <input
//         name="q"
//         type="search"
//         value={query}
//         onChange={e => {
//           setQuery(e.target.value)
//           setOpen(true)
//         }}
//         onFocus={() => setOpen(true)}
//         placeholder="Search blog posts…"
//         className="w-full px-4 py-2 border-l border-t border-b rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//       />

//       {open && suggestions.length > 0 && (
//         <ul className="absolute top-full left-0 right-0 z-10 bg-white border rounded-b-md overflow-auto max-h-60">
//           {suggestions.map(s => (
//             <li
//               key={s.slug}
//               onClick={() => choose(s.slug, s.title)}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               {s.title}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

'use client'

import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce'

type Suggestion = { slug: string; title: string }

interface Props {
  /** Prefill from the URL’s ?q=… */
  initialQuery: string
}

export default function SearchBar({ initialQuery }: Props) {
  const [query, setQuery] = useState(initialQuery)
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // debounce autocomplete calls
  // const fetchSuggestions = debounce(async (q: string) => {
  //   if (!q) {
  //     setSuggestions([])
  //     return
  //   }
  //   const { data } = await axios.get('/api/blogs', { params: { query: q } })
  //   console.log('Querying:', q, 'Got suggestions:', data.suggestions)

  //   setSuggestions(data.suggestions || [])
  // }, 200)
  const fetchSuggestions = debounce(async (q: string) => {
    if (!q) {
      setSuggestions([])
      setOpen(false)
      return
    }
    try {
      const { data } = await axios.get('/api/blogs', { params: { query: q } })
      console.log('Querying:', q, 'Got suggestions:', data.suggestions)
      setSuggestions(data.suggestions || [])
      setOpen(true)
    } catch (error) {
      console.error('Autocomplete error:', error)
      setSuggestions([])
      setOpen(false)
    }
  }, 200)
  
  
  useEffect(() => {
    fetchSuggestions(query)
    return () => fetchSuggestions.cancel()
  }, [query])

  // close dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  // pick a suggestion → go to that post
  const choose = (slug: string) => {
    window.location.href = `/blogs/${slug}`
  }

  return (
    <div ref={ref} className="relative z-50 flex-1">
      <input
        name="q"  // important: matches the SSR handler’s query param
        type="search"
        value={query}
        onChange={e => {
          setQuery(e.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search blog posts…"
        className="w-full px-4 py-2 rounded-l-md focus:outline-none border-l-[0.65px] border-t-[0.65px] border-b-[0.65px] border-gray-600  bg-transparent"
      />

      {open && suggestions.length > 0 && (
        <ul className="absolute top-full left-0 right-0 z-10  bg-black/50 text-purple-600  rounded-b-md overflow-auto max-h-60">
          {suggestions.map(s => (
            <li
              key={s.slug}
              onClick={() => choose(s.slug)}
              className="px-4 py-2 hover:bg-black/25 z-50 cursor-pointer"
            >
              {s.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
