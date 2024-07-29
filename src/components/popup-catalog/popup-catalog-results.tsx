import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import SimpleBar from "simplebar-react";

import IconArrow from "../icons/icon-arrow";
import { catalogMenuItem } from "@/types/intefaces/catalog-data.interface";

interface PopupCatalogResultsProps {
  resultsData: catalogMenuItem[];
  activeResultInx?: number;
  setActiveResultInx?: Dispatch<SetStateAction<number | undefined>>;
}

const PopupCatalogResults = ({
  resultsData,
  activeResultInx,
  setActiveResultInx,
}: PopupCatalogResultsProps) => {
  const isSomethingInResults =
    activeResultInx !== undefined &&
    resultsData &&
    resultsData[activeResultInx] &&
    resultsData[activeResultInx].content &&
    resultsData[activeResultInx].content!.length > 0;

  return (
    <div
      className={`${isSomethingInResults ? "block" : "hidden"} absolute md:relative left-0 h-full w-full md:h-auto bg-mm-milk py-9 px-5 lg:p-12 lg:min-w-[65%] text-sm lg:text-base rounded-br-lg`}
    >
      {resultsData &&
        resultsData.map((item, index) => {
          const isActive = index === activeResultInx;

          const handleClickResultTitle = () => {
            if (setActiveResultInx) {
              setActiveResultInx(undefined);
            }
          };
          return (
            <React.Fragment key={item.id}>
              {item.content?.length !== 0 && (
                <>
                  {isActive && (
                    <div
                      className="flex md:hidden items-center mb-7"
                      onClick={handleClickResultTitle}
                    >
                      <IconArrow direction="left" className="mr-4" />
                      <h3 className="m-0 mr-auto text-xl font-bold">
                        {item.title}
                      </h3>
                      <Image
                        src={item.svg || ""}
                        alt="Иконка пункта"
                        width={22}
                        height={22}
                      />
                    </div>
                  )}

                  <SimpleBar style={{ maxHeight: "55vh" }}>
                    <ul
                      className={`flex-col font-medium leading-5 ${
                        isActive ? "flex md:grid md:grid-cols-2" : "hidden "
                      }`}
                    >
                      {item.content &&
                        item.content.map(content => {
                          const { id, title, route } = content;
                          return (
                            <li key={id} className="mb-5 odd:mr-5 odd:lg:mr-12">
                              <Link
                                className="w-full hover:text-mm-main-hover"
                                href={route}
                              >
                                {title}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </SimpleBar>
                </>
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default PopupCatalogResults;
