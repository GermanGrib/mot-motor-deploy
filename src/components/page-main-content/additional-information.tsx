import Link from "next/link";

import RoutesPaths from "../../types/enums/routes";

const AdditionalInformation = () => {
  return (
    <section className="mb-12">
      <div className="container flex justify-start md:justify-center">
        <div className="flex flex-col gap-2.5 lg:gap-3.5 max-w-[546px] md:max-w-[690px] lg:max-w-[895px] xl:max-w-full">
          <div>
            <h1 className="mb-3.5 md:mb-5 text-2xl md:text-4xl font-medium ">
              Интернет-мотомагазин-мотосалон в Москве Mot-motor
            </h1>
            <p className="text-xs md:text-sm m-0 leading-5">
              Интернет-мотосалон-мотомагазин в Москве «Mot-Motor» - это большой
              выбор качественной мототехники, товаров для любителей отдыха на
              воде, профессиональных рыбаков, людей предпочитающие летние и
              зимние поездки. В нашем каталоге интернет магазина представлены
              как лёгкие модели на 1-2 человека, так и солидные виды
              мототехники, рассчитанные на семейное использование или большую
              дружную компанию.
            </p>
          </div>
          <div>
            <h2 className="mb-2.5 md:mb-3.5 font-medium text-xl md:text-3xl">
              Скидки на мототехнику в мотомагазине в Москве
            </h2>
            <p className="text-xs md:text-sm m-0 leading-5">
              У нас вы всегда можете найти мототехнику в Москве со скидками по
              акции, так как поставщики предоставляют нашему интернет-магазину
              выгодные условия за счет больших объемов оптовых покупок.
            </p>
          </div>
          <div>
            <h2 className="mb-2.5 md:mb-3.5 font-medium text-xl md:text-3xl">
              Кредит, рассрочка на мототехнику в мотосалоне в Москве
            </h2>
            <p className="text-xs md:text-sm m-0 leading-5">
              Ознакомьтесь с условиями продажи мототехники в Москве в{" "}
              <Link className="text-mm-main" href={RoutesPaths.credit}>
                КРЕДИТ
              </Link>{" "}
              и{" "}
              <Link className="text-mm-main" href={RoutesPaths.loan}>
                РАССРОЧКУ
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className="mb-2.5 md:mb-3.5 font-medium text-xl md:text-3xl">
              Ремонт мототехники в Москве
            </h2>
            <p className="text-xs md:text-sm m-0 leading-5">
              Квалифицированный ремонт и обслуживание мототехники в нашей
              компании — гарантированно высокий уровень сервиса и качества
              работ. Запчасти и аксессуары Вы можете приобрести в нашем
              авторизованном сервисном центре. Мототехника приобретенная в нашем
              мотосалоне обслуживается с 20% скидкой.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInformation;
