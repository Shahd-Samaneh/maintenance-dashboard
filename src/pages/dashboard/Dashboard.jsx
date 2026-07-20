import styles from "./Dashboard.module.css";
import StatsCard from "../../components/dashboard/statsCard/StatsCard";
import SearchBar from "../../components/dashboard/searchBar/SearchBar";
import FilterBar from "../../components/dashboard/filterBar/FilterBar";
import RequestTable from "../../components/dashboard/requestTable/RequestTable";
import { FiClock, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { useState } from "react";
import { useRequests } from "../../context/RequestContext";


function Dashboard() {
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");
  const { requests } = useRequests();

  const filteredRequests = requests.filter((request) => {
    const matchesSearch = request.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "All" || request.status === status;
    return matchesSearch && matchesStatus;
  });

  const pendingCount = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const scheduledCount = requests.filter(
    (request) => request.status === "Scheduled"
  ).length;

  const completedCount = requests.filter(
    (request) => request.status === "Completed"
  ).length;
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Maintenance Dashboard</h1>
        <p>Manage and track your maintenance requests.</p>
      </div>
      <div className={styles.stats}>
        <StatsCard title="Pending" value={pendingCount} icon={<FiClock />} />
        <StatsCard title="Scheduled" value={scheduledCount} icon={<FiCalendar />} />
        <StatsCard title="Completed" value={completedCount} icon={<FiCheckCircle />} />
      </div>
      <div className={styles.actions}>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <FilterBar status={status} setStatus={setStatus} />
      </div>
      <RequestTable requests={filteredRequests} />
    </div>
  );
}

export default Dashboard;