import { Product } from '@/types/product';
import Grid from '@mui/material/Grid';
import React from 'react';
import ProductItem from './productItem';
import { Typography } from '@mui/material';

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
                <Typography variant='h3'>No products!</Typography>
            )}
        </Grid>
    );
}

export default productsList;