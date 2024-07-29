import { Dispatch } from "react";

import ListItemLink from "./list-item-link";
import IconArrow, { ArrowIconProps } from "@/components/icons/icon-arrow";
import { catalogMenuItem } from "@/types/intefaces/catalog-data.interface";
import listItemClassnameInterface from "@/types/intefaces/list-item-classname.interface";

interface ListWithLinksProps extends React.HTMLAttributes<HTMLUListElement> {
  menuData: catalogMenuItem[];
  showArrow?: boolean;
  showSvg?: boolean;
  listClassname?: string;
  itemClassnames?: listItemClassnameInterface;
  arrowProps?: ArrowIconProps;
  activeListItemInx?: number;
  setIsActiveListItemInx?: Dispatch<number | undefined>;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const ListWithLinks = ({
  menuData,
  showArrow,
  showSvg,
  listClassname,
  itemClassnames,
  arrowProps,
  activeListItemInx,
  setIsActiveListItemInx,
  onItemClick,
}: ListWithLinksProps) => {
  return (
    <ul className={listClassname}>
      {menuData &&
        menuData.map((item, index) => {
          return (
            <ListItemLink
              key={item.id}
              href={item.route}
              itemText={item.title}
              svgSrc={item.svg}
              customClassnames={itemClassnames}
              showSvg={showSvg}
              itemInx={index}
              activeItemInx={activeListItemInx}
              setActiveInx={setIsActiveListItemInx}
              onItemClick={onItemClick}
            >
              {showArrow && item.content && item.content?.length > 0 && (
                <IconArrow
                  variant={arrowProps?.variant}
                  flip={arrowProps?.flip}
                  direction={arrowProps?.direction}
                />
              )}
            </ListItemLink>
          );
        })}
    </ul>
  );
};

export default ListWithLinks;
