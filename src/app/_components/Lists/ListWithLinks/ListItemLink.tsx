import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import styles from "./listItemLink.module.scss";
import { ListItemLinkProps } from "@/_components/Lists/ListWithLinks/ListItemLink.interface";

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

  const rootClassname = classNames(
    styles.item,
    customClassnames?.root,
    isActive && customClassnames?.activeItem,
  );
  const linkClassname = classNames(styles.link, customClassnames?.link);
  const textClassname = classNames(styles.text, customClassnames?.text);
  const imgClassname = classNames(styles.img, customClassnames?.img);

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (onItemClick) {
      onItemClick(e);
    }
  };

  return (
    <li className={rootClassname} onMouseEnter={handleItemMouseEnter}>
      <Link
        className={linkClassname}
        href={href}
        onClick={e => handleItemClick(e)}
      >
        {svgSrc && showSvg && (
          <Image
            className={imgClassname}
            src={svgSrc}
            alt="Иконка пункта"
            width={22}
            height={22}
          />
        )}
        {itemText && <span className={textClassname}>{itemText}</span>}
        {children}
      </Link>
    </li>
  );
};

export default ListItemLink;
