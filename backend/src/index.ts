import "dotenv/config";
import express from "express";
import { env } from "./config/env";
import cors from "cors";
import { connectDB } from "./config/db";

import authRoutes from "./routes/auth.route";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: env.clientUrl,
    credentials: true,
  }),
);

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is Running 🚀",
  });
});

// routes
app.use("/api/auth", authRoutes);

// start server
const startServer = async () => {
  await connectDB();

  app.listen(env.port, () => {
    console.log(`server is running port ${env.port}`);
  });
};

startServer();
