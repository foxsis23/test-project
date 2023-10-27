import { fetchProducts } from '@/API/fetchProducts';
import ProductsList from '@/components/productsList';
import { Product } from '@/types/product';
import Typography from '@mui/material/Typography';
import { usePagination } from '@/hooks/usePagination';
import React, { useEffect, useMemo, useState } from 'react';
import ProductPagination from '@/components/productPagination';
import Search from '@/components/search';
import { useSearch } from '@/hooks/useSearch';

const Products:React.FC = ()=>{
    const [products,setProducts] = useState<Product[]>([])
    const [limit,setLimit] = useState(10)
    const [skip,setSkip] = useState(0)

    const [searchTerm,setSearchTerm] = useState<string>('')

    const getSearchedProducts = useMemo<Product[]>(():Product[] =>{
        return useSearch(products, searchTerm);
    },[searchTerm])

    const [totalPages] = usePagination(100,limit)

    useEffect(()=>{
        fetchProducts(limit,skip,setProducts)
    },[limit,skip])

    return (
        <div>
            <Typography variant="h3" sx={{textAlign:'center'}}>Products</Typography>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
            <ProductsList products={searchTerm ? getSearchedProducts : products} />
            <ProductPagination totalPages={totalPages} setSkip={setSkip} />
        </div>
    );
}

export default Products;