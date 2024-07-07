import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";

import styles from "./burgerMenu.module.scss";
import { toggleModalOverlay } from "../../_store/slices/ModalWindows";
import Burger from "@/_components/Burger";
import Communication from "@/_components/Communication";
import ArrowIcon from "@/_components/Icons/Arrow";
import ListItemLink from "@/_components/Lists/ListWithLinks/ListItemLink";
import { Button } from "@/_components/ui/button";
import communicationDetails from "@/_data/communication/communication.json";
import navigationData from "@/_data/navigation/navigation.json";
import useScrollControl from "@/_hooks/useScrollControl";
import { toggleBurgerMenu } from "@/_store/slices/BurgerMenu";
import { toggleCatalogPopup } from "@/_store/slices/Catalogs";
import { RootState } from "@/_store/store";

const BurgerMenu = () => {
  const [showResults, setShowResults] = useState(false);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const showBurgerMenu = useSelector(
    (state: RootState) => state.burgerMenu.isBurgerMenuOpen,
  );
  useScrollControl({ isDisabled: showBurgerMenu });

  const handleCatalogBtnClick = () => {
    dispatch(toggleCatalogPopup());
  };

  const handleCallBackBtnClick = () => {
    dispatch(toggleBurgerMenu());
    dispatch(toggleModalOverlay());
  };

  const handleBackResultBtn = () => {
    setShowResults(false);
  };

  return (
    <div
      className={`absolute w-screen h-screen z-20 ${showBurgerMenu ? "block" : "hidden"}`}
    >
      <div className="relative flex flex-col h-full w-4/5 bg-white">
        <div>
          <Button
            className="w-full border-none"
            variant="catalogBurgerMenu"
            padding="catalogBurgerMenu"
            size="catalogBurgerMenu"
            onClick={handleCatalogBtnClick}
          >
            <div className="flex justify-center items-center mr-2.5 w-6 h-6 bg-white rounded-full">
              <Burger catalog isBurgerOpen={false} />
            </div>
            <span className="mr-auto font-bold text-base">Каталог</span>
            <ArrowIcon secondary right />
          </Button>
        </div>
        <div className="py-8 mb-8">
          <SimpleBar className="max-h-[400px]">
            <ul className="flex flex-col">
              {navigationData.map(item => {
                const handleNavItemClick = (
                  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                  activeTab: number,
                ) => {
                  if (item.content && item.content.length > 0) {
                    e.preventDefault();
                    setShowResults(true);
                    setActiveTab(activeTab);
                  } else {
                  }
                };
                return (
                  <li key={item.id}>
                    <Link
                      href={item.route}
                      className="flex p-5 justify-between select-none text-base"
                      onClick={e => handleNavItemClick(e, item.id)}
                    >
                      <span>{item.title}</span>
                      {item.content && item.content?.length > 0 && (
                        <ArrowIcon main right />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SimpleBar>
        </div>
        <div className="flex flex-col gap-4 px-5">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5 text-base">
                <Communication
                  phoneNumber={communicationDetails.mainNumber}
                  communicationType={{ phoneCall: true }}
                  showPhoneNumber
                  phoneClassname={styles.phoneNumber}
                />
                <ArrowIcon main />
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center w-2 h-2 bg-mm-grass rounded-full">
                  <div className="w-1 h-1 bg-mm-leaf rounded-full"></div>
                </div>
                <div className="text-xs font-medium select-none whitespace-nowrap">
                  Мы сейчас на связи
                </div>
              </div>
            </div>
            <Communication
              phoneNumber={communicationDetails.whatsApp.number}
              communicationType={{ whatsApp: true }}
              showIcon
              whatsAppPreviewText={communicationDetails.whatsApp.text}
              openInNewTab
            />
          </div>
          <div onClick={handleCallBackBtnClick}>
            <Button variant="secondary" className="w-full">
              Бесплатный звонок
            </Button>
          </div>
        </div>
        {showResults && (
          <div className="absolute px-5 left-0 top-0 w-full h-full bg-white z-10">
            {navigationData.map(item => {
              const isActiveItem = item.id === activeTab;
              return (
                <>
                  {isActiveItem && (
                    <div>
                      <div
                        className="flex items-center gap-4 mb-2 pt-8 pb-2"
                        onClick={handleBackResultBtn}
                      >
                        <ArrowIcon left main />
                        <h3 className="m-0 text-xl font-bold">{item.title}</h3>
                      </div>
                      <ul className="flex flex-col gap-1.5">
                        {item.content.map(result => {
                          return (
                            <ListItemLink
                              key={result.id}
                              href={result.route}
                              itemText={result.title}
                              customClassnames={{
                                root: styles.resultItem,
                                link: styles.resultLink,
                                text: styles.resultText,
                              }}
                            />
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
