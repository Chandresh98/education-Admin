/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true },
    // // rewrite: async path => {
    //     return [
    //         {
    //             source: '/:path*{/}',
    //             has: [
    //                 {
    //                     type: 'host',
    //                     value: 'localhost:3000',
    //                 },
    //             ],
    //             destination: '/:subdomain/:path*',
    //         },
    //     ]
    // },
}

export default nextConfig
