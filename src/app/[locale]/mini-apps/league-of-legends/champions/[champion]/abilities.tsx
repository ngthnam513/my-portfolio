'use client';
import BorderIcon from '@/components/icons/league-of-legends/border';
import {
    getChampionAbilityImageURL,
    getChampionAbilityKey,
    getChampionAbilityVideoURL,
    getChampionPassiveImageURL,
} from '@/lib/league-of-legends.helper';
import { cn } from '@/lib/utils';
import { ChampionDetails } from '@/types/league-of-legends';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Fragment, useState } from 'react';

interface AbilitiesSectionProps {
    championData: ChampionDetails;
}

export default function AbilitiesSection({ championData }: AbilitiesSectionProps) {
    const t = useTranslations('LEAGUE_OF_LEGENDS_CHAMPIONS_PAGE');
    const [selectedSkillId, setSelectedSkillId] = useState<'P' | 'Q' | 'W' | 'E' | 'R'>('P');

    return (
        <section className="gap-4 bg-(--color-secondary-background) px-4 py-12 md:px-12 lg:px-28 xl:flex xl:items-center xl:justify-center">
            <div className="relative xl:flex-1/2">
                <h2 className="mb-8 text-center text-3xl font-bold uppercase italic md:text-5xl lg:text-7xl">{t('ABILITIES')}</h2>
                <div className="flex max-w-full items-start justify-start overflow-hidden overflow-x-auto px-4 py-8 sm:justify-center">
                    <button
                        className="flex min-w-24 cursor-pointer flex-col items-center justify-center transition-transform hover:scale-110"
                        onClick={() => setSelectedSkillId('P')}
                    >
                        <div className="relative">
                            <BorderIcon
                                width="84"
                                height="84"
                                className={cn(
                                    'absolute -top-5 -left-1 z-10 aspect-square w-14 scale-150 opacity-0 transition-transform duration-300 ease-in-out md:inset-[-11px] md:w-[84px]',
                                    {
                                        'scale-100 opacity-100': selectedSkillId === 'P',
                                    },
                                )}
                            />
                            <Image
                                src={getChampionPassiveImageURL(championData?.passive?.image?.full)}
                                alt={championData?.passive?.name}
                                width={64}
                                height={64}
                                className={cn('aspect-square w-12 rounded-full opacity-50 md:w-16', {
                                    'opacity-100': selectedSkillId === 'P',
                                })}
                            />
                        </div>
                        <p className="mt-8 text-sm font-medium uppercase">{championData?.passive?.name}</p>
                    </button>
                    <div className="w-6"></div>
                    {championData?.spells.map((spell, index) => (
                        <Fragment key={spell?.id}>
                            <button
                                key={spell.id}
                                className="flex min-w-24 cursor-pointer flex-col items-center justify-center transition-transform hover:scale-110"
                                onClick={() => setSelectedSkillId(index === 0 ? 'Q' : index === 1 ? 'W' : index === 2 ? 'E' : 'R')}
                            >
                                <div className="relative">
                                    <BorderIcon
                                        width="84"
                                        height="84"
                                        className={cn(
                                            'absolute -top-5 -left-1 z-10 aspect-square w-14 scale-150 opacity-0 transition-transform duration-300 ease-in-out md:inset-[-11px] md:w-[84px]',
                                            {
                                                'scale-100 opacity-100': selectedSkillId === getChampionAbilityKey(index),
                                            },
                                        )}
                                    />
                                    <Image
                                        src={getChampionAbilityImageURL(spell?.id)}
                                        alt={spell.id}
                                        width={64}
                                        height={64}
                                        className={cn('aspect-square w-12 rounded-full opacity-50 md:w-16', {
                                            'opacity-100': selectedSkillId === getChampionAbilityKey(index),
                                        })}
                                    />
                                </div>
                                <p className="mt-8 text-sm font-medium uppercase">{spell.name}</p>
                            </button>
                            {championData?.spells?.length !== index + 1 && <div className="w-6"></div>}
                        </Fragment>
                    ))}
                </div>
            </div>
            <div className="xl:flex-1/2">
                <div className="border border-(--color-lol-foreground) p-4">
                    <video autoPlay muted loop className="aspect-auto w-full" key={selectedSkillId}>
                        <source src={getChampionAbilityVideoURL(championData?.key, selectedSkillId)} type="video/webm" />
                    </video>
                </div>
            </div>
        </section>
    );
}
