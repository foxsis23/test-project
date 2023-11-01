import { fetchAllProducts, fetchProducts } from "@/API/fetchProducts"
import { Product } from "@/types/product"
import { useEffect, useState } from "react"

export const useProducts = (limit:number,skip:number,
    setAllProducts:React.Dispatch<React.SetStateAction<Product[]>>)
    :[Product[]] =>{
    const [products,setProducts] = useState<Product[]>([])
    
    useEffect(()=>{
        fetchProducts(limit,skip,setProducts)
        fetchAllProducts(setAllProducts)
    },[limit,skip])

    return [products];
}