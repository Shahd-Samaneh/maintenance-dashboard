import { Outlet } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
