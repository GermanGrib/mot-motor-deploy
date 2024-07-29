import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/_utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-mm-main text-white hover:bg-mm-main-hover font-bold active:bg-mm-main-active",
        secondary:
          "bg-transparent font-bold text-mm-main border border-mm-main hover:bg-mm-main-hover hover:border-mm-main-hover hover:text-white active:bg-mm-main-active active:border-mm-main-active",
        catalog:
          "justify-center w-full md:justify-start text-white border-none outline-none font-bold text-xs lg:text-base",
        catalogBurgerMenu: "justify-start bg-mm-main text-white rounded-none",
      },
      size: {
        default: "h-[46px]",
        catalogBurgerMenu: "h-[56px]",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      padding: {
        default: "p-5",
        catalog: "p-0 md:py-5 md:pl-2.5 md:pr-5",
        catalogBurgerMenu: "py-4 px-5",
        wide: "p-5 w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      padding: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, padding, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, padding, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
