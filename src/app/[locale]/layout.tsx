import Footer from '@/components/footer';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import { routing } from '@/i18n/routing';
import { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Providers } from '../providers';

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: locale === 'en' ? "Nem's Portfolio" : 'Portfolio của Nem',
        description:
            locale === 'en'
                ? "Welcome to Nem's portfolio. Explore my projects and skills."
                : 'Chào mừng bạn đến với portfolio của Nem. Khám phá các dự án và kỹ năng của tôi.',
    };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider>
                    <Providers>
                        <Toaster />
                        <Header />
                        <div className="mt-16">{children}</div>
                        <Footer />
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
