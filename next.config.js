/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponentsExternalPackages: [
            '@react-email/render',
        ],
        // images:{
        //     remotePatterns:[
        //         {
        //             protocol: 'https',
        //             hostname: 'cdn.jsdelivr.net',
        //         }
        //     ]
        // }
        env: {
            RESEND_API_KEY: process.env.RESEND_API_KEY,
          },
    }
}

module.exports = nextConfig
