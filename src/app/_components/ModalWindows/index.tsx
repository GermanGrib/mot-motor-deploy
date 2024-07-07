import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./modalWindows.module.scss";
import {
  toggleCallbackWindow,
  toggleModalOverlay,
} from "../../_store/slices/ModalWindows";
import InputField from "@/_components/InputField";
import ModalOverlay from "@/_components/ModalOverlay";
import ModalPortal from "@/_components/ModalPortal";
import ModalWindowsProps from "@/_components/ModalWindows/ModalWindows.interface";
import { Button } from "@/_components/ui/button";

const ModalWindows = ({ callback }: ModalWindowsProps) => {
  const dynamicClassname = { [styles.callback]: callback };
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
        <div className={classNames(styles.root, dynamicClassname)}>
          <div className={classNames(styles.modal, dynamicClassname)}>
            <div className={classNames(styles.titleWrapper, dynamicClassname)}>
              <h2 className={classNames(styles.title, dynamicClassname)}>
                {callback && "Заказать звонок"}
              </h2>
              <p className={classNames(styles.subtitle, dynamicClassname)}>
                {callback &&
                  "Наш оператор свяжется с Вами в течение нескольких минут"}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className={classNames(styles.form, dynamicClassname)}
            >
              {callback && (
                <>
                  <div
                    className={classNames(
                      styles.callbackInputsWrapper,
                      dynamicClassname,
                    )}
                  >
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
                  <div
                    className={classNames(
                      styles.checkboxCallbackWrapper,
                      dynamicClassname,
                    )}
                  >
                    <InputField
                      type="checkbox"
                      checked={consent}
                      onCheckboxChange={e => setConsent(e.target.checked)}
                      consentText={
                        <span className={styles.callbackConsentText}>
                          Даю свое согласие на обработку персональных данных,
                          соглашаюсь с{" "}
                          <Link
                            className={styles.callbackConsentLink}
                            href={"#"}
                          >
                            политикой конфиденциальности
                          </Link>{" "}
                          и принимаю{" "}
                          <Link
                            className={styles.callbackConsentLink}
                            href={"#"}
                          >
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
