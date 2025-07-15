import '@/bootstrap-env';
import { connectToRedis } from '@/lib/redis-client';

import type { NextConfig } from "next";

connectToRedis()



const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
