import mongoose from "mongoose";
import { env } from "./env";

export const connectDB = async (): Promise<void> => {
  try {
    const cann = await mongoose.connect(env.mongouri);
    console.log(`✅ Mongodb Connect on port ${cann.connection.host} `);
  } catch (error) {
    console.error("MongoDB connection faild");
    process.exit(1);
  }
};
