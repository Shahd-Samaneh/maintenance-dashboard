import styles from "./Navbar.module.css";
import { FiSearch, FiBell } from "react-icons/fi";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.searchBox}>
        <FiSearch className={styles.icon} />
        <input
          type="text"
          placeholder="Search requests..."
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.avatar}>U</div>
        <span className={styles.role}>User</span>
      </div>
    </nav>
  );
}

export default Navbar;