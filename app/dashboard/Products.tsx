'use client'

import { productsAPI } from "@/service/api/apis/productAPI"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
async function getProductsDetails() {
    const calling = productsAPI.getProduct()
    return (await calling).json()
}

const Products = () => {
    const { data } = useQuery<API.GetProductDetails>({ queryKey: ['products'], queryFn: () => productsAPI.getProduct() })

    return (
        <div className="ml-5 mt-5">
            <h2>Product Name: <span className="font-semibold">{data?.title}</span></h2>
            <p>Price: ${data?.price}</p>
            <p>Rating: {data?.rating}</p>
            <div className="flex gap-5">
                {
                    data?.images?.map((image, index) => (
                        <Image src={image} key={index} alt="product-picture" height={300} width={300} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products