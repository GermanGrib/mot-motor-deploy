import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SimpleBar from "simplebar-react";

import styles from "./popupCatalogResults.module.scss";
import PopupCatalogResultsProps from "@/_components/Catalog/PopupCatalog/PopupCatalogResults.interface";
import ArrowIcon from "@/_components/Icons/Arrow";

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
  const resultsClassname = classNames(
    `${isSomethingInResults ? "block" : "hidden"} absolute md:relative left-0 h-full md:h-auto w-full bg-mm-milk py-9 px-5 lg:p-12 lg:min-w-[65%] text-sm lg:text-base`,
    styles.root,
  );
  return (
    <div className={resultsClassname}>
      {resultsData &&
        resultsData.map((item, index) => {
          const isActive = index === activeResultInx;
          const listItemClass = classNames(
            "font-medium leading-5",
            styles.list,
            isActive ? styles.activeList : "",
          );
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
                      className={styles.resultTitleWrapper}
                      onClick={handleClickResultTitle}
                    >
                      <ArrowIcon left main customClassname={styles.arrowBack} />
                      <h3 className={styles.resultTitle}>{item.title}</h3>
                      <Image
                        src={item.svg || ""}
                        alt="Иконка пункта"
                        width={22}
                        height={22}
                      />
                    </div>
                  )}

                  <SimpleBar className={styles.simpleBar}>
                    <ul className={listItemClass}>
                      {item.content &&
                        item.content.map(content => {
                          const { id, title, route } = content;
                          return (
                            <li key={id} className={styles.listItem}>
                              <Link className={styles.resultLink} href={route}>
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
