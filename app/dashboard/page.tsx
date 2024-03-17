
import { productsAPI } from "@/service/api/apis/productAPI";
import { QueryClient } from "@tanstack/react-query";

const Dashboard = async () => {
    const queryClient = new QueryClient()

    const getProductDetails = await queryClient.fetchQuery({
        queryKey: ['products'],
        queryFn: () => productsAPI.getProduct()
    })

    console.log(getProductDetails.formData);

    return (
        <div></div>
    )
}

export default Dashboard