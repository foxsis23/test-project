import axios from "axios"
import { Product, getProducts } from "../types/product"

export const fetchProducts = async(limit=10,skip=0,setProducts:React.Dispatch<React.SetStateAction<Product[]>>) =>{
    try {
        const res = await axios.get<getProducts>('https://dummyjson.com/products',{
            params:{
                limit:limit,
                skip:skip
            }
        })
        setProducts(res.data.products)
    } catch (error) {
        console.log(error)
    }
    
}

export const fetchAllProducts = async(setAllProducts:React.Dispatch<React.SetStateAction<Product[]>>) =>{
    try {
        const res = await axios.get<getProducts>('https://dummyjson.com/products',{
            params:{
                limit:0
            }
        })

        setAllProducts(res.data.products)
    } catch (error) {
        console.log(error)
    }
}

export const fetchProductById = async(id:string | string[],setProduct:React.Dispatch<React.SetStateAction<Product>>) =>{
    try {
        const res = await axios.get<Product>('https://dummyjson.com/products/' + id)
        setProduct(res.data)
    } catch (error) {
        console.log(error)
    }
    
}