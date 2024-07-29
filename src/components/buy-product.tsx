import Image from "next/image";
import Link from "next/link";

import MainCharacteristicsList from "./main-characteristics-list";
import { Button } from "./ui/button";
import WhiteBasketSvg from "../assets/images/general/basketWhite.svg";
import GreenCheckMarkSvg from "../assets/images/general/greenCheckMark.svg";
import PhoneSvg from "../assets/images/general/phone.svg";
import VideoCallSvg from "../assets/images/general/videoCall.svg";
import communicationDetails from "../data/communication/communication.json";
import formatNumberWithSpaces from "../utils/format-numbers-with-spaces";
import FormatPhoneNumber from "../utils/format-phone-number";

interface BuyProductProps {
  characteristics: string[][];
}

const BuyProduct = ({ characteristics }: BuyProductProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex gap-1.5 mb-3">
          <Image
            className="w-auto h-auto"
            src={GreenCheckMarkSvg}
            alt="Зеленая галочка"
            width={13}
            height={11}
          />
          <span className="text-xs font-medium">В наличии</span>
        </div>
        <h3 className="text-xl font-bold">(МОК НЕЙМ ТОВАРА)</h3>
      </div>
      <div className="flex flex-col gap-3.5">
        <div className="flex gap-6">
          <span className="text-sm font-medium opacity-30 line-through">
            (Мок руб.)
          </span>
          <div className="flex gap-1.5">
            <Image
              src="/discount.svg"
              alt="Иконка скидки"
              width={16}
              height={16}
            />
            <span className="text-sm font-medium">Экономия в мок руб.</span>
          </div>
        </div>
        <div className="text-3xl font-bold text-mm-main">
          (МОК {formatNumberWithSpaces("100000")}руб.)
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:mb-2.5">
        <Button className="md:w-full text-base" variant="secondary">
          Купить в 1 клик
        </Button>
        <Button className="md:w-full gap-2 text-base">
          <Image
            className="text-white w-auto h-auto"
            src={WhiteBasketSvg}
            alt="иконка корзины"
            width={22}
            height={22}
          />
          Купить
        </Button>
      </div>
      <Link
        href="/"
        className="group flex justify-between p-3.5 pl-6 bg-mm-cement rounded-lg md:mb-3.5"
      >
        <div className="flex flex-col">
          <span className="text-sm font-medium">Оплачивай частями</span>
          <span className="text-base text-mm-main font-bold">
            От (МОК {formatNumberWithSpaces("10000")}) / мес.
          </span>
        </div>
        <div className="flex justify-center items-center py-3.5 px-8 bg-white rounded-lg text-sm text-mm-main font-bold group-hover:text-white group-hover:bg-mm-main-hover group-active:text-white group-active:bg-mm-main-active">
          Рассрочка
        </div>
      </Link>
      <div className="flex flex-col md:flex-row gap-3.5 md:gap-16">
        <a
          href={`tel:${communicationDetails.mainNumber}`}
          className="group flex gap-3"
        >
          <div className="flex justify-center items-center w-10 h-10 p-2.5 border rounded-xl border-gray-300">
            <Image
              src={PhoneSvg}
              alt="иконка телефона"
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium whitespace-nowrap">
              Телефон магазина
            </span>
            <span className="text-base text-mm-main font-bold group-hover:opacity-50 whitespace-nowrap">
              {FormatPhoneNumber(communicationDetails.mainNumber)}
            </span>
          </div>
        </a>
        <a href="#" className="group flex gap-3">
          <div className="flex justify-center items-center w-10 h-10 p-2.5 border rounded-xl border-gray-300">
            <Image
              src={VideoCallSvg}
              alt="иконка телефона"
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium whitespace-nowrap">
              Совершенно бесплатная
            </span>
            <span className="text-base text-mm-main font-bold group-hover:opacity-50">
              Видеоконсультация
            </span>
          </div>
        </a>
      </div>
      <MainCharacteristicsList hideDesktop characteristics={characteristics} />
    </div>
  );
};

export default BuyProduct;
