// "use client";
// import React, { useState } from "react";
// import dynamic from "next/dynamic";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

// // Import your custom UI components and utilities
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/utils/cn";

// // Dynamically import ReactQuill with no SSR
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// // Import ReactQuill CSS (you may include this globally too)
// import "react-quill/dist/quill.snow.css";

// const AddBlogPage = () => {
//   const router = useRouter();
  
//   // Form state
//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [category, setCategory] = useState("");
//   const [tags, setTags] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [content, setContent] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const blogData = {
//       title,
//       slug,
//       category,
//       tags: tags.split(",").map((tag) => tag.trim()),
//       imageUrl,
//       content,
//     };

//     try {
//       const res = await fetch("/api/blog/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(blogData),
//       });

//       if (res.ok) {
//         toast.success("Blog created successfully!");
//         // Optionally, reset the form fields after success
//         setTitle("");
//         setSlug("");
//         setCategory("");
//         setTags("");
//         setImageUrl("");
//         setContent("");
//         // Redirect or update the UI as needed
//       } else {
//         toast.error("Error creating blog.");
//       }
//     } catch (error) {
//       console.error("Error submitting blog:", error);
//       toast.error("Something went wrong!");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-3xl font-bold mb-6 text-center">Add New Blog</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Title */}
//           <div>
//             <Label htmlFor="title">Title</Label>
//             <Input
//               id="title"
//               type="text"
//               placeholder="Enter blog title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//               className="w-full"
//             />
//           </div>

//           {/* Slug */}
//           <div>
//             <Label htmlFor="slug">Slug</Label>
//             <Input
//               id="slug"
//               type="text"
//               placeholder="Enter slug (URL-friendly title)"
//               value={slug}
//               onChange={(e) => setSlug(e.target.value)}
//               required
//               className="w-full"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <Label htmlFor="category">Category</Label>
//             <Input
//               id="category"
//               type="text"
//               placeholder="Enter category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//               className="w-full"
//             />
//           </div>

//           {/* Tags */}
//           <div>
//             <Label htmlFor="tags">Tags (comma separated)</Label>
//             <Input
//               id="tags"
//               type="text"
//               placeholder="e.g. tech, news, programming"
//               value={tags}
//               onChange={(e) => setTags(e.target.value)}
//               className="w-full"
//             />
//           </div>

//           {/* Image URL */}
//           <div>
//             <Label htmlFor="imageUrl">Featured Image URL</Label>
//             <Input
//               id="imageUrl"
//               type="url"
//               placeholder="Enter image URL"
//               value={imageUrl}
//               onChange={(e) => setImageUrl(e.target.value)}
//               className="w-full"
//             />
//           </div>

//           {/* Content (ReactQuill Editor) */}
//           <div>
//             <Label htmlFor="content">Content</Label>
//             <ReactQuill
//               theme="snow"
//               value={content}
//               onChange={setContent}
//               placeholder="Write your blog content here..."
//               className="bg-white"
//             />
//           </div>

//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             disabled={isLoading}
//             className={cn(
//               "w-full py-2 px-4 text-white font-bold rounded-lg shadow-md transition duration-200",
//               "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
//             )}
//           >
//             {isLoading ? "Submitting..." : "Submit Blog"}
//           </motion.button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBlogPage;


//***************************************************** */
"use client";

import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { Label } from "@/components/ui/label";
import { uploadImageToCloudinary }  from "../../../../lib/uploadToCloudinary";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface BlogData {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  imageUrl: string | null; // <-- updated this
  content: string;
  isFeatured: boolean;
}


const AddBlogPage: React.FC = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
  
    try {
      const imageUrl = await uploadImageToCloudinary(file);
      setImageUrl(imageUrl);
      toast.success("Image uploaded!");
    } catch (err) {
      toast.error("Image upload failed.");
      console.error(err);
    }
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const blogData: BlogData = {
      title,
      slug,
      category,
      tags: tags.split(",").map((tag) => tag.trim()),
      imageUrl,
      content,
      isFeatured,
    };

    try {
      const res = await fetch("/api/blogs/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (res.ok) {
        toast.success("Blog created successfully!");
        setTitle("");
        setSlug("");
        setCategory("");
        setTags("");
        setImageUrl("");
        setContent("");
        setIsFeatured(false);
        // router.push("/dashboard");
        router.push('/')
      } else {
        toast.error("Failed to create blog.");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };


   const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (res.ok) {
        toast.success("Logged out successfully!");
        router.push("/admin/login"); // or "/" or any route you want to redirect to
      } else {
        toast.error("Logout failed.");
      }
    } catch (error) {
      toast.error("An error occurred during logout.");
      console.error(error);
    }
  };







  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded-lg p-6">
         <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Add New Blog
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Slug */}
          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              type="text"
              placeholder="blog-title-url"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </div>

          {/* Category */}
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              type="text"
              placeholder="Category name"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          {/* Tags */}
          <div>
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              type="text"
              placeholder="e.g. tech, web, js"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          {/* Image Upload */}
          <div>
            <Label htmlFor="imageUpload">Featured Image</Label>
            <div
              {...getRootProps()}
              className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 rounded-lg text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-gray-600 dark:text-gray-300">Drop the image here...</p>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">
                  Drag & drop an image here, or click to select
                </p>
              )}
              {/* {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Uploaded preview"
                  className="mt-4 rounded-md max-h-48 mx-auto"
                />
              )} */}
              {imageUrl && (
  <div className="relative mt-4 mx-auto" style={{ width: 'auto', height: '192px' }}>
    <Image
      src={imageUrl}
      alt="Uploaded preview"
      layout="fill"
      objectFit="contain"
      className="rounded-md"
    />
  </div>
)}
            </div>
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center space-x-4">
            <Label htmlFor="isFeatured">Mark as Featured</Label>
            <button
              type="button"
              onClick={() => setIsFeatured((prev) => !prev)}
              className={cn(
                "w-12 h-6 rounded-full flex items-center transition-colors",
                isFeatured ? "bg-green-500" : "bg-gray-400"
              )}
            >
              <span
                className={cn(
                  "w-6 h-6 bg-white rounded-full shadow transform transition-transform",
                  isFeatured ? "translate-x-6" : "translate-x-0"
                )}
              />
            </button>
          </div>

          {/* Content */}
          <div>
            <Label htmlFor="content">Content</Label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Write your blog content here..."
              className="bg-white dark:bg-gray-800 text-black dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className={cn(
              "w-full py-2 px-4 text-white font-bold rounded-lg shadow-md transition duration-200",
              "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600",
              isLoading && "opacity-50 cursor-not-allowed"
            )}
          >
            {isLoading ? "Submitting..." : "Submit Blog"}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPage;
