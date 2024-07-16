import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Burger from "@/_components/Burger";
import ArrowIcon from "@/_components/Icons/Arrow";
import Search from "@/_components/Search";
import { Button } from "@/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/_components/ui/dropdown-menu";
import navigationData from "@/_data/navigation/navigation.json";
import { toggleCatalogPopup } from "@/_store/slices/Catalogs";
import { RootState } from "@/_store/store";

const Navigation = () => {
  const isCatalogOpen = useSelector(
    (state: RootState) => state.catalogPopup.isCatalogPopupOpen,
  );
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const handleCatalogBtnClick = () => {
    dispatch(toggleCatalogPopup());
  };
  const router = useRouter();

  const handleDropdownMouseEnter = (itemId: number) => {
    setOpenDropdown(itemId);
  };

  const handleDropdownMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleNavItemClick = (route: string) => {
    router.push(route);
  };

  const handleMenuItemClick = (e: React.MouseEvent, route: string) => {
    e.stopPropagation();
    router.push(route);
  };

  return (
    <div className="bg-transparent py-1.5 text-base text-white md:bg-mm-main">
      <div className="flex gap-2 md:gap-5 lg:gap-12 container">
        <div
          className={classNames(
            "min-w-[40px] min-h-[40px] md:min-w-[128px] lg:min-w-[228px] lg:min-h-[46px] bg-mm-secondary rounded-lg transition-colors duration-200 ease-in-out",
            isCatalogOpen && "bg-mm-secondary-active",
          )}
          onClick={handleCatalogBtnClick}
        >
          <Button variant="catalog" padding="catalog">
            <div className="m-0 md:mr-4 flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <Burger catalog isBurgerOpen={isCatalogOpen} />
            </div>
            <span className="hidden md:inline-block mr-auto">Каталог</span>
            <ArrowIcon
              secondary
              className="hidden md:block"
              flip={isCatalogOpen}
            />
          </Button>
        </div>
        <nav className="hidden w-full md:block">
          <ul className="flex h-full justify-between items-center font-bold">
            {navigationData.map(item => {
              const isDropdownOpen = openDropdown === item.id;

              return (
                <li
                  key={item.id}
                  className="relative flex items-center h-full text-xs lg:text-base"
                >
                  <div
                    onClick={e => handleNavItemClick(item.route)}
                    className="flex h-full gap-1.5 items-center select-none whitespace-nowrap"
                  >
                    <DropdownMenu open={isDropdownOpen}>
                      <DropdownMenuTrigger
                        onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                        onMouseLeave={handleDropdownMouseLeave}
                        className="flex items-center gap-2 w-full h-full"
                      >
                        {item.title}
                        {item.content && item.content?.length > 0 && (
                          <ArrowIcon secondary />
                        )}
                        {item.content && item.content.length > 0 && (
                          <DropdownMenuContent align="start">
                            {item.content.map(result => {
                              return (
                                <DropdownMenuItem key={result.id}>
                                  <div
                                    onClick={e =>
                                      handleMenuItemClick(e, result.route)
                                    }
                                    className="flex w-full hover:text-mm-main-hover cursor-pointer"
                                  >
                                    {result.title}
                                  </div>
                                </DropdownMenuItem>
                              );
                            })}
                          </DropdownMenuContent>
                        )}
                      </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        <Search className="block w-full md:hidden" />
      </div>
    </div>
  );
};

export default Navigation;
