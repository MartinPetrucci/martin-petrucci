import Logo from "../logo/Logo";
import styles from "./header.module.scss";
import cn from "classnames";
import SwitchTheme from "../switch-theme/SwitchTheme";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={cn("content-container", styles["header-container"])}>
        <Logo />
        <SwitchTheme />
      </div>
    </header>
  );
}
