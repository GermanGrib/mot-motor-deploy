import Image from "next/image";

import fourSquaresSvg from "@/_assets/images/svgs/fourSquares.svg";

interface MainCharacteristicsListProps {
  characteristics: string[][];
  hideMobile?: boolean;
  hideDesktop?: boolean;
}

const MainCharacteristicsList = ({
  characteristics,
  hideMobile,
  hideDesktop,
}: MainCharacteristicsListProps) => {
  return (
    <ul
      className={`flex flex-col gap-5 md:pl-4 md:grid md:grid-cols-3 ${hideMobile && "hidden md:flex"} ${hideDesktop && "md:hidden"}`}
    >
      {characteristics.slice(0, 6).map((characteristic, index) => {
        return (
          <li key={index} className="flex gap-3 items-center">
            <Image
              className="opacity-50"
              src={fourSquaresSvg}
              alt="иконка характеристики"
              width={16}
              height={16}
            />
            <div className="flex flex-col">
              <span className="text-xs opacity-50 font-medium whitespace-nowrap">
                {characteristic[0]}
              </span>
              <span className="text-sm font-bold">{characteristic[1]}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MainCharacteristicsList;
