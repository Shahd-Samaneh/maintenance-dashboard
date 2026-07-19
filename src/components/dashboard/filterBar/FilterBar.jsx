import styles from "./FilterBar.module.css";

function FilterBar() {
  return (
    <div className={styles.filterBar}>
      <button className={styles.active}>All</button>
      <button>Pending</button>
      <button>Scheduled</button>
      <button>Completed</button>
    </div>
  );
}

export default FilterBar;