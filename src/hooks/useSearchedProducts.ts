import { Product } from "@/types/product";
import { useMemo } from "react";
import { useSearch } from "./useSearch";

export const useSearchedProducts = (products:Product[],searchTerm:string) =>{
    const getSearchedProducts = useMemo<Product[]>(():Product[] =>{
        return useSearch(products, searchTerm);
    },[searchTerm])


    return [getSearchedProducts]
}