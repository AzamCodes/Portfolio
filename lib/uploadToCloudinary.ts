// utils/uploadToCloudinary.ts
export async function uploadImageToCloudinary(file: File): Promise<string | null> {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "portBlog"); // Your preset name
      formData.append("folder", "myportfolio/blogs"); // Optional if already defined in preset
  
      const res = await fetch("https://api.cloudinary.com/v1_1/dcnclhmz8/image/upload", {
        method: "POST",
        body: formData,
      });
  
      const data = await res.json();
      return data.secure_url;
    } catch (err) {
      console.error("Upload error:", err);
      return null;
    }
  }
  
  export default uploadImageToCloudinary;