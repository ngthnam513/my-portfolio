'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { Globe, Loader2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

const locales = ['vi', 'en'];

export default function LocaleSelector() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();
    const t = useTranslations('LOCALES');

    const handleLocaleChange = (newLocale: string) => {
        if (newLocale === locale) return;
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');

        startTransition(() => {
            router.push(newPath);
        });
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="hidden items-center gap-2 md:flex">
                        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Globe className="h-4 w-4" />}
                        {t(locale)}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {locales.map(code => (
                        <DropdownMenuItem key={code} onClick={() => handleLocaleChange(code)} disabled={code === locale || isPending}>
                            {t(code)}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <Collapsible className="block w-full md:hidden">
                <CollapsibleTrigger asChild>
                    <div className="flex items-center justify-between px-4 py-2">
                        {t(locale)}
                        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Globe className="h-4 w-4" />}
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="m-2 rounded-sm border dark:border-[#374151]">
                    {locales.map((code, index) => (
                        <div
                            key={code}
                            onClick={() => handleLocaleChange(code)}
                            style={{ padding: '10px' }}
                            className={index > 0 ? 'border-t dark:border-[#374151]' : ''}
                        >
                            {t(code)}
                        </div>
                    ))}
                </CollapsibleContent>
            </Collapsible>
        </>
    );
}
