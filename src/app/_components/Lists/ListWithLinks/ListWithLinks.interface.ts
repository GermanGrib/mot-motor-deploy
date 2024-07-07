import { Dispatch } from "react";

import ArrowIconProps from "@/_components/Icons/Arrow/Arrow.interface";
import { listItemClassname } from "@/_components/Lists/ListWithLinks/ListItemLink.interface";
import { catalogMenuItem } from "@/types/intefaces/catalogData";

interface ListWithLinksProps extends React.HTMLAttributes<HTMLUListElement> {
  menuData: catalogMenuItem[];
  showArrow?: boolean;
  showSvg?: boolean;
  listClassname?: string;
  itemClassnames?: listItemClassname;
  arrowProps?: ArrowIconProps;
  activeListItemInx?: number;
  setIsActiveListItemInx?: Dispatch<number | undefined>;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default ListWithLinksProps;
