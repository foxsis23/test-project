import { Product } from "@/types/product";

export const useSearch = (products:Product[],searchTerm:string) =>{
    const searchedProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return searchedProducts
}