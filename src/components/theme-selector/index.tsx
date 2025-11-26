'use client';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Laptop, Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

const themes = [
    {
        name: 'light',
        icon: <Sun className="mt-0.5 h-5 w-5" />,
    },
    {
        name: 'dark',
        icon: <Moon className="mt-0.5 h-5 w-5" />,
    },
    {
        name: 'system',
        icon: <Laptop className="mt-0.5 h-5 w-5" />,
    },
];

export default function ThemeSelector() {
    const { theme = 'system', setTheme } = useTheme();
    const t = useTranslations('THEMES');

    const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="hidden md:block">
                        {theme === 'dark' ? (
                            <Moon className="h-5 w-5" />
                        ) : theme === 'light' ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Laptop className="h-5 w-5" />
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {themes.map(({ name, icon }) => (
                        <DropdownMenuItem key={name} onClick={() => applyTheme(name as 'light' | 'dark' | 'system')}>
                            {icon}
                            {t(name)}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <Collapsible className="block w-full md:hidden">
                <CollapsibleTrigger asChild>
                    <div className="flex items-center justify-between px-4 py-2">
                        {t(theme)}
                        {theme === 'dark' ? (
                            <Moon className="h-4 w-4" />
                        ) : theme === 'light' ? (
                            <Sun className="h-4 w-4" />
                        ) : (
                            <Laptop className="h-4 w-4" />
                        )}
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="m-2 rounded-sm border dark:border-[#374151]">
                    {themes.map(({ name, icon }, index) => (
                        <div
                            key={name}
                            onClick={() => applyTheme(name as 'light' | 'dark' | 'system')}
                            style={{
                                display: 'flex',
                                justifyItems: 'center',
                                gap: '10px',
                                padding: '10px',
                            }}
                            className={index > 0 ? 'border-t dark:border-[#374151]' : ''}
                        >
                            {icon} <span>{t(name)}</span>
                        </div>
                    ))}
                </CollapsibleContent>
            </Collapsible>
        </>
    );
}
