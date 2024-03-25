"use client";

import { getProducts } from "@/actions/produts";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

type ProductsProps = {
  productsData: API.GetProductDetails;
};
const Products = ({ params }: { params: { id: string } }) => {
  const products = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(params.id),
  });

  if (products.isLoading) {
    return <p>Loading...</p>;
  }

  if (products.isSuccess) {
    return (
      <div className="p-10">
        <p>Product Name: {products?.data?.title}</p>
        <p>Price: ${products?.data?.price}</p>
        <p>Rating: {products?.data?.rating}</p>
        <div className="flex gap-5">
          {products?.data?.images?.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt="product-picture"
              height={300}
              width={300}
            />
          ))}
        </div>
      </div>
    );
  }

  return <p>Error</p>;
};

export default Products;
