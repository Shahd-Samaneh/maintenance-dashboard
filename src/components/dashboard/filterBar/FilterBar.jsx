import styles from "./FilterBar.module.css";

function FilterBar({ status, setStatus }) {
  const filters = ["All", "Pending", "Scheduled", "Completed"];

  return (
    <div className={styles.filterBar}>
      {filters.map((item) => (
        <button key={item} className={status === item ? styles.active : ""} onClick={() => setStatus(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;