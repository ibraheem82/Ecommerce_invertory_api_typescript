import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

let isConnected = false;

async function connectDB() {
  if (!isConnected) {
    await mongoose.connect(config.db_url as string);
    isConnected = true;
    console.log("✅ MongoDB connected");
  }
}

export default async function handler(req: any, res: any) {
  await connectDB();
  return app(req, res);
}
