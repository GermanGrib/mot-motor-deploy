import Image from "next/image";
import React from "react";

import benefitsData from "@/_data/mainPage/benefits.json";
import benefitsLineData from "@/_data/mainPage/benefitsLine.json";

const Benefits = () => {
  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        <br />
      </React.Fragment>
    ));
  };
  return (
    <section>
      <div className="container">
        <h2 className="mb-11 text-3xl text-center select-none leading-10">
          ПОЧЕМУ С НАМИ ВЫГОДНО
        </h2>
        <ul className="grid mb-8 grid-cols-2 gap-4 justify-items-center md:grid-cols-3 lg:grid-cols-5">
          {benefitsData.map(benefit => {
            return (
              <li
                key={benefit.id}
                className="flex flex-col items-center gap-2.5 w-fit select-none"
              >
                <div className="flex w-20 h-20 justify-center items-center rounded-full shadow-benefitsMainPage">
                  <Image
                    className="w-auto h-auto"
                    src={`/benefitsSvg/${benefit.id}.svg`}
                    alt="Иконка преимущества"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="max-w-[155px] inline-block text-sm text-center leading-6">
                  {renderWithLineBreaks(benefit.title)}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="overflow-auto pt-10">
          <ul className="flex lg:border lg:border-[#ddd] rounded-lg">
            {benefitsLineData.map(benefit => {
              return (
                <li
                  key={benefit.id}
                  className="flex min-w-fit lg:flex-1 p-4 gap-2 xl:gap-6 items-center first:border-l-0 border-l border-[#ddd] select-none"
                >
                  <Image
                    className="w-auto h-auto"
                    src={`/benefitsLineSvg/${benefit.id}.svg`}
                    alt="Иконка преимущества"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col whitespace-nowrap items-center text-center text-xs md:text-sm">
                    <h5 className="font-semibold">{benefit.title}</h5>
                    <span>{renderWithLineBreaks(benefit.description)}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
