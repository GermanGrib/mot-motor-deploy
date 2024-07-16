import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/_components/ui/tabs";
import CardCharacteristics from "@/products/_DetailedCardContent/TabsSwitcher/TabsContent/CardCharacteristics";
import DetailedCardReviews from "@/products/_DetailedCardContent/TabsSwitcher/TabsContent/DetailedCardReviews";
import ProductDescription from "@/products/_DetailedCardContent/TabsSwitcher/TabsContent/ProductDescription";

const mockTabsList = [
  { id: 1, title: "Описание", content: <ProductDescription /> },
  { id: 2, title: "Все характеристики", content: <CardCharacteristics /> },
  { id: 3, title: "Отзывы", content: <DetailedCardReviews /> },
];

const TabsSwitcher = () => {
  return (
    <section>
      <div className="container">
        <Tabs defaultValue={mockTabsList[0].title} className="md:mb-9 xl:mb-14">
          <div className="overflow-auto">
            <TabsList className="flex h-full gap-5 pb-0 md:gap-12 whitespace-nowrap w-full justify-start bg-transparent border-b border-[#ccc]">
              {mockTabsList.map(tab => {
                return (
                  <TabsTrigger
                    className="pb-4 min-w-fit px-0 md:pb-6 gap-3 text-xl font-medium data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-mm-main shadow-none"
                    key={tab.title}
                    value={tab.title}
                  >
                    {tab.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {mockTabsList.map(tab => {
            return (
              <TabsContent
                key={tab.id}
                value={tab.title}
                className="pt-6 md:pt-8 lg:pt-12 mt-0"
              >
                {tab.content}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default TabsSwitcher;
