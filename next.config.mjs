/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // distDir: 'princesharma74.github.io',
    images: {
        // unoptimized: true,
        domains: [
            'hide-rest.pockethost.io'
        ]
    },
    experimental: {
        staleTimes: {
          dynamic: 0,
          static: 180,
        },
    }
};

export default nextConfig;
