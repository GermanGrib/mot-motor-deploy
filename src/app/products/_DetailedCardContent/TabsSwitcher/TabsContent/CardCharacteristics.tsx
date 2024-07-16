import characteristicsList from "@/_data/mockProductCardsData/characteristicsList.json";

const CardCharacteristics = () => {
  return (
    <section>
      <div className="container">
        <h3 className="mb-5 md:mb-14 text-xl font-bold">
          Характеристики{" "}
          <span className="font-normal">Лодка ПВХ Altair HD 320 НДНД</span>
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-11 lg:gap-x-20 gap-y-2 md:gap-y-3.5">
          {characteristicsList.map(item => {
            return (
              <li
                key={item.id}
                className="flex justify-between items-center text-sm"
              >
                <div className="opacity-50 font-medium">{item.key}</div>
                <div className="grow border-b border-dotted border-black my-0 mx-2.5 h-0 align-middle"></div>
                <div className="font-bold w-20 truncate">{item.value}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CardCharacteristics;
