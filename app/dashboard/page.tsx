"use client"
import { productsAPI } from "@/service/api/apis/productAPI"
import { useQuery } from "@tanstack/react-query"

const Dashboard = () => {

    const getProductDetails = useQuery({
        queryKey: ['products'],
        queryFn: () => productsAPI.getProduct()
    })
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard