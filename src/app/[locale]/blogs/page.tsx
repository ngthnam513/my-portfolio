import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function BlogsPage() {
    const t = useTranslations('BLOGS_PAGE');
    return (
        <div className="min-h-screen">
            <h1>{t('TITLE')}</h1>
            <Link href="/en">{t('DESCRIPTION')}</Link>
        </div>
    );
}
