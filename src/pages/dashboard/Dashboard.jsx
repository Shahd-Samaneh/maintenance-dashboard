import styles from "./Dashboard.module.css";

import StatsCard from "../../components/dashboard/statsCard/StatsCard";
import SearchBar from "../../components/dashboard/searchBar/SearchBar";
import FilterBar from "../../components/dashboard/filterBar/FilterBar";
import RequestTable from "../../components/dashboard/requestTable/RequestTable";
import { FiClock, FiCalendar, FiCheckCircle } from "react-icons/fi";


function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Maintenance Dashboard</h1>
        <p>Manage and track your maintenance requests.</p>
      </div>

      <div className={styles.stats}>
        <StatsCard title="Pending" value="12" icon={<FiClock />} />
        <StatsCard title="Scheduled" value="5" icon={<FiCalendar />} />
        <StatsCard title="Completed" value="20" icon={<FiCheckCircle />} />
      </div>

      <div className={styles.actions}>
        <SearchBar />
        <FilterBar />
      </div>

      <RequestTable />
    </div>
  );
}

export default Dashboard;