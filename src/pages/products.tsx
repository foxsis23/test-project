
import ProductsList from '@/components/productsList';
import Typography from '@mui/material/Typography';
import { usePagination } from '@/hooks/usePagination';
import React, { useEffect, useState } from 'react';
import ProductPagination from '@/components/productPagination';
import Search from '@/components/search';
import { useProducts } from '@/hooks/useProducts';
import { useSearchedProducts } from '@/hooks/useSearchedProducts';
import { Product } from '@/types/product';

const Products:React.FC = ()=>{
    
    const [limit,setLimit] = useState(10)
    const [skip,setSkip] = useState(0)

    const [allProducts,setAllProducts] = useState<Product[]>([])
    const [products] = useProducts(limit,skip,setAllProducts)

    const [searchTerm,setSearchTerm] = useState<string>('')

    const [getSearchedProducts] = useSearchedProducts(allProducts,searchTerm)

    const [totalPages] = usePagination(100,limit)



    return (
        <>
            <Typography variant="h3" sx={{textAlign:'center'}}>Products</Typography>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
            <ProductsList products={searchTerm ? getSearchedProducts : products} />
            <ProductPagination totalPages={totalPages} setSkip={setSkip} setSearchTerm={setSearchTerm} />
        </>
    );
}

export default Products;