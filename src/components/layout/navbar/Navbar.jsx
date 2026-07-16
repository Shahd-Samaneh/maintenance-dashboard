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

        <div className={styles.profile}>
          <div className={styles.avatar}>S</div>

          <div>
            <p className={styles.name}>Shahd</p>
            <span className={styles.role}>User</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;