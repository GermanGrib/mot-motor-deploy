import { type VariantProps } from "class-variance-authority";
import * as React from "react";

import { buttonVariants } from "@/_components/ui/button";

interface communicationProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  phoneNumber: string;
  showPhoneNumber?: boolean;
  showIcon?: boolean;
  phoneClassname?: string;
  communicationType?: {
    phoneCall?: boolean;
    whatsApp?: boolean;
  };
  whatsAppPreviewText?: string;
  openInNewTab?: boolean;
  variant?: "default";
}

export default communicationProps;
