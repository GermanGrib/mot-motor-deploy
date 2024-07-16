"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";

import phoneSvg from "@/_assets/images/general/phone.svg";
import { Button } from "@/_components/ui/button";
import {
  toggleCallbackWindow,
  toggleModalOverlay,
} from "@/_store/slices/ModalWindows";
import FormatPhoneNumber from "@/_utils/formatPhoneNumber";

const VideoConsultation = () => {
  const dispatch = useDispatch();
  const handleCallBackBtnClick = () => {
    dispatch(toggleModalOverlay());
    dispatch(toggleCallbackWindow());
  };
  return (
    <section>
      <div className="container pt-9">
        <div className="flex flex-col py-6 md:py-14 px-5 md:px-24 gap-8 relative bg-mm-cement rounded-xl">
          <div>
            <div className="font-bold text-2xl">Остались вопросы?</div>
            <div className="font-bold text-2xl text-mm-main mb-6 lg:mb-4">
              Проконсультируем бесплатно!
            </div>
            <p className="m-0 font-medium text-sm w-1/2">
              Поможем с выбором модели оптимальной под ваши запросы.
            </p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-start items-start lg:items-center gap-3.5">
            <Button
              className="relative w-full sm:w-fit"
              onClick={handleCallBackBtnClick}
            >
              Заказать видеоконсультацию
              <Image
                className="absolute right-0 bottom-full sm:hidden w-auto h-auto"
                src="/consultant.png"
                alt="Консультант"
                width={126}
                height={177}
              />
            </Button>
            <a className="flex gap-3" href="tel:">
              <div className="flex justify-center items-center w-10 h-10 border border-[#333C4926] rounded-xl">
                <Image src={phoneSvg} alt="phone icon" width={22} height={22} />
              </div>
              <div>
                <p className="text-sm font-medium">Телефон магазина</p>
                <div className="font-bold text-base text-mm-main">
                  {FormatPhoneNumber("8 800 511 71 94")}
                </div>
              </div>
            </a>
          </div>
          <Image
            className="absolute right-1 lg:right-28 bottom-0 hidden sm:block w-auto h-auto"
            src="/consultant.png"
            alt="Консультант"
            width={265}
            height={370}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoConsultation;
