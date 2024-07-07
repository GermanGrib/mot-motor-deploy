import classNames from "classnames";
import SimpleBar from "simplebar-react";

import ListWithLinks from "../../Lists/ListWithLinks";
import PopupCatalogMenuProps from "@/_components/Catalog/PopupCatalog/PopupCatalogMenu.interface";
import styles from "@/_components/Catalog/PopupCatalog/popupCatalogMenu.module.scss";
import "simplebar-react/dist/simplebar.min.css";

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
  const wrapperClassname = classNames(
    "w-full md:w-auto min-w-[312px] p-6 bg-white",
    styles.categoryWrapper,
    isSomethingInResults && styles.withContent,
  );
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
    <div className={wrapperClassname}>
      <SimpleBar className={styles.simpleBar}>
        <ListWithLinks
          activeListItemInx={activeMenuIdx}
          setIsActiveListItemInx={setActiveMenuInx}
          menuData={categoryData}
          showArrow={showArrow && showArrow}
          showSvg={showSvg}
          listClassname={styles.categoryList}
          itemClassnames={{
            img: styles.itemSvg,
            text: styles.itemText,
            link: styles.itemLink,
            activeItem: styles.activeMenuItem,
          }}
          arrowProps={{
            main: true,
            right: true,
            customClassname: styles.arrowCategoryMenu,
          }}
          onItemClick={onMenuItemClick}
        />
      </SimpleBar>
    </div>
  );
};

export default PopupCatalogMenu;
