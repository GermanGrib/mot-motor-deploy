import React, { Dispatch, SetStateAction } from "react";
import SimpleBar from "simplebar-react";

import ListWithLinks from "../lists/lists-with-links";
import "simplebar-react/dist/simplebar.min.css";
import { catalogMenuItem } from "@/types/intefaces/catalog-data.interface";

interface PopupCatalogMenuProps {
  categoryData: catalogMenuItem[];
  showArrow?: boolean;
  showSvg?: boolean;
  activeMenuIdx?: number;
  setActiveMenuInx?: Dispatch<SetStateAction<number | undefined>>;
}

const PopupCatalogMenu = ({
  categoryData,
  showArrow,
  showSvg,
  activeMenuIdx,
  setActiveMenuInx,
}: PopupCatalogMenuProps) => {
  const isSomethingInResults =
    activeMenuIdx !== undefined &&
    categoryData &&
    categoryData[activeMenuIdx] &&
    categoryData[activeMenuIdx].content &&
    categoryData[activeMenuIdx].content!.length > 0;
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints);

  const onMenuItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (isTouchDevice) {
      e.preventDefault();
    }
  };
  return (
    <div
      className={`w-full md:w-auto min-w-[312px] p-6 bg-white ${isSomethingInResults ? "rounded-bl-none" : "rounded-bl-lg"}`}
    >
      <SimpleBar style={{ maxHeight: "65vh" }}>
        <ListWithLinks
          activeListItemInx={activeMenuIdx}
          setIsActiveListItemInx={setActiveMenuInx}
          menuData={categoryData}
          showArrow={showArrow && showArrow}
          showSvg={showSvg}
          listClassname="flex flex-col gap-4 font-medium"
          itemClassnames={{
            img: "mr-4",
            text: "mr-auto transition-colors duration-200 group-hover:text-mm-main-hover group-hover:opacity-100",
            link: "flex items-center group",
          }}
          arrowProps={{
            direction: "right",
            className: "group-hover:text-mm-main-hover group-hover:opacity-100",
          }}
          onItemClick={onMenuItemClick}
        />
      </SimpleBar>
    </div>
  );
};

export default PopupCatalogMenu;
