import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

declare global {
  var mongooseCache: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI must be set in .env");
  }

  // Return cached connection if exists
  if (cached.conn) return cached.conn;

  // Create new connection promise if not already created
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  console.log(`Connected to DB (${process.env.NODE_ENV})`);

  return cached.conn;
};