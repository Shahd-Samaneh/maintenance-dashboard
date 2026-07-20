import styles from "./InputField.module.css";

function InputField({ label, type = "text", name, placeholder, value, onChange, }) {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={name}>{label}</label>
            <input id={name} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    );
}

export default InputField;