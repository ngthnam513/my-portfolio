'use client';

import { useLocale, useTranslations } from 'next-intl';
import ThemeSelector from '../theme-selector';
import LocaleSelector from '../locale-selector';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import routes from '@/contants/routes';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Header() {
    const t = useTranslations('HEADER');
    const currentPath = usePathname();
    const currentLocale = useLocale();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const isActive = (path: string) => {
        const pathWithoutLocale = currentPath.replace(`/${currentLocale}`, '') || '/';
        if (path === routes.home) {
            return pathWithoutLocale === path;
        }
        return pathWithoutLocale.includes(path);
    };

    return (
        <header className="bg-background fixed top-0 right-0 left-0 z-50 px-4 md:px-12 lg:px-28">
            <div className="flex h-16 items-center justify-between">
                <Link href={routes.home} className="text-primary text-3xl leading-none font-bold md:text-4xl">
                    &lt;NTN /&gt;
                </Link>
                <div className="hidden items-center justify-between space-x-8 md:flex">
                    <div className="text-secondary flex space-x-4">
                        <Link href={routes.home} className={cn({ 'font-extrabold': isActive(routes.home) })}>
                            {t('ABOUT')}
                        </Link>
                        <Link href={routes.blogs} className={cn({ 'font-extrabold': isActive(routes.blogs) })}>
                            {t('BLOGS')}
                        </Link>
                        <Link
                            href={routes.miniApps}
                            className={cn({
                                'font-extrabold': isActive(routes.miniApps),
                            })}
                        >
                            {t('MINI_APPS')}
                        </Link>
                    </div>
                    <div className="flex space-x-2">
                        <ThemeSelector />
                        <LocaleSelector />
                    </div>
                </div>
                <div className="flex items-center justify-center md:hidden">
                    <Sheet open={openMobileMenu} onOpenChange={setOpenMobileMenu}>
                        <SheetTrigger className="opacity-70">
                            <Menu className="size-8" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader className="bg-background h-[68px] justify-center px-4 py-0 shadow-md">
                                <Link
                                    href={routes.home}
                                    className="text-primary text-4xl font-bold sm:hidden"
                                    onClick={() => setOpenMobileMenu(false)}
                                >
                                    &lt;NTN /&gt;
                                </Link>
                            </SheetHeader>
                            <div className="flex flex-col">
                                <Link
                                    href={routes.home}
                                    className={cn('text-secondary px-4 py-2', {
                                        'font-extrabold': isActive(routes.home),
                                    })}
                                    onClick={() => setOpenMobileMenu(false)}
                                >
                                    {t('ABOUT')}
                                </Link>
                                <Link
                                    href={routes.blogs}
                                    className={cn('text-secondary px-4 py-2', {
                                        'font-extrabold': isActive(routes.blogs),
                                    })}
                                    onClick={() => setOpenMobileMenu(false)}
                                >
                                    {t('BLOGS')}
                                </Link>
                                <Link
                                    href={routes.miniApps}
                                    className={cn('text-secondary px-4 py-2', {
                                        'font-extrabold': isActive(routes.miniApps),
                                    })}
                                    onClick={() => setOpenMobileMenu(false)}
                                >
                                    {t('MINI_APPS')}
                                </Link>
                                <div className="mt-4 border-t dark:border-[#374151]">
                                    <LocaleSelector />
                                    <ThemeSelector />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
