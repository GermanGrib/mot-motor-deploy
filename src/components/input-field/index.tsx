import React, { ChangeEventHandler, ReactNode } from "react";

import PhoneInput from "./phone-input";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  consentText?: string | ReactNode;
  onCheckboxChange?: ChangeEventHandler<HTMLInputElement>;
  main?: boolean;
}

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
  return (
    <>
      {title && (
        <div className="mb-2 md:mb-3 text-sm md:text-base select-none">
          {title}
        </div>
      )}
      {type !== "checkbox" && type !== "tel" && (
        <input
          className="flex py-4 px-8 w-full bg-mm-cement font-medium text-xs border-0 rounded-lg outline-0"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {type === "tel" && (
        <PhoneInput
          inputClassname="flex py-4 px-8 w-full bg-mm-cement font-medium text-xs border-0 rounded-lg outline-0"
          value={value}
          onChange={onChange}
        />
      )}
      {type === "checkbox" && (
        <label className="flex max-w-[400px] items-baseline gap-3.5">
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
