import CityPicker from "@/components/city-picker";

const GreetingsInfo = () => {
  return (
    <div className="hidden bg-mm-milk py-2 md:block">
      <div className="container flex gap-5 items-center">
        <CityPicker />
        <div className="text-xs font-semibold leading-3 opacity-30">
          Лодочные моторы, лодки ПВХ, лодки РИБ-ПВХ под мотор, SUP доски,
          квадроциклы, мотобуксировщики, снегоходы, снегоуборщики, сноуборды
          (snowboard)
        </div>
      </div>
    </div>
  );
};

export default GreetingsInfo;
