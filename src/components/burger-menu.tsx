import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";

import IconArrow from "./icons/icon-arrow";
import ListItemLink from "./lists/lists-with-links/list-item-link";
import { Button } from "./ui/button";
import communicationDetails from "../data/communication/communication.json";
import navigationData from "../data/navigation/navigation.json";
import useScrollControl from "../hooks/use-scroll-control";
import Burger from "@/components/burger";
import Communication from "@/components/communication";
import { toggleBurgerMenu } from "@/store/slices/burger-menu";
import { toggleCatalogPopup } from "@/store/slices/catalogs";
import { toggleModalOverlay } from "@/store/slices/modal-windows";
import { RootState } from "@/store/store";
import CommunicationTypes from "@/types/enums/communication-types";

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
              <Burger isOpen={false} variant="secondary" size="secondary" />
            </div>
            <span className="mr-auto font-bold text-base">Каталог</span>
            <IconArrow variant="secondary" direction="right" />
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
                        <IconArrow direction="right" />
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
                  communicationType={CommunicationTypes.phoneCall}
                  showPhoneNumber
                  phoneClassname="mr-1.5 font-bold no-underline text-mm-main"
                />
                <IconArrow />
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
              communicationType={CommunicationTypes.whatsApp}
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
                        <IconArrow direction="left" />
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
                                link: "flex py-2.5",
                                text: "text-sm font-medium",
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
