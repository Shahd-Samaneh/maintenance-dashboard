import InputField from "../inputField/InputField";
import TextAreaField from "../textAreaField/TextAreaField";

function HomeForm({ formData, handleChange }) {
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
        label="Room"
        name="room"
        placeholder="Kitchen, Bathroom..."
        value={formData.room}
        onChange={handleChange}
      />

      <TextAreaField
        label="Description"
        name="description"
        placeholder="Describe the maintenance issue..."
        value={formData.description}
        onChange={handleChange}
      />
    </>
  );
}

export default HomeForm;