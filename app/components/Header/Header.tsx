import styles from "./header.module.scss";
import { HeaderNavLink } from "./HeaderNavLink";
import { Logo } from "./Logo";

enum NavPageTitles {
  OVERVIEW = "Overview",
  EXAMPLES = "Examples",
  TOUR = "Tour",
  BLOG = "Blog",
}

enum Routes {
  HOME = "/",
  EXAMPLES = "/examples",
  TOUR = "/tour",
  BLOG = "/blog",
}

export function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <Logo />
        <nav className={styles.headerNav}>
          <HeaderNavLink title={NavPageTitles.OVERVIEW} href={Routes.HOME} />
          <HeaderNavLink
            title={NavPageTitles.EXAMPLES}
            href={Routes.EXAMPLES}
          />
          <HeaderNavLink title={NavPageTitles.TOUR} href={Routes.TOUR} />
          <HeaderNavLink title={NavPageTitles.BLOG} href={Routes.BLOG} />
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
