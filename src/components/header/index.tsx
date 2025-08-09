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
import { useState } from "react";

export default function Header() {
  const t = useTranslations("HEADER");
  const currentPath = usePathname();
  const currentLocale = useLocale();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

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
              href={routes.miniApps}
              className={cn({
                "font-extrabold": isActive(routes.miniApps),
              })}
            >
              {t("MINI_APPS")}
            </Link>
          </div>
          <div className="flex space-x-2">
            <ThemeSelector />
            <LocaleSelector />
          </div>
        </div>
        <div className="md:hidden flex justify-center items-center">
          <Sheet open={openMobileMenu} onOpenChange={setOpenMobileMenu}>
            <SheetTrigger className="opacity-70">
              <Menu className="size-8" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="h-[68px] bg-background px-4 py-0 justify-center shadow-md">
                <p className="sm:hidden text-primary text-4xl font-bold">
                  {"<NTN />"}
                </p>
              </SheetHeader>
              <div className="flex flex-col">
                <Link
                  href={routes.home}
                  className={cn("text-secondary px-4 py-2", {
                    "font-extrabold": isActive(routes.home),
                  })}
                  onClick={() => setOpenMobileMenu(false)}
                >
                  {t("ABOUT")}
                </Link>
                <Link
                  href={routes.blogs}
                  className={cn("text-secondary px-4 py-2", {
                    "font-extrabold": isActive(routes.blogs),
                  })}
                  onClick={() => setOpenMobileMenu(false)}
                >
                  {t("BLOGS")}
                </Link>
                <Link
                  href={routes.miniApps}
                  className={cn("text-secondary px-4 py-2", {
                    "font-extrabold": isActive(routes.miniApps),
                  })}
                  onClick={() => setOpenMobileMenu(false)}
                >
                  {t("MINI_APPS")}
                </Link>
                <div className="border-t dark:border-[#374151] mt-4">
                  <LocaleSelector />
                  <ThemeSelector />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
