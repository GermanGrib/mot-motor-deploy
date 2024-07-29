import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/_utils";

interface BurgerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary";
  size?: "default" | "secondary";
  isOpen: boolean;
}

const burgerVariants = cva(
  `flex justify-around flex-col flex-wrap cursor-pointer`,
  {
    variants: {
      variant: {
        default: "md:hidden",
        secondary: "",
      },
      size: {
        default: "w-8 h-8",
        secondary: "w-3 h-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const lineVariants = cva("block w-full transition-all origin-[1px]", {
  variants: {
    variant: {
      default: "bg-mm-primaryText",
      secondary: "bg-mm-main",
    },
    size: {
      default: "h-[5px]",
      secondary: "h-[1px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Burger = React.forwardRef<HTMLDivElement, BurgerProps>(
  ({ isOpen, onClick, className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          burgerVariants({
            variant,
            size,
            className,
          }),
        )}
      >
        <div
          className={cn(
            lineVariants({ variant, size }),
            isOpen ? "rotate-45" : "rotate-0",
          )}
        />
        <div
          className={cn(
            lineVariants({ variant, size }),
            isOpen ? "opacity-0" : "translate-x-0",
          )}
        />
        <div
          className={cn(
            lineVariants({ variant, size }),
            isOpen ? "-rotate-45" : "rotate-0",
          )}
        />
      </div>
    );
  },
);

Burger.displayName = "Burger";

export default Burger;
