import React from 'react'
import styles from "./RequestTable.module.css";
import { NavLink } from "react-router-dom";
import { useRequests } from "../../../context/RequestContext";
import { FiTrash2, FiEdit2, FiEye } from "react-icons/fi";


function RequestTable({ requests }) {
  const { deleteRequest, updateRequest } = useRequests();
  function changeStatus(request) {
    const nextStatus = {
      Pending: "Scheduled",
      Scheduled: "Completed",
      Completed: "Pending",
    };
    updateRequest({ ...request, status: nextStatus[request.status], });
  }

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
                <span className={`${styles.badge} ${styles[request.status.toLowerCase()]}`} onClick={() => changeStatus(request)}>
                  {request.status}
                </span>
              </td>
              <td>{request.date}</td>
              <td className={styles.actions}>
                <NavLink to={`/request/${request.id}`}>
                  <button className={`${styles.button} ${styles.viewBtn}`}>
                    <FiEye />
                  </button>
                </NavLink>
                <NavLink to={`/edit-request/${request.id}`}>
                  <button className={`${styles.button} ${styles.editBtn}`}>
                    <FiEdit2 />
                  </button>
                </NavLink>
                <button className={`${styles.button} ${styles.deleteBtn}`}
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this request?")) {
                      deleteRequest(request.id);
                    }
                  }}
                >
                  <FiTrash2 />
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