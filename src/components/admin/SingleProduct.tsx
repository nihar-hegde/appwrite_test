import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const SingleProduct = ({ product }: { product: SingleProductProps }) => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {/* {product.product.imageUrl.map((item) => ( */}
          {/*   <CarouselItem key={item}> */}
          {/*     <Image src={item} alt="Image" width={400} height={400} /> */}
          {/*   </CarouselItem> */}
          {/* ))} */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
