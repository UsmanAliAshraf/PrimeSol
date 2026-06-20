/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: "primesol.co" }],
                destination: "https://www.primesol.co/:path*",
                permanent: true, // 308
            },
        ];
    },
    images: {
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 31536000,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

export default nextConfig;
