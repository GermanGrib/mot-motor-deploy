"use client";
import { useSelector } from "react-redux";

import BurgerMenu from "@/_components/BurgerMenu";
import PopupCatalog from "@/_components/Catalog/PopupCatalog";
import GreetingsInfo from "@/_components/Header/GreetingsInfo";
import Navigation from "@/_components/Header/Navigation";
import Overlay from "@/_components/Header/Overlay";
import UserInteraction from "@/_components/Header/UserInteraction";
import popupCatalogData from "@/_data/catalogHeader/catalogHeader.json";
import { RootState } from "@/_store/store";

const Header = () => {
  const isCatalogPopupOpen = useSelector(
    (state: RootState) => state.catalogPopup,
  );
  return (
    <header className="relative">
      <GreetingsInfo />
      <UserInteraction />
      <Navigation />
      <PopupCatalog catalogData={popupCatalogData} main />
      <BurgerMenu />
      <Overlay />
    </header>
  );
};

export default Header;
