import '@/styles/index.scss';
import { Metadata } from 'next';
import 'tw-animate-css';

export const metadata: Metadata = {
    icons: {
        icon: '/my-logo.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
