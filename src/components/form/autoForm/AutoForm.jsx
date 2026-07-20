import { useState } from "react";

import InputField from "../inputField/InputField";
import TextAreaField from "../textAreaField/TextAreaField";

function AutoForm({ formData, handleChange }) {
 return (
    <>
      <InputField
        label="Request Title"
        name="title"
        placeholder="Enter request title"
        value={formData.title}
        onChange={handleChange}
      />

      <InputField
        label="Vehicle Model"
        name="vehicleModel"
        placeholder="Toyota Corolla"
        value={formData.vehicleModel}
        onChange={handleChange}
      />

      <InputField
        label="License Plate"
        name="licensePlate"
        placeholder="ABC-123"
        value={formData.licensePlate}
        onChange={handleChange}
      />

      <TextAreaField
        label="Description"
        name="description"
        placeholder="Describe the issue..."
        value={formData.description}
        onChange={handleChange}
      />
    </>
  );
}

export default AutoForm;