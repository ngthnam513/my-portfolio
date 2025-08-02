import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function FootballNews() {
  const t = useTranslations("BLOGS_PAGE");
  return (
    <div className="min-h-screen">
      <h1>{t("TITLE")}</h1>
      <Link href="/en">{t("DESCRIPTION")}</Link>
    </div>
  );
}
