import classNames from "classnames";

import styles from "./arrow.module.scss";
import ArrowIconProps from "@/_components/Icons/Arrow/Arrow.interface";

const ArrowIcon = ({
  flip,
  right,
  left,
  main,
  secondary,
  tertiary,
  customClassname,
  className,
}: ArrowIconProps) => {
  const svgClassname = classNames(styles.svg, className, customClassname, {
    [styles.flip]: flip,
    [styles.main]: main,
    [styles.secondary]: secondary,
    [styles.tertiary]: tertiary,
    [styles.right]: right,
    [styles.left]: left,
  });

  return (
    <svg
      className={svgClassname}
      viewBox="0 0 11 7"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 3.5L1.83333 0L0 1.75L5.5 7L11 1.75L9.16667 0L5.5 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowIcon;
