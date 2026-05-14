const requiredEnvVars = ["MONGO_URI", "JWT_SECRET", "JWT_EXPIRES_IN"] as const;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

export const env = {
  port: process.env.PORT || 5000,
  mongouri: process.env.MONGO_URI as string,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  isProduction: process.env.NODE_ENV,
  clientUrl: process.env.CLIENT_URL,
};
