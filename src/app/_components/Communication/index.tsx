import { cva } from "class-variance-authority";
import Image from "next/image";

import phoneCallIcon from "@/_assets/images/general/phone.svg";
import WhatsAppIcon from "@/_assets/images/general/whatsApp.svg";
import CommunicationProps from "@/_components/Communication/Communication.interface";
import { cn } from "@/_utils/_utils";
import formatPhoneNumber from "@/_utils/formatPhoneNumber";

const Communication = ({
  className,
  phoneNumber,
  showPhoneNumber,
  showIcon,
  children,
  communicationType,
  openInNewTab,
  whatsAppPreviewText,
  variant,
}: CommunicationProps) => {
  const phoneNumberVariants = cva("", {
    variants: {
      variant: {
        default:
          "font-bold no-underline text-mm-primaryText text-base whitespace-nowrap",
      },
    },
  });
  let href = "tel:";
  if (communicationType?.whatsApp) {
    href = `https://wa.clck.bar/${phoneNumber}?text=${whatsAppPreviewText}`;
  }

  return (
    <>
      <a
        className={cn(phoneNumberVariants({ variant, className }))}
        href={href + phoneNumber}
        target={(openInNewTab && "_blank") || ""}
      >
        {showPhoneNumber && formatPhoneNumber(phoneNumber)}
        {showIcon && communicationType?.whatsApp && (
          <Image
            className="select-none w-auto h-auto"
            src={WhatsAppIcon}
            alt="Иконка вотс апп"
            width={36}
            height={36}
          />
        )}
        {showIcon && communicationType?.phoneCall && (
          <Image
            className="w-auto h-auto"
            src={phoneCallIcon}
            alt="иконка телефона"
            width={30}
            height={30}
          />
        )}
        {children}
      </a>
    </>
  );
};

export default Communication;
