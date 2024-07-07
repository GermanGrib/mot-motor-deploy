"use client";
import classNames from "classnames";

import styles from "./burger.module.scss";
import BurgerProps from "@/_components/Burger/Burger.interface";

const Burger = ({
  isBurgerOpen,
  onBurgerClick,
  mobile,
  catalog,
}: BurgerProps) => {
  const burgerClassname = classNames(
    styles.burger,
    isBurgerOpen && styles.isOpen,
    {
      [styles.mobile]: mobile,
      [styles.catalog]: catalog,
    },
  );

  const handleBurgerClick = () => {
    if (onBurgerClick) {
      onBurgerClick();
    }
  };
  return (
    <div className={burgerClassname} onClick={handleBurgerClick}>
      <div></div>
    </div>
  );
};

export default Burger;
