'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps['theme']}
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast: 'bg-background border border-border text-foreground shadow-lg',
                    title: 'text-sm font-semibold text-primary',
                    description: 'text-foreground text-xs',
                },
            }}
            {...props}
        />
    );
};

export { Toaster };
