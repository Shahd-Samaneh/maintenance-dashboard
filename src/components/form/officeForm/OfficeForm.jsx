import { useState } from "react";

import InputField from "../inputField/InputField";
import TextAreaField from "../textAreaField/TextAreaField";

function OfficeForm({ formData, handleChange }) {
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
        label="Department"
        name="department"
        placeholder="IT Department"
        value={formData.department}
        onChange={handleChange}
      />

      <InputField
        label="Equipment"
        name="equipment"
        placeholder="Printer, Laptop..."
        value={formData.equipment}
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

export default OfficeForm;