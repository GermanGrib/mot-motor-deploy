"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";

import styles from "./footer.module.scss";
import EmailSvg from "@/_assets/images/general/email.svg";
import SentSvg from "@/_assets/images/general/sent.svg";
import CatalogPng from "@/_assets/images/pngs/catalog.png";
import ConsultantPng from "@/_assets/images/pngs/consultant.png";
import PaymentOptionsPng from "@/_assets/images/pngs/paymentOptions.png";
import PodvesnoyMotorPng from "@/_assets/images/pngs/plm.png";
import Arrow from "@/_components/Icons/Arrow";
import Logo from "@/_components/Logo";
import citiesData from "@/_data/cities/cities.json";
import footerNavData from "@/_data/navigation/footerNav.json";
import {
  toggleCallbackWindow,
  toggleModalOverlay,
} from "@/_store/slices/ModalWindows";
import FormatPhoneNumber from "@/_utils/formatPhoneNumber";
import RoutesPaths from "@/types/enums/routes";

const Footer = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [messageHided, setIsHideMessage] = useState(true);
  const messageHidingDuration = 3000;
  const isProcessing = useRef(false);

  const handleButtonClick = (btnNumber: number) => {
    if (activeButton === btnNumber) {
      setActiveButton(null);
      return;
    }
    setActiveButton(btnNumber);
  };
  const handleSubmitForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (isProcessing.current) return;
    isProcessing.current = true;

    try {
      //Todo: Add real fetch response, open comments
      const response = true;

      // if (!response.ok) {
      //   throw new Error("Subscription response was not ok");
      // }
      // const result = await response.json();
      console.log("Success", response);
      setIsHideMessage(false);

      setTimeout(() => {
        setIsHideMessage(true);
        isProcessing.current = false;
      }, messageHidingDuration);
    } catch (error) {
      console.log(error, "Error during Subscription request");
      setIsHideMessage(true);
      isProcessing.current = false;
    }
  };

  const handleCallbackBtn = () => {
    dispatch(toggleModalOverlay());
    dispatch(toggleCallbackWindow());
  };
  return (
    <footer className="bg-mm-milk">
      <div className="container">
        <div className="flex gap-5 flex-col sm:flex-row pt-11 pb-5 md:py-11 flex-wrap lg:flex-nowrap justify-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:gap-8">
            <Link href={RoutesPaths.home}>
              <Logo />
            </Link>
            <div>
              <h4 className="mb-2 font-bold text-sm leading-4">
                Фактический адрес
              </h4>
              <div className="mb-1 text-sm font-medium leading-4">
                {citiesData[0].address}
              </div>
            </div>
            <div className="mb-auto">
              <h4 className="font-bold text-sm leading-4">Время работы</h4>
              <div className="font-medium text-sm leading-4">
                {citiesData[0].weekdayHours}
              </div>
              <div className="font-medium text-sm leading-4">
                {citiesData[0].weekendHours}
              </div>
            </div>
            <Image
              src={PaymentOptionsPng}
              alt="Способы оплаты"
              width={324}
              height={38}
            />
          </div>
          <div>
            <h3 className="mb-4 sm:mb-5 text-mm-main font-bold select-none leading-6">
              О компании
            </h3>
            <nav>
              <ul className="flex gap-3 flex-col">
                {footerNavData.map(item => {
                  return (
                    <li key={item.id} className="box-border h-fit">
                      <Link
                        className="flex text-sm font-medium whitespace-nowrap select-none transition-colors duration-200 hover:text-mm-main-hover"
                        href={item.route}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-5 sm:gap-10">
            <div className="flex gap-5 justify-between">
              <Image
                className="h-[105px]"
                src={ConsultantPng}
                alt="Консультант"
                width={88}
                height={105}
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <h3 className="text-base font-bold">Остались вопросы?</h3>
                  <button
                    className="outline-none border-none bg-transparent text-mm-main text-base text-start font-bold cursor-pointer hover:text-mm-main-hover transition-colors duration-200"
                    onClick={handleCallbackBtn}
                  >
                    Проконсультируем бесплатно!
                  </button>
                </div>
                <div className="flex flex-col">
                  <h4 className=" font-medium text-sm">Телефон магазин</h4>
                  <a
                    className="font-bold text-base text-mm-main hover:text-mm-main-hover transition-colors duration-200"
                    href={`tel:${citiesData[0].phoneNumber}`}
                  >
                    {FormatPhoneNumber(citiesData[0].phoneNumber)}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold mb-3 leading-5">
                Будьте вкурсе последних скидок и новинок !
              </h3>
              <form className="flex relative" action="">
                <input
                  className="flex py-4 pl-11 pr-14 w-full text-base border border-solid border-[#dedede] rounded-lg"
                  placeholder="Ваш E-mail"
                  type="text"
                />
                <Image
                  className="absolute left-5 top-1/2 transform -translate-y-1/2"
                  src={EmailSvg}
                  alt="Иконка Email"
                  width={18}
                  height={14}
                />
                <button
                  className="flex absolute w-16 h-full justify-center items-center border-none right-0 bg-mm-main rounded-lg cursor-pointer"
                  type="submit"
                  onClick={e => handleSubmitForm(e)}
                >
                  <Image src={SentSvg} alt="Sent" width={18} height={16} />
                </button>
              </form>
              {!messageHided && <div>Спасибо за подписку!</div>}
            </div>
          </div>
        </div>
        <div className="relative mb-5 sm:mb-8">
          <div className="flex flex-col sm:flex-row gap-3 ">
            <button
              className={`flex py-2.5 pr-3 pl-8 w-full items-center font-bold text-mm-main bg-white outline-none border border-[#E9E9E9] border-b-2 border-b-[#E9E9E9] rounded-lg cursor-pointer ${activeButton === 1 && "border-b-mm-main"}`}
              onClick={() => handleButtonClick(1)}
            >
              <Image
                className="mr-4"
                src={CatalogPng}
                alt="Каталог"
                width={82}
                height={46}
              />
              <span className="inline-block mr-auto text-base font-bold">
                Каталог
              </span>
              <Arrow tertiary flip={activeButton === 1} />
            </button>
            <button
              className={`flex py-2.5 pr-3 pl-8 w-full items-center font-bold text-mm-main bg-white outline-none border border-[#E9E9E9] border-b-2 border-b-[#E9E9E9] rounded-lg cursor-pointer ${activeButton === 2 && "border-b-mm-main"}`}
              onClick={() => handleButtonClick(2)}
            >
              <Image
                className={styles.seoBtnPic}
                src={PodvesnoyMotorPng}
                alt="Популярные бренды"
                width={48}
                height={48}
              />
              <span className="inline-block mr-auto text-base font-bold">
                Популярные бренды
              </span>{" "}
              <Arrow tertiary flip={activeButton === 2} />
            </button>
          </div>
          <div
            className={classNames(
              "absolute p-5 min-h-[300px] sm:min-h-0 bg-white w-full -translate-x-[10000px] rounded-sm",
              styles.seoRequests,
              activeButton !== null && styles.showSeo,
            )}
          >
            <SimpleBar className={styles.simpleBar}>
              <div className="relative min-h-[300px] sm:min-h-[150px]">
                <ul
                  className={`absolute flex flex-col md:gap-2.5 md:grid md:grid-cols-2 w-full h-full justify-center items-start transform -translate-x-[10000px] ${activeButton === 1 && "translate-x-0"}`}
                >
                  <li className="w-full">
                    <Link
                      className="flex justify-center transition-colors duration-200 hover:text-mm-main-hover text-base"
                      href="#"
                    >
                      Result 1
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      className="flex justify-center transition-colors duration-200 hover:text-mm-main-hover text-base"
                      href="#"
                    >
                      Result 2
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      className="flex justify-center transition-colors duration-200 hover:text-mm-main-hover text-base"
                      href="#"
                    >
                      Result 3
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      className="flex justify-center transition-colors duration-200 hover:text-mm-main-hover text-base"
                      href="#"
                    >
                      Result 5
                    </Link>
                  </li>
                </ul>
                <ul
                  className={`absolute flex flex-col md:gap-2.5 md:grid md:grid-cols-2 w-full h-full justify-center items-start transform -translate-x-[10000px] ${activeButton === 2 && "translate-x-0"}`}
                >
                  <li className="w-full">
                    <Link
                      className="flex justify-center transition-colors duration-200 hover:text-mm-main-hover text-base"
                      href="#"
                    >
                      Result 2
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      className="flex justify-center transition-colors duration-200 hover:text-mm-main-hover text-base"
                      href="#"
                    >
                      Result 4
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      className="flex justify-center transition-colors duration-200 hover:text-mm-main-hover text-base"
                      href="#"
                    >
                      Result 6
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      className="flex justify-center transition-colors duration-200 hover:text-mm-main-hover text-base"
                      href="#"
                    >
                      Result 8
                    </Link>
                  </li>
                </ul>
              </div>
            </SimpleBar>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1]">
        <div className="container">
          <div className="py-4 sm:py-8 text-xs sm:text-sm font-semibold sm:font-bold leading-4">
            © Mot Motor – интернет-магазин в Москве: купить лодочный мотор,
            лодку ПВХ, лодку РИБ-ПВХ, SUP-доску, квадроцикл, мотобуксировщик,
            снегоход, снегоуборщик
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
