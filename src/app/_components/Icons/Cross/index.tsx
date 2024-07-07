import classNames from "classnames";

import styles from "./cross.module.scss";
import CrossSvgProps from "@/_components/Icons/Cross/CrossSvgProps.interface";

const CrossSvg = ({ onClick, main }: CrossSvgProps) => {
  const crossClassname = classNames(styles.cross, styles.crossPosition, {
    [styles.main]: main,
  });
  return (
    <svg
      className={crossClassname}
      onClick={onClick}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 7L7 21"
        stroke="#222831"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7L21 21"
        stroke="#222831"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CrossSvg;
