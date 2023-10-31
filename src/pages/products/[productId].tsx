import { fetchProductById } from '@/API/fetchProducts';
import ProductItemId from '@/components/productItemId';
import { Product } from '@/types/product';
import { Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';


const ProductItemPage:React.FC = ({}) =>{
    const {query} = useRouter()
    const [product,setProduct] = useState<Product>({"id": 0,
        "title": "",
        "description": "",
        "price": 0,
        "discountPercentage": 0,
        "rating": 0,
        "stock": 0,
        "brand": "",
        "category": "",
        "thumbnail": "",
        "images": [
        ''
    ]})

    const [screenWidth,setScreenWidth] = useState(0)

    useEffect(()=>{
        if(query.productId){
            fetchProductById(query.productId,setProduct)
        }
        setScreenWidth(window.screen.width)
    },[query.productId])
    return (
        <>
            <Grid container flexDirection="row" alignItems={'center'} sx={{m:'20px'}}>
                <Grid item>
                    <Link href="/products" style={{color:'black'}}>
                        <HomeIcon />
                    </Link>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>/</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6' sx={{ml:'5px'}}>{product.category}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6' sx={{ml:'5px'}}>/</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6' sx={{ml:'5px'}}>{product.brand}</Typography>
                </Grid>
            </Grid>
            <Container sx={{display:'flex',m:'20px',flexDirection:{
                xs:'column',
                sm:'column',
                md:'column',
                lg:'row',
                xl:'row'
            }}}>
                <ProductItemId product={product} screenWidth={screenWidth} />
            </Container>
        </>
        
    );
}

export default ProductItemPage;