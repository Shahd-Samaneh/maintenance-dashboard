import React from 'react'
import requests from "../../../data/requests";
import styles from "./RequestTable.module.css";


function RequestTable() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Request</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.title}</td>
              <td>{request.category}</td>
              <td>
                <span className={`${styles.badge} ${styles[request.status.toLowerCase()]}`}>
                  {request.status}
                </span>
              </td>
              <td>{request.date}</td>
              <td>
                <button className={styles.button}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestTable;