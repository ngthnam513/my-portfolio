"use client";

import { useTranslations } from "next-intl";
import { BriefcaseBusiness, ExternalLink, Link, MapPin } from "lucide-react";
import Image from "next/image";
import { ProfilePicture, ProfilePicture_2 } from "../../../public";
import MySocialMedia from "@/components/my-social-media";
import JavaScriptIcon from "@/components/icons/javascript";
import TypeScriptIcon from "@/components/icons/typescript";
import ReactJSIcon from "@/components/icons/reactjs";
import NextJSIcon from "@/components/icons/nextjs";
import NodeJSIcon from "@/components/icons/nodejs";
import ExpressJSIcon from "@/components/icons/expressjs";
import SocketIOIcon from "@/components/icons/socketio";
import MongoDBIcon from "@/components/icons/mongodb";
import SassScssIcon from "@/components/icons/sass-scss";
import TailwindCSSIcon from "@/components/icons/tailwindcss";
import FigmaIcon from "@/components/icons/figma";
import GitIcon from "@/components/icons/git";
import PostgreSQLIcon from "@/components/icons/postgresql";
import CypressIcon from "@/components/icons/cypress";
import FrappeIcon from "@/components/icons/frappe";

export default function HomePage() {
  const t = useTranslations("HOME_PAGE");
  return (
    <>
      <section className="bg-background flex flex-col md:flex-row justify-between items-center gap-16 px-4 md:px-12 lg:px-28 py-16">
        <div className="flex-1">
          <h1 className="text-6xl font-bold text-foreground">{t("TITLE")}</h1>
          <p className="text-sm text-secondary-foreground mt-4 text-justify">
            {t("DESCRIPTION")}
          </p>
          <div className="flex items-center gap-1 mt-12">
            <MapPin className="w-6 h-6 text-secondary-foreground" />
            <a
              className="text-secondary-foreground text-base hover:underline"
              href="https://maps.app.goo.gl/UJCkXMt3veBLoWJt7"
              target="_blank"
            >
              {t("LOCATION")}
            </a>
          </div>
          <div className="flex items-center gap-1 mt-2 mb-12">
            <BriefcaseBusiness className="w-6 h-6 text-secondary-foreground" />
            <span className="text-secondary-foreground text-base">
              {t("CURRENT_STATUS")}
            </span>
          </div>
          <MySocialMedia className="justify-start" />
        </div>
        <div className="relative flex justify-center items-center pr-4">
          <div className="absolute top-4 left-4 w-[240px] h-[320px] bg-[#e5e7eb] dark:bg-[#374151] rounded-sm shadow-md" />
          <div className="relative w-[240px] h-[320px] rounded-sm overflow-hidden">
            <Image src={ProfilePicture} alt="Profile" />
          </div>
        </div>
      </section>
      <section className="bg-background-secondary gap-16 px-4 md:px-12 lg:px-28 py-16">
        <h1 className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center mx-auto">
          {t("ABOUT_ME")}
        </h1>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-16 py-8">
          <div className="relative flex justify-center items-center pl-4">
            <div className="absolute top-4 right-4 w-[360px] h-[480px] bg-[#e5e7eb] dark:bg-[#374151] rounded-sm shadow-md" />
            <div className="relative w-[360px] h-[480px] rounded-sm overflow-hidden">
              <Image src={ProfilePicture_2} alt="Profile" />
            </div>
          </div>
          <div className="text-secondary-foreground text-justify text-base">
            <p className="text-primary text-xl lg:text-2xl font-medium">
              {t("ABOUT_ME_DESCRIPTION_1")}
            </p>
            <p className="mt-4">{t("ABOUT_ME_DESCRIPTION_2")}</p>
            <p className="mt-4">{t("ABOUT_ME_DESCRIPTION_3")}</p>
            <p className="mt-4">{t("ABOUT_ME_DESCRIPTION_4")}</p>
            <p className="mt-4">{t("ABOUT_ME_DESCRIPTION_5")}</p>
            <p className="mt-4">{t("ABOUT_ME_DESCRIPTION_6")}</p>
            <ul className="list-disc pl-6 mt-2">
              <li>{t("ABOUT_ME_DESCRIPTION_6_ITEM_1")}</li>
              <li>{t("ABOUT_ME_DESCRIPTION_6_ITEM_2")}</li>
              <li>{t("ABOUT_ME_DESCRIPTION_6_ITEM_3")}</li>
              <li>{t("ABOUT_ME_DESCRIPTION_6_ITEM_4")}</li>
            </ul>
            <p className="mt-4">{t("ABOUT_ME_DESCRIPTION_7")}</p>
          </div>
        </div>
      </section>
      <section className="bg-background gap-16 px-4 md:px-12 lg:px-28 py-16">
        <h1 className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center mx-auto">
          {t("SKILLS")}
        </h1>
        <p className="text-sm text-secondary-foreground text-center mt-2">
          {t("SKILLS_DESCRIPTION")}
        </p>
        <div className="flex flex-wrap justify-between items-center gap-8 py-8">
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <JavaScriptIcon />
            <p className="text-base text-foreground">JavaScript</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <TypeScriptIcon />
            <p className="text-base text-foreground">TypeScript</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <ReactJSIcon />
            <p className="text-base text-foreground">ReactJS</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <NextJSIcon />
            <p className="text-base text-foreground">NextJS</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <SassScssIcon />
            <p className="text-base text-foreground">Sass/SCSS</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <TailwindCSSIcon />
            <p className="text-base text-foreground">TailwindCSS</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <NodeJSIcon />
            <p className="text-base text-foreground">NodeJS</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <ExpressJSIcon className="fill-foreground" />
            <p className="text-base text-foreground">ExpressJS</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <SocketIOIcon className="fill-foreground" />
            <p className="text-base text-foreground">Socket.IO</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <CypressIcon className="fill-foreground" />
            <p className="text-base text-foreground">Cypress</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <PostgreSQLIcon />
            <p className="text-base text-foreground">PostgreSQL</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <MongoDBIcon />
            <p className="text-base text-foreground">MongoDB</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <FrappeIcon />
            <p className="text-base text-foreground">Frappe</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <FigmaIcon />
            <p className="text-base text-foreground">Figma</p>
          </div>
          <div className="flex-1/6 min-w-32 flex flex-col items-center">
            <GitIcon />
            <p className="text-base text-foreground">Git</p>
          </div>
        </div>
      </section>
      <section className="bg-background-secondary gap-16 px-4 md:px-12 lg:px-28 py-16">
        <h1 className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center mx-auto">
          {t("PROJECTS")}
        </h1>
        <p className="text-sm text-secondary-foreground text-center mt-2">
          {t("PROJECTS_DESCRIPTION")}
        </p>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 py-8">
          <div className="w-full md:w-2/3 h-[500px] bg-white rounded-md">
            <iframe
              src="https://eurekas.vercel.app"
              title="Eurekas Live Demo"
              className="w-full h-full rounded-md shadow-md border dark:border-[#374151]"
              allowFullScreen
            />
          </div>
          <div className="md:w-1/3">
            <a
              href="https://eurekas.vercel.app"
              className="text-foreground text-xl text-justify hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("PROJECTS_EUREKAS")}
              <Link className="inline-block ml-2" />
            </a>
            <p className="text-secondary-foreground text-base text-justify mt-4">
              {t("PROJECTS_EUREKAS_DESCRIPTION")}
            </p>
            <div className="flex flex-wrap justify-start gap-2 mt-4">
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                TypeScript
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                React.js
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                React Query
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Tailwind CSS
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Shadcn/ui
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Node.js
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Express.js
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                MongoDB
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Socket.IO
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Figma
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Git
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8">
          <div className="md:w-1/3">
            <a
              href="https://heinshop.vercel.app"
              className="text-foreground text-xl text-justify hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("PROJECTS_HEINSHOP")}
              <Link className="inline-block ml-2" />
            </a>
            <p className="text-secondary-foreground text-base text-justify mt-4">
              {t("PROJECTS_HEINSHOP_DESCRIPTION")}
            </p>
            <div className="flex flex-wrap justify-start gap-2 mt-4">
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                TypeScript
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                React.js
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Redux Toolkit
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Tailwind CSS
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Node.js
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Express.js
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                MongoDB
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Git
              </span>
            </div>
          </div>
          <div className="w-full md:w-2/3 h-[500px] bg-white rounded-md">
            <iframe
              src="https://heinshop.vercel.app"
              title="Heinshop Live Demo"
              className="w-full h-full rounded-md shadow-md border dark:border-[#374151]"
              allowFullScreen
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 py-8">
          <div className="w-full md:w-2/3 h-[500px] bg-white rounded-md">
            <iframe
              src="https://fastfoodstore.vercel.app"
              title="Fast Food Store Live Demo"
              className="w-full h-full rounded-md shadow-md border dark:border-[#374151]"
              allowFullScreen
            />
          </div>
          <div className="md:w-1/3">
            <a
              href="https://fastfoodstore.vercel.app"
              className="text-foreground text-xl text-justify hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("PROJECTS_FASTFOODSTORE")}
              <Link className="inline-block ml-2" />
            </a>
            <p className="text-secondary-foreground text-base text-justify mt-4">
              {t("PROJECTS_FASTFOODSTORE_DESCRIPTION")}
            </p>
            <div className="flex flex-wrap justify-start gap-2 mt-4">
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                JavaScript
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                React.js
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Redux Toolkit
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Sass/Scss
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Node.js
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Express.js
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                MongoDB
              </span>
              <span className="text-base text-secondary-foreground px-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-xl max-w-28 text-center">
                Git
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
