import styles from "./StatsCard.module.css";

function StatsCard({ title, value, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <h2 className={styles.value}>{value}</h2>
      </div>
      <div className={styles.icon}>
        {icon}
      </div>
    </div>
  );
}

export default StatsCard;