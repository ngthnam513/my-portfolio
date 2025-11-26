'use client';

import CypressIcon from '@/components/icons/cypress';
import ExpressJSIcon from '@/components/icons/expressjs';
import FigmaIcon from '@/components/icons/figma';
import FrappeIcon from '@/components/icons/frappe';
import GitIcon from '@/components/icons/git';
import JavaScriptIcon from '@/components/icons/javascript';
import MongoDBIcon from '@/components/icons/mongodb';
import NextJSIcon from '@/components/icons/nextjs';
import NodeJSIcon from '@/components/icons/nodejs';
import PostgreSQLIcon from '@/components/icons/postgresql';
import ReactJSIcon from '@/components/icons/reactjs';
import SassScssIcon from '@/components/icons/sass-scss';
import SocketIOIcon from '@/components/icons/socketio';
import TailwindCSSIcon from '@/components/icons/tailwindcss';
import TypeScriptIcon from '@/components/icons/typescript';
import MySocialMedia from '@/components/my-social-media';
import { BriefcaseBusiness, Link, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ProfilePicture, ProfilePicture_2 } from '../../../public';

export default function HomePage() {
    const t = useTranslations('HOME_PAGE');
    return (
        <>
            <section className="bg-background flex flex-col items-center justify-between gap-16 px-4 py-16 md:flex-row md:px-12 lg:px-28">
                <div className="flex-1">
                    <h1 className="text-foreground text-6xl font-bold">{t('TITLE')}</h1>
                    <p className="text-secondary-foreground mt-4 text-justify text-sm">{t('DESCRIPTION')}</p>
                    <div className="mt-12 flex items-center gap-1">
                        <MapPin className="text-secondary-foreground h-6 w-6" />
                        <a
                            className="text-secondary-foreground text-base hover:underline"
                            href="https://maps.app.goo.gl/UJCkXMt3veBLoWJt7"
                            target="_blank"
                        >
                            {t('LOCATION')}
                        </a>
                    </div>
                    <div className="mt-2 mb-12 flex items-center gap-1">
                        <BriefcaseBusiness className="text-secondary-foreground h-6 w-6" />
                        <span className="text-secondary-foreground text-base">{t('CURRENT_STATUS')}</span>
                    </div>
                    <MySocialMedia className="justify-start" />
                </div>
                <div className="relative flex items-center justify-center pr-4">
                    <div className="absolute top-4 left-4 h-80 w-60 rounded-sm bg-[#e5e7eb] shadow-md dark:bg-[#374151]" />
                    <div className="relative h-80 w-60 overflow-hidden rounded-sm">
                        <Image src={ProfilePicture} alt="Profile" />
                    </div>
                </div>
            </section>
            <section className="bg-secondary-background gap-16 px-4 py-16 md:px-12 lg:px-28">
                <h1 className="text-secondary-foreground mx-auto max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                    {t('ABOUT_ME')}
                </h1>
                <div className="flex flex-col-reverse items-center justify-between gap-16 py-8 md:flex-row">
                    <div className="relative flex items-center justify-center pl-4">
                        <div className="absolute top-4 right-4 h-[480px] w-[360px] rounded-sm bg-[#e5e7eb] shadow-md dark:bg-[#374151]" />
                        <div className="relative h-[480px] w-[360px] overflow-hidden rounded-sm">
                            <Image src={ProfilePicture_2} alt="Profile" />
                        </div>
                    </div>
                    <div className="text-secondary-foreground text-justify text-base">
                        <p className="text-primary text-xl font-medium lg:text-2xl">{t('ABOUT_ME_DESCRIPTION_1')}</p>
                        <p className="mt-4">{t('ABOUT_ME_DESCRIPTION_2')}</p>
                        <p className="mt-4">{t('ABOUT_ME_DESCRIPTION_3')}</p>
                        <p className="mt-4">{t('ABOUT_ME_DESCRIPTION_4')}</p>
                        <p className="mt-4">{t('ABOUT_ME_DESCRIPTION_5')}</p>
                        <p className="mt-4">{t('ABOUT_ME_DESCRIPTION_6')}</p>
                        <ul className="mt-2 list-disc pl-6">
                            <li>{t('ABOUT_ME_DESCRIPTION_6_ITEM_1')}</li>
                            <li>{t('ABOUT_ME_DESCRIPTION_6_ITEM_2')}</li>
                            <li>{t('ABOUT_ME_DESCRIPTION_6_ITEM_3')}</li>
                            <li>{t('ABOUT_ME_DESCRIPTION_6_ITEM_4')}</li>
                        </ul>
                        <p className="mt-4">{t('ABOUT_ME_DESCRIPTION_7')}</p>
                    </div>
                </div>
            </section>
            <section className="bg-background gap-16 px-4 py-16 md:px-12 lg:px-28">
                <h1 className="text-secondary-foreground mx-auto max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                    {t('SKILLS')}
                </h1>
                <p className="text-secondary-foreground mt-2 text-center text-sm">{t('SKILLS_DESCRIPTION')}</p>
                <div className="flex flex-wrap items-center justify-between gap-8 py-8">
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <JavaScriptIcon />
                        <p className="text-foreground text-base">JavaScript</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <TypeScriptIcon />
                        <p className="text-foreground text-base">TypeScript</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <ReactJSIcon />
                        <p className="text-foreground text-base">ReactJS</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <NextJSIcon />
                        <p className="text-foreground text-base">NextJS</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <SassScssIcon />
                        <p className="text-foreground text-base">Sass/SCSS</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <TailwindCSSIcon />
                        <p className="text-foreground text-base">TailwindCSS</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <NodeJSIcon />
                        <p className="text-foreground text-base">NodeJS</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <ExpressJSIcon className="fill-foreground" />
                        <p className="text-foreground text-base">ExpressJS</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <SocketIOIcon className="fill-foreground" />
                        <p className="text-foreground text-base">Socket.IO</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <CypressIcon className="fill-foreground" />
                        <p className="text-foreground text-base">Cypress</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <PostgreSQLIcon />
                        <p className="text-foreground text-base">PostgreSQL</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <MongoDBIcon />
                        <p className="text-foreground text-base">MongoDB</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <FrappeIcon />
                        <p className="text-foreground text-base">Frappe</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <FigmaIcon />
                        <p className="text-foreground text-base">Figma</p>
                    </div>
                    <div className="flex min-w-32 flex-1/6 flex-col items-center">
                        <GitIcon />
                        <p className="text-foreground text-base">Git</p>
                    </div>
                </div>
            </section>
            <section className="bg-secondary-background gap-16 px-4 py-16 md:px-12 lg:px-28">
                <h1 className="text-secondary-foreground mx-auto max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                    {t('PROJECTS')}
                </h1>
                <p className="text-secondary-foreground mt-2 text-center text-sm">{t('PROJECTS_DESCRIPTION')}</p>
                <div className="flex flex-col-reverse items-center justify-between gap-4 py-8 md:flex-row">
                    <div className="h-[500px] w-full rounded-md bg-white md:w-2/3">
                        <iframe
                            src="https://eurekas.vercel.app"
                            title="Eurekas Live Demo"
                            className="h-full w-full rounded-md border shadow-md dark:border-[#374151]"
                            allowFullScreen
                        />
                    </div>
                    <div className="md:w-1/3">
                        <a
                            href="https://eurekas.vercel.app"
                            className="text-foreground text-justify text-xl hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('PROJECTS_EUREKAS')}
                            <Link className="ml-2 inline-block" />
                        </a>
                        <p className="text-secondary-foreground mt-4 text-justify text-base">{t('PROJECTS_EUREKAS_DESCRIPTION')}</p>
                        <div className="mt-4 flex flex-wrap justify-start gap-2">
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                TypeScript
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                React.js
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                React Query
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Tailwind CSS
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Shadcn/ui
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Node.js
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Express.js
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                MongoDB
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Socket.IO
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Figma
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Git
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
                    <div className="md:w-1/3">
                        <a
                            href="https://heinshop.vercel.app"
                            className="text-foreground text-justify text-xl hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('PROJECTS_HEINSHOP')}
                            <Link className="ml-2 inline-block" />
                        </a>
                        <p className="text-secondary-foreground mt-4 text-justify text-base">{t('PROJECTS_HEINSHOP_DESCRIPTION')}</p>
                        <div className="mt-4 flex flex-wrap justify-start gap-2">
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                TypeScript
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                React.js
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Redux Toolkit
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Tailwind CSS
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Node.js
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Express.js
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                MongoDB
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Git
                            </span>
                        </div>
                    </div>
                    <div className="h-[500px] w-full rounded-md bg-white md:w-2/3">
                        <iframe
                            src="https://heinshop.vercel.app"
                            title="Heinshop Live Demo"
                            className="h-full w-full rounded-md border shadow-md dark:border-[#374151]"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="flex flex-col-reverse items-center justify-between gap-4 py-8 md:flex-row">
                    <div className="h-[500px] w-full rounded-md bg-white md:w-2/3">
                        <iframe
                            src="https://fastfoodstore.vercel.app"
                            title="Fast Food Store Live Demo"
                            className="h-full w-full rounded-md border shadow-md dark:border-[#374151]"
                            allowFullScreen
                        />
                    </div>
                    <div className="md:w-1/3">
                        <a
                            href="https://fastfoodstore.vercel.app"
                            className="text-foreground text-justify text-xl hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('PROJECTS_FASTFOODSTORE')}
                            <Link className="ml-2 inline-block" />
                        </a>
                        <p className="text-secondary-foreground mt-4 text-justify text-base">{t('PROJECTS_FASTFOODSTORE_DESCRIPTION')}</p>
                        <div className="mt-4 flex flex-wrap justify-start gap-2">
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                JavaScript
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                React.js
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Redux Toolkit
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Sass/Scss
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Node.js
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Express.js
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                MongoDB
                            </span>
                            <span className="text-secondary-foreground max-w-28 rounded-xl bg-[#e5e7eb] px-2 text-center text-base dark:bg-[#374151]">
                                Git
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
