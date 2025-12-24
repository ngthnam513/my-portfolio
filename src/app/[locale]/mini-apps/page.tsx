'use client';

import routes from '@/contants/routes';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function MiniAppsPage() {
    const t = useTranslations('MINI_APPS_PAGE');
    return (
        <div className="min-h-screen">
            <Link href={routes.leagueOfLegendsChampions} className="block">
                {t('LEAGUE_OF_LEGENDS_CHAMPIONS')}
            </Link>
            <Link href={routes.chatBot} className="block">
                {t('CHAT_BOT')}
            </Link>
            <Link href={routes.christmasApp} className="block">
                {t('CHRISTMAS_APP')}
            </Link>
        </div>
    );
}
