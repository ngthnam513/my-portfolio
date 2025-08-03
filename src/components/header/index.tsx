"use client";

import { useLocale, useTranslations } from "next-intl";
import ThemeSelector from "../theme-selector";
import LocaleSelector from "../locale-selector";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import routes from "@/contants/routes";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("HEADER");
  const currentPath = usePathname();
  const currentLocale = useLocale();

  const isActive = (path: string) => {
    const pathWithoutLocale =
      currentPath.replace(`/${currentLocale}`, "") || "/";
    return pathWithoutLocale === path;
  };

  return (
    <header className="bg-background px-4 md:px-12 lg:px-28">
      <div className="flex justify-between items-center h-[68px]">
        <p className="text-primary text-3xl md:text-4xl font-bold leading-none">
          {"<NTN />"}
        </p>
        <div className="hidden md:flex justify-between items-center space-x-8">
          <div className="flex space-x-4 text-secondary">
            <Link
              href={routes.home}
              className={cn({ "font-extrabold": isActive(routes.home) })}
            >
              {t("ABOUT")}
            </Link>
            <Link
              href={routes.blogs}
              className={cn({ "font-extrabold": isActive(routes.blogs) })}
            >
              {t("BLOGS")}
            </Link>
            <Link
              href={routes.footballNews}
              className={cn({
                "font-extrabold": isActive(routes.footballNews),
              })}
            >
              {t("FOOTBALL_NEWS")}
            </Link>
          </div>
          <div className="flex space-x-2">
            <ThemeSelector />
            <LocaleSelector />
          </div>
        </div>
        <div className="md:hidden flex justify-center items-center">
          <Sheet>
            <SheetTrigger className="opacity-70">
              <Menu className="size-8" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="h-[68px] bg-background px-4 py-0 justify-center shadow-md">
                <p className="sm:hidden text-primary text-4xl font-bold">
                  {"<NTN />"}
                </p>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
