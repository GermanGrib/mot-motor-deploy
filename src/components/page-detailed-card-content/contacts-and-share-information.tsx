"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

import contactDetails from "../../data/communication/communication.json";
import shareToOptions from "../../data/communication/share-contacts-options.json";
import { RootState } from "../../store/store";
import RoutesPaths from "../../types/enums/routes";
import FormatPhoneNumber from "../../utils/format-phone-number";

interface ContactsAndShareInformationProps {
  productTitle: string;
  productId: number;
}

const ContactsAndShareInformation = ({
  productTitle,
}: ContactsAndShareInformationProps) => {
  const currentCity = useSelector((state: RootState) => state.userDetails.city);
  const currentUrl = window.location.href;

  return (
    <section>
      <div className="container">
        <h2 className="text-lg md:text-3xl mb-4 font-medium">
          {productTitle} - продажа в {currentCity} -{" "}
          <a
            href={`tel:${contactDetails.mainNumber}`}
            className="font-normal text-mm-main hover:text-mm-main-hover active:text-mm-main-active"
          >
            {FormatPhoneNumber(contactDetails.mainNumber)}
          </a>
        </h2>
        <div className="text-xs md:text-sm font-bold mb-4">
          <p>
            Купить {productTitle} в {currentCity} СО СКЛАДА в интернет-магазине
            Mot-motor. Доступен НАЛОЖЕННЫЙ ПЛАТЕЖ. Продажа в{" "}
            <Link
              href={RoutesPaths.credit}
              className="text-mm-main hover:text-mm-main-hover active:text-mm-main-active"
            >
              кредит
            </Link>{" "}
            и{" "}
            <Link
              href={RoutesPaths.loan}
              className="text-mm-main hover:text-mm-main-hover active:text-mm-main-active"
            >
              рассрочку
            </Link>
            .
          </p>
          <p className="mb-4">
            Звоните по телефону магазина в {currentCity}{" "}
            <a
              href={`tel:${contactDetails.mainNumber}`}
              className="font-normal text-mm-main hover:text-mm-main-hover active:text-mm-main-active"
            >
              {FormatPhoneNumber(contactDetails.mainNumber)}
            </a>
          </p>
          <p>
            Перешлите друзьям ссылку на {productTitle} в {currentCity}
          </p>
        </div>
        <div>
          <ul className="flex gap-1 flex-wrap">
            {shareToOptions.map(option => {
              return (
                <li
                  key={option.id}
                  className="flex justify-center items-center rounded hover:opacity-50 transition-opacity duration-200"
                  style={{ backgroundColor: option.bgColor }}
                >
                  <a
                    href={option.href + currentUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {option.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactsAndShareInformation;
