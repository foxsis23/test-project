import { fetchProductById } from '@/API/fetchProducts';
import { Product } from '@/types/product';
import { Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';


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
        <Container sx={{display:'flex',m:'20px',flexDirection:{
            xs:'column',
            sm:'column',
            md:'column',
            lg:'row',
            xl:'row'
        }}}>
            <Grid container sx={{}} wrap='wrap'>
                {product.images.length > 1 && screenWidth > 400 ? product.images.map(image =>
                    <Grid item key={image} sx={{m:'5px'}}>
                        <img src={image} alt="image" height={'150px'} width={'250px'} />
                    </Grid>
                ):(
                    <img src={product.images[0]} alt="image" height={'500px'} style={{marginBottom:'50px'}} />
                )}
            </Grid>
            <Grid container alignItems={'start'} direction={'column'}>
                <Grid item sx={{display:'flex'}} alignItems={'end'}>
                    <Typography variant="h3" sx={{fontWeight:'bold'}}>{product.title}</Typography>
                    <Typography variant='body2' sx={{display:'flex',alignItems:'center'}}>
                       <StarIcon sx={{color:yellow[700]}} /> {product.rating}
                    </Typography>
                </Grid>
                <Grid item sx={{mt:'10px'}}>
                    <Typography variant="body1">{product.description}</Typography>
                </Grid>
                <Grid item sx={{mt:'10px'}}>
                    <Typography variant="h5">Brand: {product.brand}</Typography>
                </Grid>
                <Grid item sx={{mt:'10px'}}>
                    <Typography variant="h5">Category: {product.category}</Typography>
                </Grid>
                <Grid item sx={{mt:'10px'}}>
                    <Typography variant="h5">
                       Quantity:{product.stock}
                    </Typography>
                </Grid>
                <Grid item sx={{mt:'10px'}}>
                    <Typography variant="h4">
                        Price: {product.price}$ 
                        <Typography variant='body1' sx={{color:'red',display:'inline',ml:'5px'}}>-{product.discountPercentage}%</Typography>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProductItemPage;