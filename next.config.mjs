/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'hide-rest.pockethost.io'
        ]
    },
    experimental: {
        staleTimes: {
          dynamic: 30,
          static: 180,
        },
    }
};

export default nextConfig;
