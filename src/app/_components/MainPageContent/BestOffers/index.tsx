"use client";
import ProductCardCarouselSecondary from "@/_components/ProductCardCarousel/ProductCardCarouselSecondary";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/_components/ui/tabs";
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const mockTabsContent = [
  {
    title: "Все предложения",
    tabsContent: "Карточки товара 1й набор",
  },
  {
    title: "Лодки ПВХ",
    tabsContent: "Карточки товара 2й набор",
  },
  {
    title: "Техника с пробегом",
    tabsContent: "Карточки товара 3й набор",
  },
  {
    title: "SUP Доски",
    tabsContent: "Карточки товара 4й набор",
  },
  {
    title: "Лодочные моторы",
    tabsContent: "Карточки товара 5й набор",
  },
  {
    title: "Мотобуксировщики",
    tabsContent: "Карточки товара 6й набор",
  },
];
const BestOffers = () => {
  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-3xl text-center md:text-start md:text-mm-title-two mb-9">
          Лучшие предложения <span className="text-mm-main">MotMotor</span>
        </h2>
        <Tabs
          defaultValue={mockTabsContent[0].title}
          className="md:mb-9 xl:mb-14"
        >
          <div className="overflow-auto">
            <TabsList className="gap-5 pb-5 md:gap-12 whitespace-nowrap w-full justify-start bg-transparent mb-9 border-b border-[#ccc]">
              {mockTabsContent.map(tab => {
                return (
                  <TabsTrigger
                    className="pb-4 px-0 md:pb-6 text-xl font-medium data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-mm-main shadow-none"
                    key={tab.title}
                    value={tab.title}
                  >
                    {tab.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {mockTabsContent.map(tab => {
            return (
              <TabsContent key={tab.tabsContent} value={tab.title}>
                {tab.tabsContent}
              </TabsContent>
            );
          })}
        </Tabs>
        <ProductCardCarouselSecondary cardsContent={productCardsData} />
      </div>
    </section>
  );
};

export default BestOffers;
