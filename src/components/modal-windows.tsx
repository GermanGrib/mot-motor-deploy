import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import InputField from "@/components/input-field";
import ModalOverlay from "@/components/modal-overlay";
import ModalPortal from "@/components/modal-portal";
import { Button } from "@/components/ui/button";
import {
  toggleCallbackWindow,
  toggleModalOverlay,
} from "@/store/slices/modal-windows";

interface ModalWindowsProps {
  callback?: boolean;
}

const ModalWindows = ({ callback }: ModalWindowsProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Отправка формы:", { name, phone, consent });
    dispatch(toggleModalOverlay());
    dispatch(toggleCallbackWindow());
  };

  return (
    <ModalPortal>
      <ModalOverlay>
        <div className="py-8 px-4 md:py-12 md:px-14 rounded-lg bg-white">
          <div className="flex flex-col">
            <div className="flex mb-6 flex-col justify-center items-center">
              <h2
                className={`text-xl md:text-2xl font-semibold select-none${callback ? "mb-2.5" : "mb-0"}`}
              >
                {callback && "Заказать звонок"}
              </h2>
              <p className="m-0 max-w-[336px] text-sm md:text-base text-center opacity-60 select-none">
                {callback &&
                  "Наш оператор свяжется с Вами в течение нескольких минут"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col">
              {callback && (
                <>
                  <div className="flex mb-10 flex-col gap-5">
                    <InputField
                      title="Ваше имя"
                      type="text"
                      placeholder="Введите ваше имя"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      main
                    />
                    <InputField
                      title="Телефон"
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      main
                    />
                  </div>
                  <div className="mb-6 md:mb-8">
                    <InputField
                      type="checkbox"
                      checked={consent}
                      onCheckboxChange={e => setConsent(e.target.checked)}
                      consentText={
                        <span className="text-sm select-none">
                          Даю свое согласие на обработку персональных данных,
                          соглашаюсь с{" "}
                          <Link className="underline" href={"#"}>
                            политикой конфиденциальности
                          </Link>{" "}
                          и принимаю{" "}
                          <Link className="underline" href={"#"}>
                            условия оферты
                          </Link>
                        </span>
                      }
                    />
                  </div>
                </>
              )}
              <Button type="submit">Отправить</Button>
            </form>
          </div>
        </div>
      </ModalOverlay>
    </ModalPortal>
  );
};

export default ModalWindows;
