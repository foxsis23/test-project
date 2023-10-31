import { fetchProducts } from "@/API/fetchProducts"
import { Product } from "@/types/product"
import { useEffect, useState } from "react"

export const useProducts = (limit:number,skip:number):[Product[]] =>{
    const [products,setProducts] = useState<Product[]>([])
    
    useEffect(()=>{
        fetchProducts(limit,skip,setProducts)
    },[limit,skip])

    return [products];
}