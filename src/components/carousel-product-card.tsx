import ProductCard from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCardContent from "@/types/intefaces/product-card.interface";

interface ProductCardCarouselProps {
  cardsContent: ProductCardContent[];
}

const ProductCardCarousel = ({ cardsContent }: ProductCardCarouselProps) => {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
          "(min-width: 640px)": { slidesToScroll: 3 },
          "(min-width: 1024px)": { slidesToScroll: 4 },
        },
      }}
    >
      <CarouselContent>
        {cardsContent.map(card => {
          return (
            <CarouselItem key={card.id} className="sm:basis-1/3 lg:basis-1/4">
              <ProductCard cardData={card} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious variant="default" className="hidden lg:flex p-0" />
      <CarouselNext variant="default" className="hidden lg:flex p-0" />
    </Carousel>
  );
};

export default ProductCardCarousel;
