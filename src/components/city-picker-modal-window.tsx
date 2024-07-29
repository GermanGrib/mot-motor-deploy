import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";

import locationSvg from "@/assets/images/general/location.svg";
import ModalOverlay from "@/components/modal-overlay";
import ModalPortal from "@/components/modal-portal";
import { Input } from "@/components/ui/input";
import {
  toggleCityWindow,
  toggleModalOverlay,
} from "@/store/slices/modal-windows";
import { changeUserCity } from "@/store/slices/user-details";

const CityPickerModalWindow = () => {
  const dispatch = useDispatch();
  const cities = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Челябинск",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCityClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    dispatch(changeUserCity(e.currentTarget.innerText));
    dispatch(toggleModalOverlay());
    dispatch(toggleCityWindow());
  };

  return (
    <ModalPortal>
      <ModalOverlay>
        <div className="flex flex-col p-4 gap-2.5 justify-center items-center bg-white rounded-lg">
          <Image
            className="h-24"
            src={locationSvg}
            alt="знак локации"
            width={96}
            height={96}
          />
          <h3 className="text-lg font-bold">Выберите город</h3>
          <Input
            className="flex w-full py-5 px-8 bg-mm-cement border-0 rounded-lg outline-0 text-xs focus:border-none"
            type="text"
            placeholder="Введите название города"
            value={searchTerm}
            onChange={e => handleInputChange(e)}
          />
          <div className="text-center max-w-[250px] text-base">
            Введите не менее 3 символов и выберите из списка ниже:
          </div>
          <div className="md:w-full overflow-hidden">
            <SimpleBar style={{ maxHeight: 200 }}>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 content-start p-5 min-h-[200px] bg-mm-cement">
                {cities
                  .filter(city =>
                    city.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((city, index) => (
                    <li
                      className="w-52 cursor-pointer transition-colors duration-200 ease-in-out hover:text-mm-main text-base"
                      key={index}
                      onClick={e => handleCityClick(e)}
                    >
                      {city}
                    </li>
                  ))}
              </ul>
            </SimpleBar>
          </div>
        </div>
      </ModalOverlay>
    </ModalPortal>
  );
};

export default CityPickerModalWindow;
