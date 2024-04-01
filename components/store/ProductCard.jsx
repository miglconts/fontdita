import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";

const ProductCard = ({ item }) => {
  return (
    <Card className="basis-72 flex border ">
      <Link
        href={`/store/detail/${item.id}`}
        className="flex flex-col"
        key={item.id}
      >
        <div className="relative overflow-hidden bg-cover bg-no-repeat h-72 rounded-md ">
          <Image
            alt={item.title}
            src={`${item.images[0]}`}
            width={500}
            height={500}
            sizes="100vw"
            className="scale-down"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <CardHeader className="grow">
          <CardTitle> {item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{item.category.name}</p>
        </CardContent>
        <CardFooter>
          <p className="text-2xl font-semibold mb-6">$ {item.price}</p>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
