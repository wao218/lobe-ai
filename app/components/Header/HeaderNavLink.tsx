"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname, useRouter } from "next/navigation";
export function HeaderNavLink({
  title,
  href,
}: {
  title: string;
  href: string;
}): JSX.Element {
  const path = usePathname();
  const active = href === path;

  return (
    <Link
      href={href}
      className={
        active ? `${styles.navLink} ${styles.navLinkSelected}` : styles.navLink
      }
    >
      {title}
    </Link>
  );
}
