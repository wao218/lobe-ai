import Link from "next/link";
import { Logo } from "./Logo";
import styles from "./header.module.scss";
import { HeaderNavLink } from "./HeaderNavLink";
export function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <Logo />
        <nav className={styles.headerNav}>
          <HeaderNavLink title="Overview" href="/" />
          <HeaderNavLink title="Examples" href="/examples" />
          <HeaderNavLink title="Tour" href="/tour" />
          <HeaderNavLink title="Blog" href="/blog" />
        </nav>
        <div>
          <button className={`${styles.button} ${styles.downloadButton}`}>
            Download
          </button>
        </div>
      </div>
    </header>
  );
}
