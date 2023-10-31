import { Product } from '@/types/product';

import { Grid, Rating, Typography } from '@mui/material';


import React from 'react';

interface Props{
    product:Product,
    screenWidth:number
}

const productItemId:React.FC<Props> = ({product,screenWidth}) =>{
    return (
        <>
            <Grid container wrap='wrap' justifyContent={'center'} sx={{border:'1px solid black',borderRadius:'10px',mr:'50px'}}>
                {product.images.length > 1 && screenWidth > 400 ? product.images.map(image =>
                    <Grid item key={image} sx={{m:'5px'}}>
                        <img src={image} alt="image" height={'150px'} width={'250px'} />
                    </Grid>
                ):(
                    <img src={product.images[0]} alt="image" height={'500px'} style={{marginBottom:'50px'}} />
                )}
            </Grid>
            <Grid container alignItems={'start'} direction={'column'}>
                <Grid item>
                    <Typography variant="h3" sx={{fontWeight:'bold'}}>{product.title}</Typography>
                </Grid>
                <Grid item>
                    <Rating
                    readOnly
                    value={product.rating}
                    />
                </Grid>
                <Grid item sx={{mt:'10px'}}>
                    <Typography variant="body1">{product.description}</Typography>
                </Grid>
                <Grid item sx={{mt:'10px'}}>
                    <Typography variant="h5">
                       Quantity:{product.stock}
                    </Typography>
                </Grid>
                <Grid item sx={{mt:'10px'}}>
                    <Typography variant="h4" sx={{display:'flex',alignItems:'center'}}> 
                            Price:  
                         {product.price}$ 
                        <Typography variant='body1' sx={{color:'red',display:'inline',ml:'5px'
                        }}>-{product.discountPercentage}%</Typography>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default productItemId;