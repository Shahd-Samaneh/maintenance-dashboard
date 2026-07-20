import styles from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

function SearchBar({ value, onChange }) {
  return (
    <div className={styles.searchBar}>
      <FiSearch className={styles.icon} />
      <input type="text" placeholder="Search requests..." value={value} onChange={onChange} />
    </div>
  );
}

export default SearchBar;