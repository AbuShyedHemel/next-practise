"use client"
import { productsAPI } from "@/service/api/apis/productAPI"
import { useQuery } from "@tanstack/react-query"

const Dashboard = () => {
    const getProductDetails = useQuery({
        queryKey: ['product'],
        queryFn: () => productsAPI.getProduct(),
    })
    console.log(getProductDetails.data);

    return (
        <>

        </>
    )
}

export default Dashboard