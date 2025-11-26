import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL(`${process.env.NEXT_PUBLIC_LEAGUE_OF_LEGENDS_API_URL}/**`)],
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
