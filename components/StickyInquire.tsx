"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function StickyInquire() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <Link className="sticky-inquire" href="/contact#inquiry">
      Inquire
    </Link>
  );
}
