import Products from "./Products";

const Dashboard = async () => {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["products"],
  //   queryFn: () => productsAPI.getProduct(),
  // });

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <Products />
    // </HydrationBoundary>
  );
};

export default Dashboard;
