import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/_utils";

interface CrossIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "default" | "secondary";
  size?: "default" | "secondary";
  position?: "default" | "rightTop";
  color?: "default" | "bright";
}

const crossVariants = cva(
  `cursor-pointer transition-transform hover:rotate-45`,
  {
    variants: {
      variant: {
        default: "",
        secondary: "",
      },
      size: {
        default: "w-3.5 h-3.5 md:w-6 md:h-6",
        secondary: "",
      },
      color: {
        default: "text-black",
        bright: "text-white",
      },
      position: {
        default: "",
        rightTop: "absolute top-2 md:top-4 right-2 md:right-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
  },
);

const CrossSvg = React.forwardRef<SVGSVGElement, CrossIconProps>(
  ({ className, variant, size, color, position, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn(
          crossVariants({
            variant,
            size,
            color,
            position,
            className,
          }),
        )}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M21 7L7 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 7L21 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CrossSvg.displayName = "CrossSvg";

export default CrossSvg;
