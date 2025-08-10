import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import RouteLoading from "@/components/route-loading";
import { Providers } from "../providers";
import { Metadata } from "next";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: LocaleLayoutProps["params"];
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Nem's Portfolio" : "Portfolio của Nem",
    description:
      locale === "en"
        ? "Welcome to Nem's portfolio. Explore my projects and skills."
        : "Chào mừng bạn đến với portfolio của Nem. Khám phá các dự án và kỹ năng của tôi.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Providers>
            <RouteLoading />
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
