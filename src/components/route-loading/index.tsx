// components/RouteLoading.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteLoading() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full z-[9999]">
          <div className="transition-all h-[2px] rounded-full bg-blue-500 animate-[progress_0.5s_ease-in-out]" />
        </div>
      )}
    </>
  );
}
