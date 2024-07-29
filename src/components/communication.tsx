import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import * as React from "react";

import phoneCallIcon from "@/assets/images/general/phone.svg";
import WhatsAppIcon from "@/assets/images/general/whatsApp.svg";
import { buttonVariants } from "@/components/ui/button";
import CommunicationTypes from "@/types/enums/communication-types";
import communicationTypes from "@/types/enums/communication-types";
import { cn } from "@/utils/_utils";
import formatPhoneNumber from "@/utils/format-phone-number";

interface communicationProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  phoneNumber: string;
  showPhoneNumber?: boolean;
  showIcon?: boolean;
  phoneClassname?: string;
  communicationType?: CommunicationTypes;
  // {
  //   phoneCall?: boolean;
  //   whatsApp?: boolean;
  // };
  whatsAppPreviewText?: string;
  openInNewTab?: boolean;
  variant?: "default";
}

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
}: communicationProps) => {
  const phoneNumberVariants = cva("", {
    variants: {
      variant: {
        default:
          "font-bold no-underline text-mm-primaryText text-base whitespace-nowrap",
      },
    },
  });
  let href = "tel:";
  if (communicationType === CommunicationTypes.whatsApp) {
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
        {showIcon && communicationType === CommunicationTypes.whatsApp && (
          <Image
            className="select-none w-auto h-auto"
            src={WhatsAppIcon}
            alt="Иконка вотс апп"
            width={36}
            height={36}
          />
        )}
        {showIcon && communicationType === communicationTypes.phoneCall && (
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
