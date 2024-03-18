import { productsAPI } from "@/service/api/apis/productAPI";
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import Products from "./Products";

// async function getProductsDetails() {
//     const calling = productsAPI.getProduct()
//     return (await calling).json()
// }

const Dashboard = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["products"],
        queryFn: () => productsAPI.getProduct(),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Products />
        </HydrationBoundary>
    );
};

export default Dashboard;
