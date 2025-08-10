import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import routes from "@/contants/routes";

export default function MiniAppsPage() {
  const t = useTranslations("MINI_APPS_PAGE");
  return (
    <div className="min-h-screen">
      <Link href={routes.leagueOfLegendsChampions}>
        {t("LEAGUE_OF_LEGENDS_CHAMPIONS")}
      </Link>
    </div>
  );
}
