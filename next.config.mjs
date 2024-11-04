/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        config.cache = {
            type: 'memory',
        };
        return config
    },
};

export default nextConfig;
