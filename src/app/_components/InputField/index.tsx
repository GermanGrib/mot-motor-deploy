import classNames from "classnames";

import styles from "./inputField.module.scss";
import InputFieldProps from "@/_components/InputField/InputField.interface";
import PhoneInput from "@/_components/InputField/PhoneInput";

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  checked,
  consentText,
  onCheckboxChange,
  title,
  main,
}: InputFieldProps) => {
  const inputClassname = classNames(styles.input, {
    [styles.main]: main,
  });
  const titleClassname = classNames(styles.title, {
    [styles.main]: main,
  });

  return (
    <>
      {title && <div className={titleClassname}>{title}</div>}
      {type !== "checkbox" && type !== "tel" && (
        <input
          className={inputClassname}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {type === "tel" && (
        <PhoneInput
          inputClassname={inputClassname}
          value={value}
          onChange={onChange}
        />
      )}
      {type === "checkbox" && (
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={checked}
            onChange={onCheckboxChange}
          />
          {consentText}
        </label>
      )}
    </>
  );
};

export default InputField;
