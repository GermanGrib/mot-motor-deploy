"use client";
import { useState } from "react";
import { useSelector } from "react-redux";

import PopupCatalogMenu from "./popup-catalog-menu";
import PopupCatalogResults from "./popup-catalog-results";
import { RootState } from "@/store/store";
import { catalogMenuItem } from "@/types/intefaces/catalog-data.interface";

interface PopupCatalogProps {
  catalogData: catalogMenuItem[];
}

const PopupCatalog = ({ catalogData }: PopupCatalogProps) => {
  const showCatalogMenu = useSelector(
    (state: RootState) => state.catalogPopup.isCatalogPopupOpen,
  );
  const [menuItemActive, setMenuItemActive] = useState<number | undefined>(
    undefined,
  );
  const onMouseLeavePopupMenu = () => {
    setMenuItemActive(undefined);
  };
  return (
    <div
      className={`container relative z-30 text-base border-t-2 border-mm-cement md:border-0 md:border-transparent ${(showCatalogMenu && "block") || "hidden"}`}
      onMouseLeave={onMouseLeavePopupMenu}
    >
      <div
        className={`flex left-0 sm:left-auto absolute z-10 w-full ${menuItemActive ? "lg:w-full" : "lg:w-fit"}`}
      >
        <PopupCatalogMenu
          categoryData={catalogData}
          showSvg
          showArrow
          activeMenuIdx={menuItemActive}
          setActiveMenuInx={setMenuItemActive}
        />
        <PopupCatalogResults
          resultsData={catalogData}
          activeResultInx={menuItemActive}
          setActiveResultInx={setMenuItemActive}
        />
      </div>
    </div>
  );
};

export default PopupCatalog;
