'use client';

import { useTranslations } from 'next-intl';
import { Copy, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';
import MySocialMedia from '../my-social-media';

export default function Footer() {
    const t = useTranslations();
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success(t('ACTION.COPY'), {
                description: t('ACTION.COPIED', { text }),
            });
        });
    };

    return (
        <footer className="border-t dark:border-gray-700">
            <div className="bg-background px-2 py-8">
                <p className="text-secondary mx-auto max-w-xl text-center">{t('FOOTER.MESSAGE', { year: new Date().getFullYear() })}</p>
                <div className="mt-8 flex items-end justify-center gap-4">
                    <Mail className="text-secondary h-6 w-6" />
                    <span className="text-primary text-2xl font-bold">ngthnam513@gmail.com</span>
                    <button className="text-secondary cursor-pointer" onClick={() => handleCopy('ngthnam513@gmail.com')}>
                        <Copy className="h-6 w-6" />
                    </button>
                </div>
                <div className="mt-2 flex items-end justify-center gap-4">
                    <Phone className="text-secondary h-6 w-6" />
                    <span className="text-primary text-2xl font-bold">+84 924255384</span>
                    <button className="text-secondary cursor-pointer" onClick={() => handleCopy('+84 924255384')}>
                        <Copy className="h-6 w-6" />
                    </button>
                </div>
                <div className="pt-8">
                    <p className="text-secondary text-center text-sm">{t('FOOTER.MESSAGE_2')}</p>
                    <MySocialMedia className="mt-2" />
                </div>
            </div>
            <div className="bg-secondary-background py-4 text-center">
                <span className="text-secondary">{t('FOOTER.COPYRIGHT', { year: new Date().getFullYear() })}</span>
            </div>
        </footer>
    );
}
