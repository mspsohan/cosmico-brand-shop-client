import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllProducts = (categoryName = [], search = "") => {
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allProduct', categoryName, search],
      queryFn: async () => {
         const { data } = await axios.get(`/products?categoryName=${categoryName}&search=${search}`)

         return data
      }
   })
   return { data, isLoading, refetch }
};

export default useAllProducts;