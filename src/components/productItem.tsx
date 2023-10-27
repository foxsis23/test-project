import { Product } from '@/types/product';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CategoryIcon from '@mui/icons-material/Category';
import StarIcon from '@mui/icons-material/Star';

import React from 'react';
import { Button, CardActions } from '@mui/material';
import Link from 'next/link';
import { blue, yellow } from '@mui/material/colors';

interface Props{
    product:Product
}

const productItem:React.FC<Props> = ({product}) =>{

    return (
        <Grid item>
            <Card sx={{width:'350px',position:'relative'}}>
                <CardMedia
                sx={{height:200}}
                image={product.thumbnail}
                />
                <CardContent sx={{position:'relative',height:'100px'}}>
                    <Typography variant="h5">{product.title}</Typography>
                    <Typography variant='body2' sx={{mt:0,
                    padding:'2px',color:'black',width:'max-content',
                    display:'flex',alignItems:'center'
                    }}>
                        <CategoryIcon sx={{mr:'5px'}} /> {product.category}
                    </Typography>
                    <Typography variant="body1" 
                    sx={{position:'absolute',left:'80%',top:'0',
                    bottom:'100%',display:'flex',alignItems:'center',color:'black',
                    padding:'10px',}}
                    >   
                        <StarIcon sx={{color:yellow[700]}} />
                        {product.rating}
                    </Typography>
                </CardContent>
                <Typography sx={{position:'absolute',left:0,top:0,
                    border:'2px solid gray',backgroundColor:'gray',borderRadius:'0 0 10px 0',
                    padding:'4px',color:'white'
                    }}>{product.brand}</Typography>
                <CardActions sx={{justifyContent:'space-between'}}>
                    <Button size="small" variant="outlined">
                        <Link href={`products/${product.id}`}
                        style={{textDecoration:'none',color:blue[300]}}
                        >Explore</Link>
                    </Button>
                    <Typography variant="h5" sx={{fontWeight:'bold'}}>
                        {product.price}$
                        <Typography variant='body1' 
                        color='red' 
                        sx={{display:'inline',ml:'10px'}}>-{product.discountPercentage}%</Typography>
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default productItem;