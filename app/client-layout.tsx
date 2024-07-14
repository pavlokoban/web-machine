// app/client-layout.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let lang = "en";
    if (pathname.startsWith("/ru")) {
      lang = "ru";
    } else if (pathname.startsWith("/uk")) {
      lang = "uk";
    }

    document.documentElement.lang = lang;
  }, [pathname]);

  return <>{children}</>;
}