import React from "react";
import { IMaskInput } from "react-imask";

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassname?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  inputClassname,
  ...props
}) => {
  const mask = "+7 (000) 000-0000";
  const phonePlaceholder = "+7 (___) ___-____";

  const handleAccept = (value: string) => {
    const event = {
      target: {
        value: value,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange && onChange(event);
  };

  return (
    <IMaskInput
      mask={mask}
      className={inputClassname}
      type="tel"
      placeholder={phonePlaceholder}
      value={String(value)}
      unmask={false}
      onAccept={handleAccept}
      {...props}
    />
  );
};

export default PhoneInput;
