"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { Globe, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const locales = [
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
];

export default function LocaleSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    startTransition(() => {
      router.push(newPath);
    });
  };

  const currentLocaleLabel =
    locales.find((l) => l.code === locale)?.label || "Language";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Globe className="h-4 w-4" />
          )}
          {currentLocaleLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLocaleChange(code)}
            disabled={code === locale || isPending}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
