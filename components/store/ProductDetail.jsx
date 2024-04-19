import Image from "next/image";
import Quantity from "@/components/store/Quantity";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";

export default async function ProductDetail({ slug }) {
  const item = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/detail/${slug}`
  ).then((r) => r.json());
  console.log(item);

  return (
    <article className=" m-auto">
      <section className="flex flex-col md:flex-row gap-6">
        <div className="relative basis-1/2">
          <Carousel className=" mx-6 ">
            <CarouselContent>
              {item.images.map((image) => (
                <CarouselItem key={image}>
                  <Image
                    src={`${image}`}
                    alt={item.title}
                    width={860}
                    height={860}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="basis-1/2">
          <h2 className="text-2xl font-semibold border-b  border-orange-600 pb-4 mb-4">
            {item.title}
          </h2>
          <p className="text-4xl">$ {item.price}</p>
          <Quantity />
        </div>
      </section>
      <section className="mt-12">
        <h3 className="text-xl font-semibold border-b  border-orange-600 pb-4 my-4">
          Descripción
        </h3>
        <p className="text-gray-600">{item.description}</p>
      </section>
    </article>
  );
}
