import styles from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <FiSearch className={styles.icon} />

      <input
        type="text"
        placeholder="Search requests..."
      />
    </div>
  );
}

export default SearchBar;