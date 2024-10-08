/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "res.cloudinary.com", protocol: "https", port: ""},
            {
                protocol: 'https',
                hostname: 'www.tnpgndec.com',
                port: '',
                pathname: '/images/**',
              },
        ]
    }
};

export default nextConfig;
