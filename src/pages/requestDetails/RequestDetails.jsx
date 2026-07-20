import { useParams, useNavigate } from "react-router-dom";
import { useRequests } from "../../context/RequestContext";
import styles from "./RequestDetails.module.css";

function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { requests } = useRequests();
  const request = requests.find((item) => item.id === Number(id));

  if (!request) {
    return <h2>Request not found.</h2>;
  }

  return (
    <div className={styles.container}>
      <h1>{request.title}</h1>

      <div className={styles.card}>

        <p><strong>Category:</strong> {request.category}</p>
        <p><strong>Status:</strong> {request.status}</p>
  
        {request.room && (<p><strong>Room:</strong> {request.room}</p>)}

        {request.department && (<p><strong>Department:</strong> {request.department}</p>)}

        {request.equipment && (<p><strong>Equipment:</strong> {request.equipment}</p>)}

        {request.vehicleModel && (<p><strong>Vehicle:</strong> {request.vehicleModel}</p>)}

        {request.licensePlate && (<p><strong>License Plate:</strong> {request.licensePlate}</p>)}

        <p><strong>Description:</strong></p>

        <p>{request.description}</p>

        <button onClick={() => navigate("/dashboard")}>Back</button>
      </div>
      
    </div>
  );
}

export default RequestDetails;