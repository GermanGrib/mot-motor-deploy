import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./productCard.module.scss";
import hangkaiPng from "@/_assets/images/pngs/hangkai.png";
import { Button } from "@/_components/ui/button";

const ProductCard = ({
  id,
  images,
  title,
  currentPrice,
  oldPrice,
  main,
}: ProductCardProps) => {
  const bankCreditMonths = 12;
  const savingAmount = Math.ceil(oldPrice - currentPrice);
  const partlyPaymentAmount = Math.ceil(currentPrice / bankCreditMonths);

  const slides = images.map((img, index) => {
    return (
      <SwiperSlide key={String(id) + String(index)}>
        <div className="flex justify-center">
          <Image
            className="w-36 h-36 md:w-52 md:h-52 select-none"
            src={hangkaiPng}
            alt="Изображение товара"
            width={211}
            height={211}
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="px-4 pt-3.5 pb-6 h-full w-[282px] border border-white border-solid hover:border-[#ccc] rounded-2xl">
      <div>
        <Swiper
          className="mb-3"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
        >
          {slides}
        </Swiper>
        <h4 className={classNames(styles.title, "mb-5 text-sm")}>{title}</h4>
        <div className="flex flex-col gap-1 mb-8">
          <div className="text-sm line-through opacity-30">{oldPrice} руб.</div>
          <div className="text-xl text-mm-main">{currentPrice} руб.</div>
          <div className="flex gap-1.5 text-sm font-medium">
            <Image
              src="/discount.svg"
              alt="Иконка процента"
              width={16}
              height={16}
            />
            <div>Экономия {savingAmount} руб.</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5 ">
          <Button variant="secondary">Купить в 1 клик</Button>
          <Button>Купить</Button>
        </div>
        <Link
          href="#"
          className="flex flex-col p-2.5 gap-1 justify-center items-center bg-mm-cement rounded-2xl select-none hover:opacity-70"
        >
          <span className="text-sm font-medium opacity-30">
            Или оплачивай частями
          </span>
          <div className="text-base font-bold text-mm-main">
            от {partlyPaymentAmount} / мес.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
