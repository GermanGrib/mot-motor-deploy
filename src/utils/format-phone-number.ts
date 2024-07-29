import { parsePhoneNumberFromString } from "libphonenumber-js";

const formatPhoneNumber = (phoneNumber: string): string => {
  if (phoneNumber.startsWith("8")) {
    phoneNumber = phoneNumber.replace(/^8/, "+7");
  }

  const phoneNumberObj = parsePhoneNumberFromString(phoneNumber, "RU");
  if (phoneNumberObj) {
    return phoneNumberObj.formatInternational();
  }

  return phoneNumber;
};

export default formatPhoneNumber;
