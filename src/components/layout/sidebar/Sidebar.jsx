import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { FiHome, FiPlusCircle } from "react-icons/fi";

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.logo}>Maintenance</h2>
            <nav className={styles.menu}>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.active : ""}>
                    <FiHome />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/create-request" className={({ isActive }) => isActive ? styles.active : ""}>
                    <FiPlusCircle />
                    <span>New Request</span>
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;