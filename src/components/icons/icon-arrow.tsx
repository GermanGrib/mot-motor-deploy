import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../utils/_utils";

const arrowVariants = cva(
  `relative transition-transform transition-colors transition-opacity`,
  {
    variants: {
      variant: {
        default: "",
        secondary: "text-white",
        tertiary: "text-mm-main",
      },
      size: {
        default: "w-2.5 h-1.5",
        secondary: "w-2 h-1 md:w-2.5 md:h-1.5",
      },
      direction: {
        right: "-rotate-90",
        left: "rotate-90",
      },
      flip: {
        true: "-rotate-180",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "default" | "secondary" | "tertiary";
  size?: "default" | "secondary";
  direction?: "right" | "left";
  flip?: boolean;
}

const IconArrow = React.forwardRef<SVGSVGElement, ArrowIconProps>(
  ({ className, variant, size, direction, flip = false, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn(
          arrowVariants({
            variant,
            size,
            direction,
            flip,
            className,
          }),
        )}
        viewBox="0 0 11 7"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M5.5 3.5L1.83333 0L0 1.75L5.5 7L11 1.75L9.16667 0L5.5 3.5Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

IconArrow.displayName = "IconArrow";

export default IconArrow;
export type { ArrowIconProps };
