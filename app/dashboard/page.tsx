"use client";
import { getServerSideProps } from "@/service/getServerSideProps";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
    // const data = getServerSideProps()

    const getProductDetails = useQuery({
        queryKey: ["products"],
        queryFn: async () => await getServerSideProps(),
    });
    console.log(getProductDetails);
    return <div></div>;
};

export default Dashboard;
