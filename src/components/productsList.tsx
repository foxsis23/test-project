import { Product } from '@/types/product';
import Grid from '@mui/material/Grid';
import React from 'react';
import ProductItem from './productItem';

interface Props{
    products:Product[]
}

const productsList:React.FC<Props> = ({products}) =>{

    return (
        <Grid container spacing={2} alignItems={'center'} justifyContent={'center'}
        mt="30px"
        >
            {products.length > 0 ? products.map(product =>
                <ProductItem  key={product.id}
                product={product}
                />
            ):(
                <h1>No products!</h1>
            )}
        </Grid>
    );
}

export default productsList;