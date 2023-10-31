import { fetchProducts } from '@/API/fetchProducts';
import ProductsList from '@/components/productsList';
import { Product } from '@/types/product';
import Typography from '@mui/material/Typography';
import { usePagination } from '@/hooks/usePagination';
import React, { useEffect, useMemo, useState } from 'react';
import ProductPagination from '@/components/productPagination';
import Search from '@/components/search';
import { useSearch } from '@/hooks/useSearch';
import { useProducts } from '@/hooks/useProducts';
import { useSearchedProducts } from '@/hooks/useSearchedProducts';

const Products:React.FC = ()=>{
    
    const [limit,setLimit] = useState(10)
    const [skip,setSkip] = useState(0)

    const [products] = useProducts(limit,skip)

    const [searchTerm,setSearchTerm] = useState<string>('')

    const [getSearchedProducts] = useSearchedProducts(products,searchTerm)

    const [totalPages] = usePagination(100,limit)

    return (
        <>
            <Typography variant="h3" sx={{textAlign:'center'}}>Products</Typography>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
            <ProductsList products={searchTerm ? getSearchedProducts : products} />
            <ProductPagination totalPages={totalPages} setSkip={setSkip} />
        </>
    );
}

export default Products;