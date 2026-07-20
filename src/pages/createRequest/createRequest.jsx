import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./CreateRequest.module.css";

import HomeForm from "../../components/form/homeForm/HomeForm";
import AutoForm from "../../components/form/autoForm/AutoForm";
import OfficeForm from "../../components/form/officeForm/OfficeForm";

import { useRequests } from "../../context/RequestContext";

const initialFormData = {
  title: "",
  room: "",
  vehicleModel: "",
  licensePlate: "",
  department: "",
  equipment: "",
  priority: "medium",
  description: "",
};

function CreateRequest() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { requests, addRequest, updateRequest } = useRequests();
  const isEditing = Boolean(id);
  const [category, setCategory] = useState("Home");
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (!isEditing) return;
    const request = requests.find(
      (item) => item.id === Number(id)
    );
    if (!request) return;
    setCategory(request.category);
    setFormData({
      title: request.title || "",
      room: request.room || "",
      vehicleModel: request.vehicleModel || "",
      licensePlate: request.licensePlate || "",
      department: request.department || "",
      equipment: request.equipment || "",
      priority: request.priority || "medium",
      description: request.description || "",
    });
  }, [id, requests, isEditing]);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value, }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const oldRequest = requests.find((item) => item.id === Number(id));

    const newRequest = {
      ...formData,
      id: isEditing ? Number(id) : Date.now(),
      category,
      status: isEditing ? oldRequest?.status || "Pending" : "Pending",
      date: isEditing ? oldRequest?.date : new Date().toLocaleDateString(),
    };

    if (isEditing) {
      updateRequest(newRequest);
    } else {
      addRequest(newRequest);
    }

    navigate("/dashboard");
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          {isEditing ? "Edit Request" : "Create New Request"}
        </h1>
        <p>
          {isEditing ? "Update the maintenance request." : "Fill in the details below to submit a maintenance request."}
        </p>
      </div>

      <form className={styles.card} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="category"> Category </label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Home">Home</option>
            <option value="Auto">Auto</option>
            <option value="Office">Office</option>
          </select>
        </div>

        {category === "Home" && (<HomeForm formData={formData} handleChange={handleChange} />)}

        {category === "Auto" && (<AutoForm formData={formData} handleChange={handleChange} />)}

        {category === "Office" && (<OfficeForm formData={formData} handleChange={handleChange} />)}

        <div className={styles.actions}>
          <button type="button" className={styles.cancelBtn} onClick={() => navigate("/dashboard")}>
            Cancel
          </button>

          <button type="submit" className={styles.submitBtn}>
            {isEditing ? "Update Request" : "Submit Request"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateRequest;