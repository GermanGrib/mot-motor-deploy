import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { Swiper as SwiperType } from "swiper";

import ArrowIcon from "@/_components/Icons/Arrow";
import { cn } from "@/_utils/_utils";

const buttonVariants = cva(
  "absolute top-1/2 transform -translate-y-1/2 w-12 h-12 justify-center items-center border-none outline-none rounded-full bg-mm-main cursor-pointer hover:bg-mm-main-hover transition-colors duration-200 z-10",
  {
    variants: {
      variant: {
        default:
          "hidden xl:flex bg-mm-main text-white hover:bg-mm-main-hover font-bold active:bg-mm-main-active",
      },
      size: {
        default: "h-[46px]",
      },
      position: {
        left: "-left-14",
        right: "-right-14",
      },
      padding: {
        default: "p-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      padding: "default",
    },
  },
);

interface ChangeSlideButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  swiper: SwiperType | null;
  left?: boolean;
  right?: boolean;
}

const ChangeSlideButton = React.forwardRef<
  HTMLButtonElement,
  ChangeSlideButtonProps
>(
  (
    {
      className,
      variant,
      size,
      position,
      padding,
      left,
      right,
      swiper,
      ...props
    },
    ref,
  ) => {
    const changeSlide = () => {
      if (swiper) {
        if (left) swiper.slidePrev();
        if (right) swiper.slideNext();
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, position, padding, className }),
        )}
        onClick={changeSlide}
        {...props}
      >
        <ArrowIcon right={right} left={left} secondary />
      </button>
    );
  },
);

ChangeSlideButton.displayName = "ChangeSlideButton";

export default ChangeSlideButton;
