// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI!;

// export const connectDB = async () => {
//   if (mongoose.connections[0].readyState) return;
//   await mongoose.connect(MONGODB_URI);
//   console.log("MongoDB connected");
// };


import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose
    .connect(MONGODB_URI)
    .then((mongoose) => mongoose);
  
  }
  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}
