import styles from "./TextAreaField.module.css";

function TextAreaField({ label, name, placeholder, value, onChange,}) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} rows={5}/>
    </div>
  );
}

export default TextAreaField;