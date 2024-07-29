import Image from "next/image";
import Link from "next/link";
import React, { Dispatch } from "react";

import listItemClassnameInterface from "@/types/intefaces/list-item-classname.interface";

interface ListItemLinkProps extends React.LiHTMLAttributes<HTMLLIElement> {
  isActive?: boolean;
  activeItemInx?: number;
  setActiveInx?: Dispatch<number | undefined>;
  href: string;
  itemText?: string;
  svgSrc?: string;
  showSvg?: boolean;
  customClassnames?: listItemClassnameInterface;
  itemInx?: number;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const ListItemLink = ({
  href,
  itemText,
  svgSrc,
  showSvg,
  children,
  customClassnames,
  activeItemInx,
  setActiveInx,
  itemInx,
  onItemClick,
}: ListItemLinkProps) => {
  const handleItemMouseEnter = () => {
    if (setActiveInx) {
      setActiveInx(itemInx);
    }
  };
  const isActive = itemInx === activeItemInx;

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (onItemClick) {
      onItemClick(e);
    }
  };

  return (
    <li
      className={`${customClassnames?.root} ${isActive && customClassnames?.activeItem}`}
      onMouseEnter={handleItemMouseEnter}
    >
      <Link
        className={customClassnames?.link}
        href={href}
        onClick={e => handleItemClick(e)}
      >
        {svgSrc && showSvg && (
          <Image
            className={customClassnames?.img}
            src={svgSrc}
            alt="Иконка пункта"
            width={22}
            height={22}
          />
        )}
        {itemText && <span className={customClassnames?.text}>{itemText}</span>}
        {children}
      </Link>
    </li>
  );
};

export default ListItemLink;
