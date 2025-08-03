"use client";

import { useTranslations } from "next-intl";
import { Copy, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import MySocialMedia from "../my-social-media";

export default function Footer() {
  const t = useTranslations();
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(t("ACTION.COPY"), {
        description: t("ACTION.COPIED", { text }),
      });
    });
  };

  return (
    <footer className="border-t dark:border-gray-700">
      <div className="py-8 px-2 bg-background">
        <p className="text-center text-secondary mx-auto max-w-xl">
          {t("FOOTER.MESSAGE", { year: new Date().getFullYear() })}
        </p>
        <div className="flex justify-center items-end gap-4 mt-8">
          <Mail className="w-6 h-6 text-secondary" />
          <span className="text-primary text-2xl font-bold">
            ngthnam513@gmail.com
          </span>
          <button
            className="text-secondary cursor-pointer"
            onClick={() => handleCopy("ngthnam513@gmail.com")}
          >
            <Copy className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center items-end gap-4 mt-2">
          <Phone className="w-6 h-6 text-secondary" />
          <span className="text-primary text-2xl font-bold">+84 924255384</span>
          <button
            className="text-secondary cursor-pointer"
            onClick={() => handleCopy("+84 924255384")}
          >
            <Copy className="w-6 h-6" />
          </button>
        </div>
        <div className="pt-8">
          <p className="text-center text-secondary text-sm">
            {t("FOOTER.MESSAGE_2")}
          </p>
          <MySocialMedia className="mt-2" />
        </div>
      </div>
      <div className="py-4 text-center bg-background-secondary">
        <span className="text-secondary">
          {t("FOOTER.COPYRIGHT", { year: new Date().getFullYear() })}
        </span>
      </div>
    </footer>
  );
}
