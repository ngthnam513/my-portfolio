"use client";

import { useTranslations } from "next-intl";
import { Copy, Facebook, Github, Linkedin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

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
    <footer className="pt-8 px-2 border-t dark:border-gray-700">
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
      <div className="my-8">
        <p className="text-center text-secondary text-sm">
          {t("FOOTER.MESSAGE_2")}
        </p>
        <div className="flex justify-center items-center gap-4 mt-2">
          <a
            href="https://github.com/TheChickenDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-secondary" />
          </a>
          <a
            href="https://www.facebook.com/nam.nguyens.359"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 text-secondary" />
          </a>
          <a
            href="https://www.linkedin.com/in/nam-nguyen-thanh-5a51b3278/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-secondary" />
          </a>
        </div>
      </div>
      <div className="p-4 text-center bg-background-secondary">
        <span className="text-secondary">
          {t("FOOTER.COPYRIGHT", { year: new Date().getFullYear() })}
        </span>
      </div>
    </footer>
  );
}
